import { Image, View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CreateAccountComponent, { createAccount } from '../util/auth';
import ScreenLoading from "../screens/ScreenLoading";
const windowWidth = Dimensions.get('window').width;
function SigupForm() {
    const [email, setMail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [singUpPending, setPending] = useState(false);
    const navigation = useNavigation();
    
    function loginFormHandler() {
        navigation.replace('login');
    }
    function setMailHandler(data) {
        setMail(data);
    }
    function setFullNameHandler(data) {
        setFullName(data);
    }
    function setPhoneHandler(data) {
        setPhone(data);
    }
    function setPasswordHandler(data) {
        setPassword(data);
    }
    function setConfirmPasswordHandler(data) {
        setConfirmPassword(data);
    }
    async function createUser() {
        if(phone.length < 9){
            return Alert.alert('Lỗi', 'Số điện thoại phải từ 9 số trở lên');
        }else if(password !== confirmPassword)
        {
            return Alert.alert('Lỗi', 'Xác nhận mật khẩu không giống nhau\nHãy nhập lại !');
        }
        // <CreateAccountComponent email={email} password={password} phone={phone} />
        await setPending(true);
        await createAccount(email, fullName, password, phone, navigation);
        await setPending(false);
    }
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.titleFont}>Đăng Ký</Text>
            <View style={styles.innerContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/logo.png')} style={styles.logoImage} />
                </View>
                {/*  */}
                <View style={styles.groupInput}>
                    <Ionicons name="mail-outline" size={32} color={'black'} />
                    <TextInput
                        placeholder="vd: bind@gmail.com"
                        style={styles.input}
                        maxLength={32}
                        onChangeText={setMailHandler}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                {/*  */}
                <View style={styles.groupInput}>
                    <Ionicons name="person-outline" size={32} color={'black'} />
                    <TextInput
                        placeholder="Họ Tên"
                        style={styles.input}
                        maxLength={32}
                        onChangeText={setFullNameHandler}
                        value={fullName}
                    />
                </View>
                {/*  */}
                <View style={styles.groupInput}>
                    <Ionicons name="call-outline" size={32} color={'black'} />
                    <TextInput
                        placeholder="Số điện thoại"
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={setPhoneHandler}
                        value={phone}
                    />
                </View>
                {/*  */}
                <View style={styles.groupInput}>
                    <Ionicons name="lock-closed-outline" size={32} color={'black'} />
                    <TextInput
                        placeholder="Mật khẩu"
                        style={styles.input}
                        secureTextEntry={true}
                        maxLength={16}
                        onChangeText={setPasswordHandler}
                        value={password}
                    />
                </View>
                {/*  */}
                <View style={styles.groupInput}>
                    <Ionicons name="lock-closed" size={32} color={'black'} />
                    <TextInput
                        placeholder="Xác nhận mật khẩu"
                        style={styles.input}
                        secureTextEntry={true}
                        maxLength={16}
                        onChangeText={setConfirmPasswordHandler}
                        value={confirmPassword}
                    />
                </View>
                {/*  */}
                <TouchableOpacity onPress={createUser}>
                    <View style={styles.buttonLogin}>
                        <Ionicons name="finger-print-sharp" size={36} color={'white'} />
                    </View>
                </TouchableOpacity>
                {/*  */}
                <View style={styles.sigupGroup}>
                    <Text style={styles.sigupTitle}>Đã có tài khoản</Text>
                    <TouchableOpacity onPress={loginFormHandler}><Text style={styles.sigupFont}>Đăng nhập</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        {singUpPending ? <ScreenLoading /> : null}
        
        </>
    );
}
export default SigupForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary100,
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center'
    },
    titleFont: {
        fontFamily: 'chakra-b',
        fontSize: 32,
        textTransform: 'uppercase',
        color: Colors.primary400,
        textAlign: 'center'
    },
    innerContainer: {
        width: windowWidth - 64,
        backgroundColor: Colors.primary400,
        position: 'relative',
        zIndex: 2,
        paddingTop: 40,
        borderRadius: 8,
        paddingBottom: 30,
        alignItems: 'center',
        marginTop: 50,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    logoContainer: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.primary100,
        width: 70,
        height: 70,
        borderRadius: 80,
        justifyContent: 'center',

    },
    logoImage: {
        width: 60,
        height: 60,

    },
    groupInput: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        width: windowWidth - 128,
        justifyContent: 'flex-start',
        marginVertical: 10,
        padding: 4,
    },
    input: {
        fontFamily: 'chakra-m',
        fontSize: 18,
        padding: 4,
        width: '80%',

    },
    buttonLogin: {
        backgroundColor: Colors.primary200,
        padding: 12,
        borderRadius: 64,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginTop: 30
    },
    sigupGroup: {
        marginTop: 30,
        height: 40,
        justifyContent: 'space-between'
    },
    sigupTitle: {
        fontFamily: 'josefin-r',
        textAlign: 'center'
    },
    sigupFont: {
        fontFamily: 'josefin-b',
        color: Colors.primary300,
        fontSize: 18,
        textAlign: 'center'
    }
})