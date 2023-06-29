import { Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function CartTotalPrice() {
    return (
        <View>
             <TextInput placeholder="Nhập địa chỉ của bạn"  style={styles.inputShip}/>
            <View style={styles.shipContainer}>
                <Text style={styles.shipTitleFont}>Phí vận chuyển</Text>
                <Text style={styles.shipPriceFont}>15.000 đ</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalTitleFont}>TỔNG CỘNG</Text>
                <Text style={styles.totalPriceFont}>275.000 đ</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnConfirm}>
                    <Text style={styles.btnFont}>Đặt hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputShip:{
        backgroundColor: Colors.primary400,
        elevation: 8,
        padding: Platform.OS === 'android'? 4: 8,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        marginVertical: 4
    },
    shipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth - 32,
        alignItems: 'center'
    },
    shipTitleFont:{
        fontFamily: 'chakra-m',
        fontSize: 18
    },
    shipPriceFont:{
        fontFamily: 'chakra-b',
        fontSize: 18
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth - 32
    },
    totalTitleFont:{
        fontFamily: 'chakra-m',
        fontSize: 16
    },
    totalPriceFont:{
        fontFamily: 'chakra-b',
        fontSize: 18,
        color: Colors.primary200
    },
    btnContainer:{
        alignItems: 'center'
    },
    btnConfirm:{
        backgroundColor: Colors.primary200,
        width: windowWidth - 232,
        padding: 8,
        borderRadius: 4,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginVertical: 4
    },
    btnFont:{
        textAlign: 'center',
        fontFamily: 'chakra-b',
        fontSize: 18,
        color: Colors.primary400,
    }
})
export default CartTotalPrice;