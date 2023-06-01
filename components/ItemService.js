import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import number_format from "../library/NumberFormat";
function ItemService({title, price, nameIonicons }) {
    return (
        <View style={styles.serviceContainer}>
        <View style={styles.innerContainer}>
            <View style={styles.serviceInfo}>
                <Text style={styles.serviceFont}>
                    {title}
                </Text>
                <View style={styles.dollarContainer}>
                <Image source={require('../assets/images/dollar.png')} style={styles.dollarImage} />
                <Text style={styles.dollarFont}>{number_format(price)} đ</Text>
                </View>
            </View>
            <View >
                <TouchableOpacity>
                    <Ionicons name={nameIonicons} size={32} color='#E57C23' />
                </TouchableOpacity>
            </View>
        </View>
            
        </View>
    );
}
export default ItemService;
const styles = StyleSheet.create({
    serviceContainer:{
        backgroundColor: '#F8F1F1',
        paddingVertical: 4,
        borderRadius: 8,
        margin: 8,
        paddingHorizontal: 12,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        // flex: 1
    },
    serviceInfo:{
        alignItems: 'flex-start',
    },
    serviceFont:{
        fontFamily: 'josefin-b',
        fontSize: 16
    },
    dollarContainer:{
        flexDirection: 'row',
        marginVertical: 0,
        alignItems: 'center'
    },
    dollarImage:{
        width: 20,
        height: 15,
        resizeMode: 'contain',
        marginRight: 4
    },
    dollarFont:{
        color: '#025464',
        fontFamily: 'chakra-m',
    }

})