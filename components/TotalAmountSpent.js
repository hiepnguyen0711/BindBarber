import { Image, StyleSheet, Text, View } from "react-native";
import number_format from "../library/NumberFormat";
import { Colors } from "../constants/Colors";

function TotalAmountSpent({price}){
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/wallet.png')} style={styles.imageWallet} />
            </View>
        <View style={styles.totalInfo}>
                <Text style={styles.totalAmountSpentTitle}>Tổng số tiền đã chi</Text>
                <View style={styles.priceContainer}>
                <Text style={styles.totalAmountSpentPrice}>{number_format(price)} đ</Text>
                </View>
            </View>
        </View>
    );
}
export default TotalAmountSpent;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: Colors.primary400,
        margin: 16,
        marginVertical: 8,
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 22,
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    imageWallet:{
        width: 50,
        resizeMode: 'contain'
    },
    totalInfo:{
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
        marginLeft: 8,
        width: '100%',
    },
    totalAmountSpentTitle:{
        fontFamily: 'josefin-b',
        fontSize: 20,
        marginVertical: 4,
        marginLeft: 12
    },
    priceContainer:{
        alignItems: 'flex-end',
        width: '100%'
    },
    totalAmountSpentPrice:{
        fontFamily: 'chakra-b',
        color: Colors.primary200,
        fontSize: 24,
        marginVertical: 4,
        paddingHorizontal: 50
    }
})