import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function AccountSetting({iconName, title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name={iconName} size={24} color={'black'} />
                <Text style={styles.accountSettingFont}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default AccountSetting;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary400,
        margin: 16,
        marginVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        padding: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    accountSettingFont:{
        fontFamily: 'chakra-m',
        fontSize: 18,
        marginLeft: 8
    }
})