import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function ButtonShop({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Ionicons name="cart-outline" size={15} color={'white'} />
                <Text style={styles.buttonTitle}> Thêm vào giỏ hàng </Text>
            </View>
        </TouchableOpacity>
    );
}
export default ButtonShop;

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary200,
        width: 150,
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    buttonTitle:{
        color: Colors.primary400,
        fontFamily: 'josefin-r',
        fontSize: 13
    }
})