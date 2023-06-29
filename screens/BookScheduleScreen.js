import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import { Colors } from "../constants/Colors";
import BannerBookSchedule from "../components/BannerBookSchedule";
import ItemBookSchedule from "../components/ItemBookSchedule";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

function BookScheduleScreen({ navigation }) {

    const [userPhone, setUserPhone] = useState(0);
    const [userBookingData, setUserBookingData] = useState([]);
    const [userName, setUserName] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerShown: false,
            //   headerBackTitleVisible: true,
            headerStyle: {
                backgroundColor: Colors.primary100,
                borderBottomWidth: 0
            }
        });

        const getUserBookingData = async () => {
            try {
                await AsyncStorage.getItem('phone')
                    .then((value) => {
                        setUserPhone(value);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                const userBookingRef = await collection(FIRESTORE_DB, 'Bookings');
                const q = query(userBookingRef, where('phone', '==', userPhone));
                const result = onSnapshot(q, (querySnapshot) => {
                    const userBookings = [];
                    querySnapshot.forEach((doc) => {
                        const userBooking = doc.data();
                        userBookings.push(userBooking);
                    });
                    setUserBookingData(userBookings);
                    if(userBookings.length > 0){
                        setUserName(userBookings[0].guestName);
                    }
                });
            } catch (error) {

            }
        }
        getUserBookingData();
    }, [userPhone, userName]);

    // console.log(userPhone);
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <BannerBookSchedule navigation={navigation} name={userName}/>
            {userBookingData !== null && userBookingData.map((booking, index) => (
                <ItemBookSchedule
                    key={index}
                    hour={booking.hour}
                    date={booking.dateId}
                    barberName={booking.barberName}
                    price={booking.price}
                    service={booking.service.length}
                    status={booking.status}
                />
            ))}
           
        </ScrollView>
    );
}

export default BookScheduleScreen;
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    }
})