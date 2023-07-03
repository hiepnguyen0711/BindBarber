import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import number_format from "../library/NumberFormat";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;
function ModalManagerService({ onPressCancel, name, price, id, onPressSave }) {
    const [serviceName, setServiceName] = useState(name);
    const [servicePrice, setServicePrice] = useState(price);

    // useEffect(() => {
    //     setServiceName(name);
    //     setServicePrice(price);
    // }, []);

    const onChangeServiceName = (value) => {
        setServiceName(value);
    }
    const onChangeServicePrice = (value) => {
        setServicePrice(value);
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Tên dịch vụ</Text>
                <TextInput style={styles.input}
                    defaultValue={name}
                    value={serviceName}
                    onChangeText={onChangeServiceName}
                />
                <Text>Giá dịch vụ</Text>
                <TextInput style={styles.input}
                    keyboardType="numeric"
                    enterKeyHint="done"
                    defaultValue={price.toString()}
                    value={servicePrice}
                    onChangeText={onChangeServicePrice}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnSave} onPress={() => onPressSave(serviceName, servicePrice, id)}>
                        <Text style={styles.btnFont}>Lưu lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancel} onPress={onPressCancel}>
                        <Text style={styles.btnFont}>Huỷ bỏ</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innerContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: windowWidth - 100,
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#E4DCCF',
        width: windowWidth - 192,
        padding: 8,
        borderRadius: 4,
        marginVertical: 8
    },
    btnContainer: {
        flexDirection: 'row'
    },
    btnSave: {
        backgroundColor: '#002B5B',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginHorizontal: 4
    },
    btnFont: {
        fontFamily: 'chakra-b',
        fontSize: 16,
        color: Colors.primary400
    },
    btnCancel: {
        backgroundColor: '#EA5455',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginHorizontal: 4
    }
})
export default ModalManagerService;