import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet, Dimensions, Keyboard, TouchableOpacity, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const windowWidth = Dimensions.get('window').width;
function ChangePasswordForm() {
    function keyboardHandler() {
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback onPress={keyboardHandler}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleFont}>Mật khẩu mới: </Text>
                    <TextInput placeholder='Nhập mật khẩu mới'
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    <Text style={styles.titleFont}>Xác nhận mật khẩu mới: </Text>
                    <TextInput placeholder='Xác nhận mật khẩu mới'
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity>
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
    container:{
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
    innerContainer:{
        alignItems:'center'
    },
    btnContainer:{
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        borderRadius: 8,
        padding: Platform.OS === 'android' ? 2 : 8
    },
    btnFont:{
        color: Colors.primary400,
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 28
    }
})