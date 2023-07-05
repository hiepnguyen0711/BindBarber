import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from 'react';
import BookedSchedule from "../components/BookedSchedule";
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { Colors } from "../constants/Colors";

function AdminBookScheduleScreen() {

    const bookingRef = collection(FIRESTORE_DB, 'Bookings');
    const [bookingData, setBookingData] = useState([]);

    const getBookingData = useCallback(() => {
        try {
            const q = query(bookingRef, where('status', '==', 1));
            const result = onSnapshot(q, (querySnapshot) => {
                const bookings = [];
                querySnapshot.forEach((doc) => {
                    const booking = doc.data();
                    bookings.push({ id: doc.id, ...booking });
                });
                setBookingData(bookings);
            });
        } catch (error) {
            console.log(error);
        }
    }, [bookingData]);
    const getBookingDataReceived = useCallback(() => {
        try {
            const q = query(bookingRef, where('status', '==', 2), orderBy('dateId', 'desc'));
            const result = onSnapshot(q, (querySnapshot) => {
                const bookings = [];
                querySnapshot.forEach((doc) => {
                    const booking = doc.data();
                    bookings.push({id: doc.id, ...booking});
                });
                setBookingData(bookings);
            })
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        getBookingData();
    }, []);
    function confirmBookingHandler(id) {
        const updateBooking = doc(bookingRef, id);
        updateDoc(updateBooking, {
            status: 2
        })
    }
    function cancelBookingHandler(id) {
        const updateBooking = doc(bookingRef, id);
        updateDoc(updateBooking, {
            status: 3
        })
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnNotReceived}>
                        <Text style={styles.notReceivedFont}>Chưa nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnReceived} onPress={getBookingDataReceived}>
                        <Text style={styles.notReceivedFont}>Đã nhận</Text>
                    </TouchableOpacity>
                </View>
                {bookingData !== null && bookingData.map((booking, index) => (
                    <BookedSchedule
                        key={index}
                        guestName={booking.guestName}
                        phone={booking.phone}
                        dateId={booking.dateId}
                        hour={booking.hour}
                        service={booking.service}
                        price={booking.price}
                        id={booking.id}
                        status={booking.status}
                        onPressConfirm={confirmBookingHandler}
                        onPressCancel={cancelBookingHandler}
                    />
                ))}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 10
    },
    btnContainer:{
        flexDirection: 'row'
    },
    btnNotReceived:{
        backgroundColor: Colors.primary200,
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    notReceivedFont:{
        fontFamily: 'chakra-b',
        color: Colors.primary400
    },
    btnReceived:{
        backgroundColor: Colors.primary100,
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})

export default AdminBookScheduleScreen;