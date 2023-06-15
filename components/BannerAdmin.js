import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";

function BannerAdmin({navigation}) {
    function BackHandler(){
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.ioniconsContainer}>
                <TouchableOpacity onPress={BackHandler}>
                    <Ionicons name='chevron-back-sharp' size={32} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='notifications' size={28} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.hiFont}>Hi <Text style={styles.nameFont}>Bind</Text>,</Text>
                <Text style={styles.dateFont}>Hôm nay là ngày 15/06/2023</Text>
            </View>
        </View>
    );
}
export default BannerAdmin;
const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: Colors.primary100,
        paddingTop: 60,
        paddingHorizontal: 22
    },
    ioniconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    nameContainer:{
        paddingHorizontal: 10,
        marginTop: 30
    },
    hiFont:{
        fontFamily: 'josefin-m',
        fontSize: 20,
        color: Colors.primary400
    },
    nameFont:{
        textTransform: 'uppercase',
        color: Colors.primary300,
    },
    dateFont:{
        color: '#EEEEEE',
        fontFamily: 'josefin-r',
        marginTop: 2
    }
})