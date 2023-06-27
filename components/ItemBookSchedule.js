import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import number_format from "../library/NumberFormat";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;
function ItemBookSchedule({hour, date, barberName, price, service, status}) {
    const getStatusBooking = (status) => {
        if(status === 1)
        {
            return(<Text style={styles.status}>chờ duyệt</Text>);
        }else if(status === 2){
            return(<Text style={styles.statusConfirm}>Đã xác nhận</Text>);
        }else if(status === 3){
            return(<Text style={styles.statusCancel}>Từ chối</Text>);
        }
    }
    useEffect(() => {
        
    },[]);
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View >
                    <View style={styles.dateHours}>
                        <Text style={styles.date}>{date}</Text>
                        <Text> - </Text>
                        <Text style={styles.hours}>{hour}:00</Text>
                    </View>
                    <View style={styles.barberContainer}>
                        <Text style={styles.barber}>Barber: <Text style={styles.barberName}>{barberName}</Text></Text>
                    </View>
                    <View>
                        {getStatusBooking(status)}
                    </View>
                </View>
                <View>
                    <Text style={styles.price}>{number_format(price)} đ</Text>
                    <Text style={styles.service}>{service} dịch vụ</Text>
                </View>
            </View>
        </View>
    );
}
export default ItemBookSchedule;
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        marginTop: -15
    },
    container: {
        backgroundColor: Colors.primary400,
        width: windowWidth - 32,
        borderRadius: 4,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginVertical: 4,
        shadowColor:'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginBottom: 20
    },
    dateHours:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2
    },
    date:{
        fontFamily: 'chakra-b',
        textTransform: 'uppercase'
    },
    hours:{
        fontFamily: 'chakra-b',
        color: 'gray'
    },
    barberContainer:{
        paddingVertical: 2
    },
    barber:{
        fontFamily: 'chakra-b'
    },
    barberName:{
        color: Colors.primary200,
        textTransform: 'uppercase'
    },
    status:{
        fontFamily: 'josefin-m',
        color: Colors.primary300,
        paddingVertical: 2
    },
    statusConfirm:{
        fontFamily: 'josefin-m',
        color: '#1F8A70',
        paddingVertical: 2
    },
    statusCancel:{
        fontFamily: 'josefin-m',
        color: '#820000',
        paddingVertical: 2
    },
    price:{
        color: '#1F8A70',
        fontFamily: 'chakra-b',
        fontSize: 18
    },
    service:{
        fontFamily: 'josefin-r',
        color: 'gray'
    }
})