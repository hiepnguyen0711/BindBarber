import { Alert, StyleSheet, Text, View } from "react-native";
import DayItem from "./DayItem";
import React, { useState, useEffect  } from 'react';

function SelectDayItem() {
    const currentDate = new Date();
    const currentformattedDate = currentDate.getDate();

    const tomorrow = new Date();
    tomorrow.setDate(currentformattedDate + 1);
    const tomorrowDate = tomorrow.getDate();
    const options = { weekday: 'short', day: 'numeric', month: 'numeric' }
    const formattedTomorrowDate = tomorrow.toLocaleString('vi-VN', options);
    const weekday = formattedTomorrowDate.split(',')[0].toLocaleLowerCase();
    const date = formattedTomorrowDate.split(',')[1].trim();
    const formattedOutput = `${weekday} - ${date}`;

    const afterTomorrow = new Date();
    afterTomorrow.setDate(currentformattedDate + 2);
    const afterTomorrowDate = afterTomorrow.getDate();
    const formattedAfterTomorrowDate = afterTomorrow.toLocaleString('vi-VN', options);
    const weekdays = formattedAfterTomorrowDate.split(',')[0].toLocaleLowerCase();
    const dates = formattedAfterTomorrowDate.split(',')[1].trim();
    const formattedAfterOutput = `${weekdays} - ${dates}`;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedDay, setSelectedDay] = useState(currentformattedDate);

    const handleDayItemClick = (itemValue, value) => {
      setSelectedItem(itemValue);
        setSelectedDay(value);

    };

    useEffect(() => {
        console.log(selectedDay);
    }, [selectedDay])

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
                    onPress={() => handleDayItemClick('Hôm nay', currentformattedDate)}
                />
                <DayItem title={formattedOutput}
                    selected={selectedItem === formattedOutput}

                    onPress={() => handleDayItemClick(formattedOutput, tomorrowDate)}
                />
                <DayItem title={formattedAfterOutput}
                    selected={selectedItem === formattedAfterOutput}
                    onPress={() => handleDayItemClick(formattedAfterOutput, afterTomorrowDate)}
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