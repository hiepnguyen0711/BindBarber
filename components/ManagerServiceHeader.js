import { Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
function ManagerServiceHeader({ onPress }) {
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState(0);

    const onChangeTextServiceName = (value) => {
        setServiceName(value);
    }
    const onChangeTextServicePrice = (value) => {
        setServicePrice(value);
    }
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.headerTitle}>THÊM DỊCH VỤ</Text>
                <Text style={styles.nameTitle}>Tên dịch vụ:</Text>
                <TextInput
                    placeholder="Nhập tên dịch vụ"
                    style={styles.inputStyle}
                    value={serviceName}
                    onChangeText={onChangeTextServiceName}
                />
                <Text style={styles.priceTitle}>Giá dịch vu:</Text>
                <TextInput
                    placeholder="Nhập giá tiền dịch vụ"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    value={servicePrice}
                    onChangeText={onChangeTextServicePrice}
                />
            </View>
            <View style={styles.btnAddContainer}>
                <TouchableOpacity style={styles.btnContainer} onPress={() => onPress(serviceName, servicePrice)}>
                    <Text style={styles.btnFont}>THÊM</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {

    },
    headerTitle: {
        textAlign: 'center',
        fontFamily: 'chakra-b',
        fontSize: 22,
        marginVertical: 10,
        color: Colors.primary200
    },
    nameTitle: {
        color: Colors.primary400,
        fontFamily: 'chakra-m',
        fontSize: 18
    },
    inputStyle: {
        backgroundColor: Colors.primary400,
        padding: Platform.OS === 'android' ? 6 : 8,
        borderRadius: 4,
        width: windowWidth - 100,
        marginVertical: Platform.OS === 'android' ? 4 : 8
    },
    priceTitle: {
        color: Colors.primary400,
        fontFamily: 'chakra-m',
        fontSize: 18
    },
    btnAddContainer: {
        alignItems: 'center',
        marginVertical: 16
    },
    btnContainer: {
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        borderRadius: 4,
        padding: 8
    },
    btnFont: {
        textAlign: 'center',
        fontFamily: 'chakra-b',
        fontSize: 18,
        color: Colors.primary400
    }
})
export default ManagerServiceHeader;