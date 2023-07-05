import { Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
function ManagerMemberHeader({onPressFind}) {
    const [findData, setFindData] = useState('');
    const onFindData = (value) => {
        setFindData(value);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitleFont}>TÌM THÀNH VIÊN</Text>
            <TextInput
                placeholder="Nhập số điện thoại" style={styles.input}
                keyboardType="numeric"
                maxLength={10}
                textAlign="center"
                value={findData}
                onChangeText={onFindData}
            />
            <TouchableOpacity style={styles.btnFind} onPress={() => onPressFind(findData)}>
                <Text style={styles.findFont}>Tìm kiếm</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary100,
        padding: 10,
        alignItems: 'center',
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    headerTitleFont: {
        color: Colors.primary200,
        fontFamily: 'chakra-b',
        fontSize: 22,
        textAlign: 'center'
    },
    input: {
        backgroundColor: Colors.primary400,
        width: windowWidth - 192,
        padding: Platform.OS === 'android' ? 4 : 8,
        borderRadius: 4
    },
    btnFind: {
        backgroundColor: Colors.primary300,
        width: windowWidth - 230,
        padding: Platform.OS === 'android' ? 4 : 8,
        borderRadius: 4,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginVertical: 10
    },
    findFont: {
        textAlign: 'center',
        color: Colors.primary400,
        textTransform: 'uppercase',
        fontFamily: 'chakra-b',
        fontSize: 16
    }
})
export default ManagerMemberHeader;