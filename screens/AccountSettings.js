import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import AccountSettingForm from "../components/AccountSettingForm";
import InfoContact from "../components/InfoContact";

function AccountSetting({navigation}) {
    function changeUsernameHandler(){
        navigation.navigate('changeusername');
    }
    function changePhoneHandler(){
        navigation.navigate('changephone');
    }
    function changePasswordHandler(){
        navigation.navigate('changepassword');
    }
    return (
        <View style={styles.container}>

            <View>
                <AccountSettingForm title={'Đổi tên người dùng'} onPress={changeUsernameHandler} />
                <AccountSettingForm title={'Đổi số điện thoại'} onPress={changePhoneHandler} />
                <AccountSettingForm title={'Đổi mật khẩu'} onPress={changePasswordHandler} />
            </View>
            <View>
                <InfoContact />
            </View>
        </View>
    );
}
export default AccountSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary100,
        justifyContent: 'space-between'
    },

})