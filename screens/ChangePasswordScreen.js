import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "../constants/Colors";
import ChangePasswordForm from "../components/ChangePasswordForm";

function ChangePasswordScreen() {
    return (
        <View style={styles.container}>
            <ChangePasswordForm />
        </View>
    );
}

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary100,
        padding: 16,
    }
})