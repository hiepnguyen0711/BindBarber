import { StyleSheet, Text, View } from "react-native";
import DayItem from "./DayItem";

function SelectDayItem() {
    return (
        <View>
            <View>
                <Text style={styles.dayTitle}>Chọn ngày</Text>
            </View>
            <View style={styles.groupSelectDay}>
                <DayItem title="Hôm nay" />
                <DayItem title="Th5 - 02/06" />
                <DayItem title="Th6 - 03/06" />
            </View>

        </View>
    );
}
export default SelectDayItem;

const styles = StyleSheet.create({
    dayTitle: {
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    groupSelectDay: {
        flexDirection: 'row',
        margin: 8,
        justifyContent: 'center',
    },
})