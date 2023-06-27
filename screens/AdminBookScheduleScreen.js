import { Alert, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from 'react';
import BookedSchedule from "../components/BookedSchedule";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function AdminBookScheduleScreen() {

    const bookingRef = collection(FIRESTORE_DB, 'Bookings');
    const [bookingData, setBookingData] = useState([]);
   
    useEffect(() => {
        const getBookingData = async () => {
            try {
                const q = query(bookingRef, where('status', '==', 1));
                const result = onSnapshot(q, (querySnapshot) => {
                    const bookings = [];
                    querySnapshot.forEach((doc) => {
                        const booking = doc.data();
                        bookings.push({id: doc.id, ...booking});
                    });
                    setBookingData(bookings);
                });
            } catch (error) {
                console.log(error);
            }
        }
        getBookingData();
    }, [bookingData]);
    function confirmBookingHandler(id){
        const updateBooking = doc(bookingRef, id);
        updateDoc(updateBooking, {
            status: 2
        })
    }
    function cancelBookingHandler(id){
        const updateBooking = doc(bookingRef, id);
        updateDoc(updateBooking, {
            status: 3
        })
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
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
        marginBottom: 10
    }
})

export default AdminBookScheduleScreen;