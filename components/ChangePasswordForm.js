import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet, Dimensions, Keyboard, TouchableOpacity, Platform, Alert } from 'react-native';
import { Colors } from '../constants/Colors';
import { FIREBASE_AUTH } from '../firebase/app/firebaseConfig';
import { sendPasswordResetEmail , updatePassword} from 'firebase/auth';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
function ChangePasswordForm() {

    const [email, setEmail] = useState('');
    useEffect(() => {
        const getEmail = async () => {
            const mail = await AsyncStorage.getItem('email');
            setEmail(mail);
        }
        getEmail();
    }, []);
    function keyboardHandler() {
        Keyboard.dismiss();
    }
    function savePassword() {
        sendPasswordResetEmail(FIREBASE_AUTH, email).then(() => {
            Alert.alert('Thông báo', 'Mật khẩu đã gửi đến Email của bạn, hãy kiểm tra Email');
        }).catch((error) => {
            Alert.alert('Thông báo', 'lỗi')
        })
    }
    function requestSavePassword() {
        Alert.alert('Đổi mật khẩu', 'Mật khẩu sẽ được gửi đến Email của bạn.', [
            {
                text: 'Đồng ý',
                onPress: () => savePassword()
            },
            {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ]);
    }
    return (
        <TouchableWithoutFeedback onPress={keyboardHandler}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={requestSavePassword}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnFont}>Thay đổi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default ChangePasswordForm;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 30
    },
    titleFont: {
        color: Colors.primary400,
        fontFamily: 'josefin-m',
        fontSize: 18,
        marginVertical: 4
    },
    input: {
        backgroundColor: Colors.primary400,
        padding: 12,
        borderRadius: 8,
        marginBottom: 8
    },
    innerContainer: {
        alignItems: 'center'
    },
    btnContainer: {
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        borderRadius: 8,
        padding: Platform.OS === 'android' ? 2 : 8
    },
    btnFont: {
        color: Colors.primary400,
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 28
    }
})