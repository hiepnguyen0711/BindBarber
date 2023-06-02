import { ScrollView, StyleSheet, Text, View } from "react-native";
import SelectDayItem from "../components/SelectDayItem";
import SelectHourItem from "../components/SelectHourItem";
import SelectBarberItem from "../components/SelectBarberItem";
import SelectServiceItem from "../components/SelectServiceItem";
import ButtonBooking from "../components/ButtonBooking";
import { Colors } from "../constants/Colors";

function BookScreen() {
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} > 
            <SelectDayItem />
            <SelectHourItem />
            <SelectBarberItem />
            <SelectServiceItem />
            <ButtonBooking />
        </ScrollView>
    );
}

export default BookScreen;

const styles = StyleSheet.create({
    root:{
        backgroundColor: Colors.primary100,
        flex: 1,
        padding: 8,
        paddingHorizontal: 10,
    }
})