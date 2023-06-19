import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from '../constants/Colors';
function DayItem({ title, onPress, selected }) {
    return (
        <TouchableOpacity onPress={() => onPress(title)}>
            <View style={[styles.selectDay, selected && styles.selectedDayItem]}>
                <Text style={[styles.selectDayFont, selected && styles.selectDayFontItem]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default DayItem;

const styles = StyleSheet.create({
    selectDay: {
        backgroundColor: '#F8F1F1',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 4,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    selectDayFont: {
        fontSize: 16,
        fontFamily: 'josefin-m'
    },
    selectedDayItem: {
        backgroundColor: Colors.primary300,
    },
    selectDayFontItem: {
        color: Colors.primary400
    }
})