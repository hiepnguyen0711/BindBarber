import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useState } from "react";

function BarberItem({ imageUrl, barberName, color, onPress, value, name, selected }) {
    const [loading, setLoading] = useState(false);

    const onLoading = (value) => {
        setLoading(value);
    }
    return (
        <View style={styles.barberContainer}>
            <TouchableOpacity onPress={() => onPress(value, name)} style={styles.innerContainer} >
                <View style={[styles.barberItem, selected && styles.selectedBarberItem]}>
                    {loading && <ActivityIndicator size={'large'} color={Colors.primary200} style={styles.activity} />}
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.barberImage}
                        onLoadStart={() => onLoading(true)}
                        onLoadEnd={() => onLoading(false)}
                    />
                </View>
                <View>
                    <Text style={[styles.barberNameFont, { color: color }]}>{barberName}</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}
export default BarberItem;
const styles = StyleSheet.create({
    barberContainer: {
        alignItems: 'center',
        marginHorizontal: 16,
    },
    innerContainer:{
        alignItems: 'center',
    },
    barberItem: {
        width: 85,
        height: 85,
        backgroundColor: 'white',
        borderRadius: 85,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    barberImage: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    barberNameFont: {
        fontFamily: 'josefin-b',
        fontSize: 18,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginVertical: 8
    },
    selectedBarberItem: {
        backgroundColor: Colors.primary300
    },
    activity: {
        position: 'absolute',
        zIndex: 1
    }
})