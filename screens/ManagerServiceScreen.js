import { Alert, Modal, ScrollView, StyleSheet, View } from "react-native";
import ManagerServiceHeader from "../components/ManagerServiceHeader";
import { Colors } from "../constants/Colors";
import ManagerServiceContent from "../components/ManagerServiceContent";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import React, { useCallback, useEffect, useState } from "react";
import ModalManagerService from "../components/ModalManagerService";

function ManagerServiceScreen() {
    const serviceRef = collection(FIRESTORE_DB, 'Services');
    const [serviceData, setServiceData] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [nameService, setNameService] = useState('');
    const [priceService, setPriceService] = useState('0');
    const [selectedServiceId, setSelectedServiceId] = useState('');

    useEffect(() => {
        getServiceData();
    }, [getServiceData]);
    const getServiceData = useCallback(() => {
        const q = query(serviceRef, orderBy('price', 'asc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const services = [];
            querySnapshot.forEach((doc) => {
                const service = doc.data();
                services.push({ id: doc.id, ...service });
            });
            setServiceData(services);
        })
    }, []);
    const addService = (serviceName, servicePrice) => {
        const name = serviceName.toString();
        const price = Number(servicePrice);
        if (name === '' || price === '') return Alert.alert('Lỗi', 'Không được bỏ trống');
        Alert.alert('Xác nhận', `Bạn có chắc chắn thêm dịch vụ ${name} vào danh sách không?`,
            [
                {
                    text: 'Đồng ý',
                    onPress: () => addServiceToFirebase(name, price)
                },
                {
                    text: 'Huỷ bỏ',
                    style: 'cancel'
                }
            ]);
    }
    const addServiceToFirebase = async (name, price) => {
        try {
            await setDoc(doc(serviceRef), {
                name: name,
                price: price
            });
            Alert.alert('Thông báo', `Thêm dịch vụ ${name} thành công !`);
        } catch (e) {
            console.log(e);
        }

    }
    const CancelModal = () => {
        setModalVisible(false);
    }
    const toggleModal = async (name, price, id) => {
        const prices = await Number(price);
        await setPriceService(prices);
        await setNameService(name);
        await setSelectedServiceId(id);
        setModalVisible(!isModalVisible);

    }
    const SaveServiceModal = (name, price, id) => {
        
        try {
            updateDoc(doc(serviceRef, id), {
                name: name,
                price: price
            });
            Alert.alert('Thông báo', 'Lưu lại thành công !');
            setModalVisible(!isModalVisible);
        } catch (e) {
            console.log(e);
        }
    }
    const onPressDelete = (name, id) => {
        Alert.alert('Xoá dịch vụ', `Bạn có chắc chắn xoá dịch vụ " ${name} " không?`,
        [
            {
                text: 'Đồng ý',
                onPress: () => deleteService(id),
            },
            {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ]);
    }
    const deleteService = (id) => {
        try {
            deleteDoc(doc(serviceRef, id));
            Alert.alert('Thông báo', 'Xoá thành công');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <ManagerServiceHeader onPress={addService} />
                {serviceData.map((item, index) => (
                    <ManagerServiceContent data={item} key={index} onPressEdit={toggleModal} onPressDelete={onPressDelete} />
                ))}
            </View>
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                statusBarTranslucent={true}
            >
                <ModalManagerService name={nameService} price={priceService} id={selectedServiceId} onPressSave={SaveServiceModal} onPressCancel={CancelModal} />
            </Modal>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
        flex: 1
    },
    container: {
        paddingHorizontal: 10
    }
})
export default ManagerServiceScreen;