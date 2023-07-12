import { Alert, Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import SelectDayItem from "../components/SelectDayItem";
import SelectHourItem from "../components/SelectHourItem";
import SelectBarberItem from "../components/SelectBarberItem";
import SelectServiceItem from "../components/SelectServiceItem";
import ButtonBooking from "../components/ButtonBooking";
import { Colors } from "../constants/Colors";
import React, { useState, useEffect } from 'react';
import ModalBookSchedule from "../components/ModalBookSchedule";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeAllBookingPrice, removeAllBookingServices } from "../store/redux/bookSchedule";

function BookScreen() {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');

    const bookingDate = useSelector((state) => state.booking.dates);
    const [isModalVisible, setModalVisible] = useState(false);
    const [checkedLogin, setLogin] = useState(false);

    const hourBooking = useSelector((state) => state.booking.hours);
    const dateBookingId = useSelector((state) => state.booking.dates);
    const barberBookingName = useSelector((state) => state.booking.barber);
    const serviceBooking = useSelector((state) => state.booking.service)
    const priceBooking = useSelector((state) => state.booking.prices);
    const bookingRef = collection(FIRESTORE_DB, 'Bookings');
    const userRef = collection(FIRESTORE_DB, 'Users');

    function toggleModal() {
        if (checkedLogin === false) return Alert.alert('Thông báo', 'Bạn hãy đăng nhập để đặt lịch');
        else if (dateBookingId === null) return Alert.alert('Thông báo', 'Bạn chưa chọn ngày cắt');
        else if (hourBooking === null) return Alert.alert('Thông báo', 'Bạn chưa chọn khung giờ');
        else if (barberBookingName === '') return Alert.alert('Thông báo', 'Bạn chưa chọn thợ cắt');
        else if (priceBooking === 0) return Alert.alert('Thông báo', 'Bạn chưa chọn dịch vụ');
        else {
            setModalVisible(!isModalVisible);
        }
        setModalVisible(!isModalVisible);
    }
    function addBookingFireStore() {
        try {
            setModalVisible(!isModalVisible);
            setDoc(doc(bookingRef), {
                dateId: dateBookingId,
                hour: hourBooking,
                barberName: barberBookingName,
                service: serviceBooking,
                price: priceBooking,
                guestName: userName,
                phone: phone,
                status: 1
            });
            Alert.alert('Chúc mừng', 'Bạn đã đặt lịch thành công');
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        dispatch(removeAllBookingServices());
        dispatch(removeAllBookingPrice());
        const getUserData = async () => {
            try {
                const response = await AsyncStorage.getItem('isLogged');
                if (response == 1) {
                    setLogin(true);
                } else {
                    setLogin(false);
                }
                const uid = await AsyncStorage.getItem('uid');
                const q = query(userRef, where('uid', '==', uid));
                const result = onSnapshot(q, (querySnapshot) => {
                    const users = [];
                    querySnapshot.forEach((doc) => {
                        const user = doc.data();
                        users.push(user);
                    });
                    if (users.length > 0) {
                        setUserName(users[0].fullName);
                        setPhone(users[0].phone);
                    }
                })
            } catch (e) {
                console.log(e);
            }
        };
        getUserData();
    }, []);


    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <SelectDayItem />
            <SelectHourItem />
            <SelectBarberItem />
            <SelectServiceItem />
            <ButtonBooking onPress={toggleModal} />
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                statusBarTranslucent={true}
            >
                <ModalBookSchedule onPressCancel={toggleModal} onPressConfirm={addBookingFireStore} />
            </Modal>
        </ScrollView>
    );
}

export default BookScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
        flex: 1,
        padding: 8,
        paddingHorizontal: 10,

    }
})