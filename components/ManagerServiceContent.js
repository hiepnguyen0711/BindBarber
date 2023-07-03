import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import number_format from "../library/NumberFormat";
import {Ionicons} from '@expo/vector-icons';
import { Colors } from "../constants/Colors";

function ManagerServiceContent({data, onPressEdit, onPressDelete}) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.serviceTitle}>{data.name}</Text>
                <View style={styles.serviceImageContainer}>
                    <Image source={require('../assets/images/dollar.png')} style={styles.serviceImage}/>
                    <Text style={styles.servicePrice}>{number_format(data.price)} đ</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnBuild} onPress={ ()=> onPressEdit(data.name, data.price, data.id)}>
                    <Ionicons name='build' size={18} color={Colors.primary400} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDelete} onPress={() => onPressDelete(data.name, data.id)}>
                    <Ionicons name='md-trash' size={18} color={Colors.primary400} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary400,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginVertical: 4,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    serviceTitle:{
        fontFamily: 'chakra-b',
        fontSize: 16
    },
    serviceImageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    serviceImage:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 8
    },
    servicePrice:{
        fontFamily: 'chakra-r'
    },
    btnContainer:{
        flexDirection: 'row'
    },
    btnBuild:{
        backgroundColor: Colors.primary300,
        padding: 4,
        borderRadius: 4,
        marginHorizontal: 4
    },
    btnDelete:{
        backgroundColor: '#CD1818',
        padding: 4,
        borderRadius: 4,
        marginHorizontal: 4
    }
})
export default ManagerServiceContent;