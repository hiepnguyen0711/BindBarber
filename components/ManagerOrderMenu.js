import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from '../constants/Colors';

function ManagerOrderMenu() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnWait}>
                <Text style={styles.waitFont}>Chờ duyệt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelivering}>
                <Text style={styles.waitFont}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelivered}>
                <Text style={styles.waitFont}>Đã giao</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    btnWait:{
        backgroundColor: Colors.primary200,
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    waitFont :{
        fontFamily: 'chakra-b',
        color: Colors.primary400
    },
    btnDelivering:{
        backgroundColor: Colors.primary300,
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnDelivered:{
        backgroundColor: '#9CA777',
        padding: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default ManagerOrderMenu;