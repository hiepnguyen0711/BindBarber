import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
function DayItem({title}) {
    return (
        <TouchableOpacity>
            <View style={styles.selectDay}>
                <Text style={styles.selectDayFont}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default DayItem;

const styles = StyleSheet.create({
    selectDay:{
        backgroundColor: '#F8F1F1',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 4,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    selectDayFont:{
        fontSize: 16,
        fontFamily: 'josefin-m'
    }
})