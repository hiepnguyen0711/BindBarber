import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BarberItem({ imageUrl, barberName, color }) {
    return (
        <TouchableOpacity  >
            <View style={styles.barberContainer}>
            <View style={styles.barberItem}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.barberImage}
                />
            </View>
            <View>
                <Text style={[styles.barberNameFont,{color: color}]}>{barberName}</Text>
            </View>
            </View>
        </TouchableOpacity>

    );
}
export default BarberItem;
const styles = StyleSheet.create({
    barberContainer:{
        // justifyContent: 'center',
        alignItems: 'center'
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    barberImage: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    barberNameFont:{
        fontFamily: 'josefin-b',
        fontSize: 18,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginVertical: 8 
    }
})