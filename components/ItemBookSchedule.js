import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function ItemBookSchedule() {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View >
                    <View style={styles.dateHours}>
                        <Text style={styles.date}>15/06/2030</Text>
                        <Text> - </Text>
                        <Text style={styles.hours}>9:00 SA</Text>
                    </View>
                    <View style={styles.barberContainer}>
                        <Text style={styles.barber}>Barber: <Text style={styles.barberName}>BOSS</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.status}>chờ duyệt</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.price}>60.000 đ</Text>
                    <Text style={styles.service}>1 dịch vụ</Text>
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
        fontFamily: 'chakra-b'
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
        color: Colors.primary200
    },
    status:{
        fontFamily: 'josefin-m',
        color: Colors.primary300,
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