import { StyleSheet, Text, View } from "react-native";
import DayItem from "./DayItem";
import React, { useState } from 'react';

function SelectDayItem() {
    const currentDate = new Date();
    const currentformattedDate = currentDate.getDate();

    const tomorrow = new Date();
    tomorrow.setDate(currentformattedDate + 1);
    const options = { weekday: 'short', day: 'numeric', month: 'numeric' }
    const formattedTomorrowDate = tomorrow.toLocaleString('vi-VN', options);
    const weekday = formattedTomorrowDate.split(',')[0].toLocaleLowerCase();
    const date = formattedTomorrowDate.split(',')[1].trim();
    const formattedOutput = `${weekday} - ${date}`;

    const afterTomorrow = new Date();
    afterTomorrow.setDate(currentformattedDate + 2);
    const formattedAfterTomorrowDate = afterTomorrow.toLocaleString('vi-VN', options);
    const weekdays = formattedAfterTomorrowDate.split(',')[0].toLocaleLowerCase();
    const dates = formattedAfterTomorrowDate.split(',')[1].trim();
    const formattedAfterOutput = `${weekdays} - ${dates}`;

    const [selectedItem, setSelectedItem] = useState(null);

    const handleDayItemClick = (itemValue) => {
        setSelectedItem(itemValue);
    };


    return (
        <View>
            <View>
                <Text style={styles.dayTitle}>Chọn ngày</Text>
            </View>
            <View style={styles.groupSelectDay}>
                <DayItem
                    title={'Hôm nay'}
                    value={currentformattedDate}
                    selected={selectedItem === 'Hôm nay'}
                    onPress={handleDayItemClick}
                />
                <DayItem title={formattedOutput}
                    selected={selectedItem === formattedOutput}

                    onPress={handleDayItemClick}
                />
                <DayItem title={formattedAfterOutput}
                    selected={selectedItem === formattedAfterOutput}

                    onPress={handleDayItemClick}
                />
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