import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import number_format from '../library/NumberFormat'
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function OrderDelivered() {
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateTitle}>Ngày đặt</Text>
                <Text style={styles.dateFont}>06/06/2023</Text>
            </View>
            <View style={styles.phoneContainer}>
                <Text style={styles.phoneFont}>0772655181</Text>
                <Text> - </Text>
                <Text style={styles.nameFont}>Hiệp</Text>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Giao đến:</Text>
                <View style={styles.addressFontContainer}>
                    <Text style={styles.addressFont}>298/2/1A khuông việt, p. Phú Trung, Q. Tân Phú, Tp.HCM</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fimage-1687946402412?alt=media&token=6de7893c-73ae-4dbf-9692-5876a345ec38' }}
                    style={styles.productImage} />
                <Text style={styles.productName}>Hiệp pomade</Text>
                <Text style={styles.productQuantity}>3</Text>
                <Text style={styles.productPrice}>{number_format(1500000)} đ</Text>
            </View>
            <View style={styles.productContainer}>
                <Image
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fimage-1687946402412?alt=media&token=6de7893c-73ae-4dbf-9692-5876a345ec38' }}
                    style={styles.productImage} />
                <Text style={styles.productName}>Hiệp pomade</Text>
                <Text style={styles.productQuantity}>3</Text>
                <Text style={styles.productPrice}>{number_format(1500000)} đ</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalTitle}>TỔNG CỘNG</Text>
                <Text style={styles.totalPrice}>{number_format(1515000)} đ</Text>
            </View>
            <View style={styles.btnContainer}>
                <Text style={styles.confirmFont}>Ngày giao:</Text>
                <Text style={styles.confirmFont}>08/06/2023</Text>
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
    phoneContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    phoneFont:{
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary200
    },
    nameFont:{
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
    productContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 4
    },
    productImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    productName:{
        fontFamily: 'chakra-m'
    },
    productQuantity:{
        fontFamily: 'chakra-m'
    },
    productPrice:{
        fontFamily: 'chakra-m'
    },
    totalContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    totalTitle:{
        fontFamily: 'chakra-m',
        fontSize: 16,

    },
    totalPrice:{
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary200
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnConfirm:{
        backgroundColor: '#2A0944',
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    confirmFont:{
        fontFamily: 'chakra-b',
        marginHorizontal: 8
    },
   
})
export default OrderDelivered;