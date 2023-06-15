import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function ItemOrderPlaced() {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.itemPrice}>390.000 đ</Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusFont}>Đã giao</Text>
                    </View>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../assets/images/pngegg.png') }
                        style={styles.itemImage}
                    />
                </View>
            </View>
        </View>
    );
}
export default ItemOrderPlaced;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary400,
        width: windowWidth - 36,
        marginVertical: 8,
        justifyContent: 'space-between',
        padding: 12,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    infoContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
        paddingHorizontal: 4
    },
    itemName: {
        fontFamily: 'chakra-b',
        fontSize: 18,
        textAlign: 'center'
    },
    itemPrice: {
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary100
    },
    statusContainer:{
        backgroundColor: 'black',
        width: 70,
        padding: 2,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusFont:{
        color: Colors.primary400,
        textAlign: 'center',
        fontFamily: 'chakra-r',
        fontSize: 13
    },
    imgContainer:{
        flex: 1,
        borderRadius: 300,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})