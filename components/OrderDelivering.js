import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import number_format from '../library/NumberFormat'
import { Colors } from "../constants/Colors";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
function OrderDelivering({ data, onPressFinishOrder }) {
    const [loading, setLoading] = useState(false);
    const timestamp = data.date;
    const dateOrder = timestamp.toDate();
    const day = dateOrder.getDate();
    const month = dateOrder.getMonth() + 1;
    const year = dateOrder.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    const onLoading = (value) => {
        setLoading(value);
    }
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateTitle}>Ngày đặt</Text>
                <Text style={styles.dateFont}>{formattedDate}</Text>
            </View>
            <View style={styles.phoneContainer}>
                <Text style={styles.phoneFont}>{data.phone}</Text>
                <Text> - </Text>
                <Text style={styles.nameFont}>{data.name}</Text>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Giao đến:</Text>
                <View style={styles.addressFontContainer}>
                    <Text style={styles.addressFont}>{data.address}</Text>
                </View>
            </View>
            {data.product.map((order, index) => (
                <View style={styles.productContainer} key={index}>
                {loading && <ActivityIndicator size={'large'} color={Colors.primary200} style={styles.acitivity} /> }
                <Image
                    source={{ uri: order.image }}
                    style={styles.productImage} 
                    onLoadStart={() => onLoading(true)}
                    onLoadEnd={() => onLoading(false)}
                    />
                <Text style={styles.productName}>{order.name}</Text>
                <Text style={styles.productQuantity}>{order.quantity}</Text>
                <Text style={styles.productPrice}>{number_format(order.price*order.quantity)} đ</Text>
            </View>
            ))}
            
            <View style={styles.totalContainer}>
                <Text style={styles.totalTitle}>TỔNG CỘNG</Text>
                <Text style={styles.totalPrice}>{number_format(data.price)} đ</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnConfirm} onPress={() => onPressFinishOrder(data.id)}>
                    <Text style={styles.confirmFont}>Hoàn tất</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: windowWidth - 32,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        padding: 8,
        margin: 8
    },
    dateContainer: {
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'

    },
    dateTitle: {
        fontFamily: 'chakra-m',
    },
    dateFont: {
        fontFamily: 'chakra-b'
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    phoneFont: {
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary200
    },
    nameFont: {
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary200
    },
    addressContainer: {
        flexDirection: 'row',
    },
    addressTitle: {
        fontFamily: 'chakra-b'
    },
    addressFontContainer: {
        width: windowWidth - 100
    },
    addressFont: {
        fontFamily: 'chakra-m',
        paddingHorizontal: 4,

    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 4
    },
    acitivity:{
        position: 'absolute',
        zIndex: 1,
        left: 10
    },
    productImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    productName: {
        fontFamily: 'chakra-m'
    },
    productQuantity: {
        fontFamily: 'chakra-m'
    },
    productPrice: {
        fontFamily: 'chakra-m'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    totalTitle: {
        fontFamily: 'chakra-m',
        fontSize: 16,

    },
    totalPrice: {
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary200
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnConfirm: {
        backgroundColor: '#2A0944',
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    confirmFont: {
        fontFamily: 'chakra-b',
        color: Colors.primary400
    },
    btnCancel: {
        backgroundColor: '#A10035',
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
})
export default OrderDelivering;