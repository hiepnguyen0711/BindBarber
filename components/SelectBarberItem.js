import { ScrollView, StyleSheet, Text, View } from "react-native";
import BarberItem from "./barberItem";
import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { addBookingBarber } from "../store/redux/bookSchedule";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { Colors } from "../constants/Colors";

function SelectBarberItem() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const dispatch = useDispatch();
    const [selectBarber, setSelectBarber]= useState(null);
    const [barberData, setBarberData] = useState([]);
    function selectBarberHandler(value, name){
        setSelectBarber(value);
        dispatch(addBookingBarber({barberName: name}));
    }

    const getBarberData = useCallback(() => {
        const q = query(userRef, where('barber', '==', true), orderBy('rank', 'desc'));
        const result = onSnapshot(q, (querySnapshot) =>{
            const barbers = [];
            querySnapshot.forEach((doc) => {
                const barber = doc.data();
                barbers.push({id: doc.id, ...barber});
            });
            setBarberData(barbers);
        })
    },[]);

    useEffect(() => {
        getBarberData();
    }, []);
    return (
        <View>
            <View>
                <Text style={styles.barberTitle}>
                    Barber
                </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.barberGroup}>
                {barberData.map((item, index) => (
                    <BarberItem 
                    key={index}
                    imageUrl={item.avatar} 
                    barberName={item.fullName}
                    color={Colors.primary300}
                    onPress={selectBarberHandler}
                    value={index}
                    name={item.fullName}
                    selected={selectBarber === index}
                    />
                ))}
                   </View>
            </ScrollView>
        </View>
    );
}
export default SelectBarberItem;

const styles = StyleSheet.create({
    barberTitle: {
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    barberGroup:{
        flexDirection: 'row',
        marginVertical: 8
    }
})