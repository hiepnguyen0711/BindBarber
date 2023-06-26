import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import number_format from '../library/NumberFormat';

const windowWidth = Dimensions.get('window').width;
function ModalBookSchedule({ onPressCancel, onPressConfirm }) {

    const hourBooking = useSelector((state) => state.booking.hours);
    const dateBookingName = useSelector((state) => state.booking.dates.dateName);
    const barberBookingName = useSelector((state) => state.booking.barber);
    const serviceBooking = useSelector((state) => state.booking.service)
    const priceBooking = useSelector((state) => state.booking.prices);
    const dateBookingId = useSelector((state) => state.booking.dates.dateId);

    useEffect(() => {
        // console.log(serviceBooking);
    }, serviceBooking)
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.titleFont}>Xác nhận Đặt Lịch</Text>
                <View>
                    <Text style={styles.dateFont}>{dateBookingName} - {hourBooking}:00</Text>
                    <View style={styles.barberContainer}>
                        <Image source={require('../assets/images/scissors.png')}
                            style={styles.barberImage}
                        />
                        <Text style={styles.barberFont}>Thợ cắt: <Text style={styles.barberName}>{barberBookingName}</Text></Text>
                    </View>
                    {serviceBooking !== null && serviceBooking.map(service => (
                        <View style={styles.iconContainer}>
                            <Image source={require('../assets/images/favorite.gif')} style={styles.serviceIcon} />
                            <Text style={styles.serviceFont}>{service.serviceName}</Text>
                        </View>
                    ))
                    }

                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalTitleFont}>TỔNG CHI PHÍ</Text>
                    <Text style={styles.totalPriceFont}>{number_format(priceBooking)} đ</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnConfirmContainer} onPress={onPressConfirm}>
                        <Text style={styles.btnFont}>Xác nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressCancel}
                        style={styles.btnCancelContainer} >
                        <Text style={styles.btnFont}>Huỷ bỏ</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );
}
export default ModalBookSchedule;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        backgroundColor: '#FFFFFF',
        minheight: 280,
        maxHeight: 350,
        width: windowWidth - 80,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        padding: Platform.OS === 'android' ? 8 : 16,
        justifyContent: 'center'
    },
    titleFont: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'josefin-b',
        color: Colors.primary200
    },
    dateFont: {
        fontFamily: 'chakra-b',
        fontSize: 18,
        marginTop: 3,
        textTransform: 'uppercase'
    },
    barberContainer: {
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center'
    },
    barberImage: {
        width: 27,
        height: 27,
        resizeMode: 'contain',
        marginRight: 5
    },
    barberFont: {
        fontFamily: 'chakra-m',
        fontSize: 16
    },
    barberName: {
        color: Colors.primary200,
        fontFamily: 'chakra-b'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        marginVertical: Platform.OS === 'android' ? 2 : 6
    },
    serviceIcon: {
        width: 20,
        height: 20,
        marginRight: 4
    },
    serviceFont: {
        fontFamily: 'josefin-r',
        fontSize: 16
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    totalTitleFont: {
        fontSize: 18,
        fontFamily: 'chakra-b'
    },
    totalPriceFont: {
        fontSize: 20,
        color: '#367E18',
        fontFamily: 'chakra-b'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnConfirmContainer: {
        backgroundColor: Colors.primary200,
        width: windowWidth - 300,
        padding: Platform.OS === 'android' ? 8 : 12,
        borderRadius: 4,
        marginHorizontal: 4
    },
    btnCancelContainer: {
        backgroundColor: '#CC3636',
        width: windowWidth - 300,
        padding: Platform.OS === 'android' ? 8 : 12,
        borderRadius: 4,
        marginHorizontal: 4
    },
    btnFont: {
        textAlign: 'center',
        color: Colors.primary400,
        fontSize: 16,
        fontFamily: 'chakra-b'
    }
})