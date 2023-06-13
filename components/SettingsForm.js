import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;

function SettingsForm({title, titleContent, titleInput, type}){
    function handlePress(){
        Keyboard.dismiss();
    }
    return(
        <TouchableWithoutFeedback onPress={handlePress}>

        <View style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleFont}>{title}: </Text>
                    <Text style={styles.titleName}>{titleContent}</Text>
                </View>
                <TextInput placeholder={titleInput} 
                style={styles.input}
                 maxLength={32}
                 autoCapitalize="characters" 
                 keyboardType={type}
                 />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <Text style={styles.btnSave}>Lưu lại</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>

    );
}
export default SettingsForm;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary100,
        padding: 8,
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleFont:{
        color: Colors.primary400,
        fontFamily: 'josefin-m',
        fontSize: 18
    },
    titleName:{
        color: Colors.primary200,
        fontFamily: 'chakra-b',
        fontSize: 22,
        paddingLeft: 4,
        textTransform: 'uppercase'
    },
    input:{
        backgroundColor: Colors.primary400,
        padding: 16,
        fontSize: 18,
        fontFamily: 'chakra-m',
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginTop: 8,
    },
    btnContainer:{
        alignItems: 'center'
    },
    btnSave:{
        fontFamily: 'chakra-b',
        fontSize: 28,
        color: Colors.primary400,
        backgroundColor: Colors.primary200,
        padding: 4,
        borderRadius: 8,
        textAlign: 'center',
        width: windowWidth - 196,
        textTransform: 'uppercase',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})