import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

function BannerBookSchedule({navigation, name}) {
    function backScreenHandler(){
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.backIcon}>
                <TouchableOpacity onPress={backScreenHandler}>
                    <Ionicons name='chevron-back-sharp' size={32} color={'white'} />
                </TouchableOpacity>
            </View>
            <Text style={styles.nameFont}>Hey <Text style={styles.name}>{name} </Text>!</Text>
            <Text style={styles.titleFont}>Hãy kiểm tra lịch cắt tóc của bạn nào.</Text>
            <Image source={require('../assets/images/hair_cut_sticker.png')} style={styles.imgBanner} />
        </View>
    );
}
export default BannerBookSchedule;

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: Colors.primary100,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    backIcon:{
        position: 'absolute',
        left: 30,
        top: 50
    },
    nameFont:{
        color: Colors.primary400,
        fontFamily: 'josefin-m',
        fontSize: 20,
        marginVertical: 2
    },
    name:{
        color: Colors.primary300
    },
    titleFont:{
        color: Colors.primary400,
        fontFamily: 'josefin-r',
        fontSize: 16,
        marginVertical: 2
    },
    imgBanner: {
        height: 100,
        resizeMode: 'contain',
        margin: 20
    }
})