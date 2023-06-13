import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

function AccountSettingForm({title, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
                <View style={styles.functionTitle}>
                    <Text style={styles.titleFont}>{title}</Text>
                    <Ionicons name='chevron-forward' size={24} color={'black'} />
                </View>
            </TouchableOpacity>
    );
}

export default AccountSettingForm;

const styles = StyleSheet.create({
    functionTitle:{
        backgroundColor: Colors.primary400,
        padding: 16,
        borderTopWidth: 2,
        borderTopColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleFont:{
        fontFamily: 'chakra-m',
        fontSize: 18
    }
})