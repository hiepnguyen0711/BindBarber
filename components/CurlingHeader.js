import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function CurlingHeader(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/curling_bg.jpeg')} style={styles.imageBanner} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                <Ionicons name="md-arrow-undo-sharp" size={38} color={Colors.primary200} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 350,
    },
    imageBanner: {
        width: windowWidth,
        height: '100%',
        resizeMode: 'cover'
    },
    icon: {
        position: 'absolute',
        top: 50,
        left: 30
    }
})
export default CurlingHeader;