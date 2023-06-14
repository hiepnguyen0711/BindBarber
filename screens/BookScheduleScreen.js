import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { Colors } from "../constants/Colors";
import BannerBookSchedule from "../components/BannerBookSchedule";
import ItemBookSchedule from "../components/ItemBookSchedule";

function BookScheduleScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerShown: false,
            //   headerBackTitleVisible: true,
            headerStyle: {
                backgroundColor: Colors.primary100,
                borderBottomWidth: 0
            }
        })
    }, []);
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <BannerBookSchedule navigation={navigation} />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
            <ItemBookSchedule />
        </ScrollView>
    );
}

export default BookScheduleScreen;
const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: '#EEEEEE'
    }
})