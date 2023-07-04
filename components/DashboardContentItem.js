import { ActivityIndicator, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
function DashboardContentItem({ imageUrl, title, onPress }) {
    const [loading, setLoading] = useState(false);

    function onLoading(value) {
        setLoading(value);
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemContainer}>
                {loading && <ActivityIndicator size={'large'} color={Colors.primary200} style={styles.activity} />}
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.iconImage}
                    onLoadStart={() => onLoading(true)}
                    onLoadEnd={() => onLoading(false)}
                />
                <Text style={styles.titleFont}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
}
export default DashboardContentItem;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: Colors.primary400,
        width: (windowWidth - 80) / 2,
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
        marginVertical: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    activity: {
        position: 'absolute',
        top: 50,
        left: 60,
        zIndex: 1
    },
    iconImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',

    },
    titleFont: {
        fontFamily: 'josefin-m',
        fontSize: 16
    }
})