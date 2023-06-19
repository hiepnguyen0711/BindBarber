import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function HourItem({title, onPress, value, selected}){
    return(
        <TouchableOpacity onPress={() => onPress(value)}>
        <View style={[styles.hourItem, selected &&  styles.selectedHourItem]}>
            <Text style={[styles.hourFont, selected && styles.selectedHourFont]}>{title}</Text>
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
    },
    selectedHourItem:{
        backgroundColor: Colors.primary300,
    },
    selectedHourFont:{
        color: Colors.primary400
    }
})