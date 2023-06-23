import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ButtonBooking({onPress}) {
    return (
        <View style={styles.root}>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.buttonFont}>Đặt Lịch</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
}
export default ButtonBooking;

const styles = StyleSheet.create({
    root:{
       
        alignItems: 'center',

    },
    container: {
        backgroundColor: '#E57C23',
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    buttonFont: {
        fontFamily: 'chakra-b',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        textTransform: 'uppercase'

    }
})