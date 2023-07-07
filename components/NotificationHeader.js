import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function NotificationHeader(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>GỬI THÔNG BÁO</Text>
            <TextInput placeholder="Gửi thông báo đến toàn thể khách hàng" style={styles.input} multiline={true}/>
            <TouchableOpacity style={styles.btnNotification}>
                <Text>Gửi thông báo</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        minHeight: 300,
        backgroundColor: Colors.primary100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    headerTitle:{
        color: Colors.primary300,
        fontFamily: 'chakra-b',
        fontSize: 22
    },
    input:{
        backgroundColor: Colors.primary400,
        padding: 16,
        borderRadius: 4,
        elevation: 4,
        width: windowWidth - 100,
        height: 100
    },
    btnNotification:{
        backgroundColor: Colors.primary200,
        padding: 16,
        borderRadius: 4,
        elevation: 4,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})
export default NotificationHeader;