import { Alert, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import ItemService from "./ItemService";
import TotalService from "./TotalService";
import { useState, useEffect } from "react";

function SelectServiceItem() {
    const [totalPrice, setTotalPrice] = useState(0);

    const [totalService, setTotalService] = useState([]);
    const [selectedService, setSelectedService] = useState([{
        id: 1,
        serviceName: 'Cắt & Cạo',
        price: 60000,
        status: false
    }, {
        id: 2,
        serviceName: 'Uốn',
        price: 300000,
        status: false
    }, {
        id: 3,
        serviceName: 'Nhuộm',
        price: 200000,
        status: false
    }, {
        id: 4,
        serviceName: 'Ép Side',
        price: 120000,
        status: false
    }
    ]);
    function setToltalPriceHandler(){
        let totalPrice = 0;
        totalService.forEach(service => {
                totalPrice += service.price;
                console.log(totalPrice);
        });
        setTotalPrice(totalPrice);
    }
    function selectServiceHandle(value) {
        const updateServices = selectedService.map(service => {
            if (service.id === value) {
                const updateService = { ...service, status: !service.status };
                if(service.status){
                    setTotalPrice(prevTotalPrice => prevTotalPrice - updateService.price);
                }
                if (!updateService.status) {
                    setTotalService((prevTotalService) =>
                        prevTotalService.filter((item) => item.id !== updateService.id)
                    );
                } else {
                    setTotalService((prevTotalService) => [...prevTotalService, updateService]);
                    setTotalPrice(prevTotalPrice => prevTotalPrice + updateService.price);
                }
                return updateService;
            }
            return service;
        });
        setSelectedService(updateServices);

    }

    function renderItemService() {

        return (
            selectedService.map((service) => (
                <ItemService
                    key={service.id}
                    title={service.serviceName}
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