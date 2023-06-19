import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function BannerPostAdmin(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>  
                    <Ionicons name="chevron-back" size={36} color={Colors.primary400} />
                </TouchableOpacity>
                <Text style={styles.titleFont}>Quản lý bài viết</Text>
            </View>
            <View style={styles.btnPostContainer}>
                <TouchableOpacity style={styles.btnPost} onPress={() => navigation.navigate('postadminform')}>
                    <Ionicons name='add' size={34} color={Colors.primary400} />
                    {/* <Text style={styles.btnFont}>Đăng bài viết</Text> */}
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default BannerPostAdmin;
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary100,
        height: 150,
        justifyContent: 'center',
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'        ,
    },
    titleContainer:{
        flex: 1,
        paddingTop: 70,
        flexDirection: 'row',
        alignItems: 'center'    
    },
    titleFont:{
        fontFamily: 'josefin-b',
        color: Colors.primary400,
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 8,
        marginTop: 8,
        marginLeft: 10,
    },
    btnPostContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 60,
    },
    btnPost:{
        backgroundColor: Colors.primary200,
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 50,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    btnFont:{
        fontFamily: 'chakra-b',
        fontSize: 20,
        textTransform: 'uppercase',
        color: Colors.primary400,
        textAlign: 'center'
    }
})