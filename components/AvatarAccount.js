import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";

function AvatarAccount({ imageUrl, accountName, phone }) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image source={{ uri: imageUrl }} style={styles.avatarAccount} />
                </TouchableOpacity>
            </View>
            <View style={styles.nameInfo}>
                <Text style={styles.nameFont}>{accountName}</Text>
                <Text style={styles.phoneFont}>{phone}</Text>
                <View style={styles.accuracyContainer}>
                    <Text style={styles.accuracyFont}>Đã xác thực</Text>
                </View>
            </View>
        </View>
    );
}
export default AvatarAccount;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary400,
        margin: 16,
        marginVertical: 8,
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 22,
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    avatarAccount: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 16
    },
    nameInfo: {
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    nameFont: {
        fontFamily: 'chakra-b',
        fontSize: 22,
        marginVertical: 2
    },
    phoneFont: {
        fontFamily: 'josefin-r',
        color: 'gray',
        fontSize: 14,
        marginVertical: 2
    },
    accuracyContainer: {
        backgroundColor: Colors.primary300,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 4,
        marginVertical: 2,
        

    },
    accuracyFont: {
        fontFamily: 'josefin-r',
        fontSize: 14,
        textAlign: 'center',
        color: Colors.primary400,
    }
});