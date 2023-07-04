import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import number_format from "../library/NumberFormat";

const windowWidth = Dimensions.get('window').width;
function BookedSchedule({guestName, phone, dateId, hour, service, price, onPressConfirm, onPressCancel, id}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameFont}>{guestName} - {phone}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateFont}>{dateId}</Text>
                <Text style={styles.hourFont}>{hour}:00</Text>
            </View>
            {service.map((service, index) => (
                <View key={index} style={styles.serviceContainer}>
                <Image source={require('../assets/images/favorite.gif')} style={styles.serviceIcon} />
                <Text style={styles.serviceFont}>{service}</Text>
                </View>
            ))}
            
            <View style={styles.priceContainer}>
                <Text style={styles.priceFont}>{number_format(price)} đ</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnConfirm} onPress={() => onPressConfirm(id)}>
                    <Ionicons name="checkmark-sharp" color={'white'} size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancel} onPress={() => onPressCancel(id)}>
                    <Ionicons name="close-sharp" color={'white'} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: windowWidth - 32,
        margin: 8,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    nameFont:{
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 4,
        color: Colors.primary200
    },
    dateContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    dateFont:{
        fontSize: 16,
        fontFamily: 'chakra-m',
        textTransform: 'uppercase'
    },
    hourFont:{
        fontSize: 16,
        color: 'gray',
        fontFamily: 'chakra-m'
    },
    serviceContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: Platform.OS === 'android'? 2:4
    },
    serviceIcon: {
        width: 27,
        height: 27
    },
    serviceFont:{
        fontFamily: 'josefin-r',
        fontSize: 14,
        color: 'gray'
    },
    priceContainer:{
        alignItems: 'flex-end',
        paddingHorizontal: 12
    },
    priceFont: {
        fontSize: 22,
        fontFamily: 'chakra-b',
        color: '#1F8A70'
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 6
    },
    btnConfirm:{
        backgroundColor: '#FF7B54',
        padding: 8,
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    btnCancel:{
        backgroundColor: '#E8C4C4',
        padding: 8,
        marginHorizontal: 4,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
});

export default BookedSchedule;
