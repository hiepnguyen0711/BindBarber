import { Alert, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import ItemService from "./ItemService";
import TotalService from "./TotalService";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, addBookingPrice, addBookingService, removeBookingPrice, removeBookingService } from "../store/redux/bookSchedule";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function SelectServiceItem() {
    const serviceRef = collection(FIRESTORE_DB, 'Services');
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    const [totalService, setTotalService] = useState([]);
    const [selectedService, setSelectedService] = useState([]);

    
    async function selectServiceHandle(value) {
        const updateServices = await selectedService.map((service) => {
            if (service.id === value) {
                const updateService = { ...service, status: !service.status };
                if(service.status){
                    setTotalPrice(prevTotalPrice => prevTotalPrice - updateService.price);
                    dispatch(removeBookingPrice({price: updateService.price}));
                }
                if (!updateService.status) {
                    setTotalService((prevTotalService) =>
                        prevTotalService.filter((item) => item.id !== updateService.id)
                    );
                    dispatch(removeBookingService({serviceName: service.name})); // remove itemService to totalService . variable
                } 
                else {
                    setTotalService((prevTotalService) => [...prevTotalService, updateService]);
                    setTotalPrice(prevTotalPrice => prevTotalPrice + service.price);
                    dispatch(addBookingPrice({price: service.price}));
                    dispatch(addBookingService({serviceName: service.name})); // add itemService to totalService . variable
                }
                return updateService;
            }
            return service;
        });
        setSelectedService(updateServices);

    }
    const getServiceData = useCallback( () => {
        const q = query(serviceRef, orderBy('price', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const services = [];
            let id = 0;
            querySnapshot.forEach((doc) => {
                const service = doc.data();
                const price = Number(doc.get('price'));
                services.push({id: id,uid: doc.id, status: false, ...service, price: price});
                id += 1;
            });
            setSelectedService(services);
        });
    }, []);
    useEffect(() => {
        getServiceData();
    },[getServiceData]);

    function renderItemService() {

        return (
            selectedService.map((service, index) => (
                <ItemService
                    key={index}
                    title={service.name}
                    price={service.price}
                    nameIonicons={service.status === false ? 'add-circle' : 'remove-circle'}
                    onPress={() => selectServiceHandle(service.id)}
                />
            ))
        );
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.serviceTitle}>
                    Dịch Vụ
                </Text>
            </View>
            <View style={styles.serviceBorder}>
                {renderItemService()}
            </View>
            <View>
                <TotalService 
                totalCount={totalService.length} 
                totalPrice={totalPrice} />
            </View>
        </View>
    );
}
export default SelectServiceItem;
const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    serviceTitle: {
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    serviceBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8AA42',
        marginBottom: 20,
        paddingBottom: 20,
        borderStyle: Platform.OS === 'android' ? 'dashed' : 'solid',
    }
})