import { Alert, Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import SelectDayItem from "../components/SelectDayItem";
import SelectHourItem from "../components/SelectHourItem";
import SelectBarberItem from "../components/SelectBarberItem";
import SelectServiceItem from "../components/SelectServiceItem";
import ButtonBooking from "../components/ButtonBooking";
import { Colors } from "../constants/Colors";
import React, { useState, useEffect } from 'react';
import ModalBookSchedule from "../components/ModalBookSchedule";
import { useSelector } from "react-redux";

function BookScreen() {

    const bookingDate = useSelector((state) => state.booking.dates);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState();
    function toggleModal() {
        setModalVisible(!isModalVisible);
    }
    
    useEffect(() => {
        console.log('bookingDate:', bookingDate);
    }, [selectedDay, bookingDate]);


    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <SelectDayItem />
            <SelectHourItem />
            <SelectBarberItem />
            <SelectServiceItem  />
            <ButtonBooking onPress={toggleModal} />
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
            >
                <ModalBookSchedule onPressCancel={toggleModal} />
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