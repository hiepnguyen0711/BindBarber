import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;

function ButtonLogout(){
    const navigation = useNavigation();
    function logoutHandler(){
        AsyncStorage.clear();
        navigation.replace('bottomtab');
        // AsyncStorage.setItem('isLogged', '0');
    }
    return(
        <TouchableOpacity style={styles.root} onPress={logoutHandler}>
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