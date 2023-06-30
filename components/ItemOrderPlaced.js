import { ActivityIndicator, Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import number_format from "../library/NumberFormat";
import { useState } from "react";
// import { Timestamp } from 'firebase/firestore';

const windowWidth = Dimensions.get('window').width;
function ItemOrderPlaced({ productData, price, status, date }) {
    const [loading, setLoading] = useState(false);
    const timestamp = date;
    const dateOrder = timestamp.toDate();
    const day = dateOrder.getDate();
    const month = dateOrder.getMonth() + 1; // Lưu ý: Tháng trong JavaScript được đếm từ 0 đến 11
    const year = dateOrder.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    function onLoading(value){
        setLoading(value);
    }
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>Ngày đặt</Text>
                    <Text style={styles.dateFont}>{formattedDate}</Text>
                    {/* <Text style={styles.statusFont}>Đã giao</Text> */}
                </View>
                {productData.map((product, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <View>
                            {loading && <ActivityIndicator size={'large'} color={Colors.primary200}  style={styles.activity}/> }
                            <Image 
                            source={{ uri: product.image }} 
                            style={styles.itemImage} 
                            onLoadStart={() => onLoading(true)}
                            onLoadEnd={() => onLoading(false)}
                            />
                            </View>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productName}>{product.quantity}</Text>
                        <Text style={styles.productPrice}>{number_format(product.price * product.quantity)} đ</Text>
                    </View>
                ))}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalTitle}>TỔNG CỘNG</Text>
                    <Text style={styles.totalFont}>{number_format(price)} đ</Text>
                </View>
            </View>
        </View>
    );
}
export default ItemOrderPlaced;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        width: windowWidth - 36,
        marginVertical: 8,
        justifyContent: 'space-between',
        padding: 12,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    dateTitle: {
        fontFamily: 'chakra-m',
        textTransform: 'uppercase',
        fontSize: 16
    },
    dateFont: {
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        fontSize: 16,
        marginLeft: 8
    },
    statusFont: {
        fontFamily: 'chakra-m',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    activity:{
        position: 'absolute',
        zIndex: 1
    },
    itemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    productName: {
        fontFamily: 'josefin-m'
    },
    productPrice: {
        fontFamily: 'chakra-r',
        color: '#367E18'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalTitle: {
        fontFamily: 'chakra-b',
        fontSize: 18
    },
    totalFont: {
        fontFamily: 'chakra-b',
        fontSize: 18,
        color: Colors.primary200
    }
})