import { View, Text, StyleSheet } from "react-native";
import number_format from "../library/NumberFormat";

function TotalService({totalCount, totalPrice}) {
    return (
        <View style={styles.totalContainer}>
            <View style={styles.totalInnerContainer}>
                <Text style={styles.titleFont}>Tổng Cộng</Text>
            </View>
            <View style={styles.priceInfomation}>
                <Text style={styles.serviceFont}>{totalCount} dịch vụ</Text>
                <Text style={styles.totalFont}>{number_format(totalPrice)} đ</Text>
            </View>
        </View>

    );
}
export default TotalService;

const styles = StyleSheet.create({
    totalContainer:{
        backgroundColor: '#F8F1F1',
        borderRadius: 3,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: -15,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    titleFont:{
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        fontSize: 22,
        color: 'black'
    },
    priceInfomation:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    serviceFont:{
        fontFamily: 'josefin-m',
        marginRight: 8,
        color: 'black',
        fontSize: 16
    },
    totalFont:{
        fontFamily: 'chakra-b',
        fontSize: 22,
        color:'#E8AA42',

    }
})