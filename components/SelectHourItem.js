import { StyleSheet, Text, View } from "react-native";
import HourItem from "./HourItem";

function SelectHourItem() {
    return (
        <View>
            <Text style={styles.hourTitle}>Chọn Giờ</Text>
            <View style={styles.hourGroup}>
                <HourItem title="9:00 SA" />
                <HourItem title="10:00 sa" />
                <HourItem title="11:00 sa" />
                <HourItem title="12:00 sa" />
                <HourItem title="13:00 ch" />
                <HourItem title="14:00 ch" />
                <HourItem title="15:00 ch" />
                <HourItem title="16:00 ch" />
                <HourItem title="17:00 ch" />
                <HourItem title="18:00 ch" />
                <HourItem title="19:00 ch" />
            </View>
        </View>
    );
}
export default SelectHourItem;

const styles = StyleSheet.create({
    hourTitle:{
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23',
        marginVertical: 4
    },
    hourGroup:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    }
})