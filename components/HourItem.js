import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function HourItem({title}){
    return(
        <TouchableOpacity>
        <View style={styles.hourItem}>
            <Text style={styles.hourFont}>{title}</Text>
        </View>
        </TouchableOpacity>

    );
}
export default HourItem;

const styles = StyleSheet.create({
    hourItem:{
        backgroundColor: '#F8F1F1',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 5,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    hourFont:{
        fontSize: 16,
        fontFamily: 'josefin-m',
        textTransform: 'uppercase'
    }
})