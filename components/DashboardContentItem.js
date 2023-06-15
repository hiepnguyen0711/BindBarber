import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function DashboardContentItem({ imageUrl, title }) {
    return (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image source={{ uri: imageUrl }} style={styles.iconImage} />
                <Text style={styles.titleFont}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
}
export default DashboardContentItem;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: Colors.primary400,
        width: (windowWidth - 80) / 2,
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
        marginVertical: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    iconImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',

    },
    titleFont: {
        fontFamily: 'josefin-m',
        fontSize: 16
    }
})