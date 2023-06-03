import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;

function ButtonLogout(){
    return(
        <TouchableOpacity style={styles.root}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonFont}>Đăng xuất</Text>
            </View>
        </TouchableOpacity>
    );
}
export default ButtonLogout;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center'
    },
    buttonContainer:{
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        padding: 12,
        borderRadius: 8
    },
    buttonFont:{
        fontFamily: 'chakra-b',
        color: Colors.primary400,
        fontSize: 28,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})