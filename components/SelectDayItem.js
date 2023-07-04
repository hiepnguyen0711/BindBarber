import { Alert, StyleSheet, Text, View } from "react-native";
import DayItem from "./DayItem";
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addBookingDay } from "../store/redux/bookSchedule";

function SelectDayItem() {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const currentformattedDate = currentDate.getDate();
    const options = { weekday: 'short', day: 'numeric', month: 'numeric' }
    const formattedTodayDate = currentDate.toLocaleString('vi-VN', options);
    const weekdayss = formattedTodayDate.split(',')[0].toLocaleLowerCase();
    const datess = formattedTodayDate.split(',')[1].trim();
    const formattedTodayOutput = `${weekdayss} - ${datess}`;

    const tomorrow = new Date();
    tomorrow.setDate(currentformattedDate + 1);
    const tomorrowDate = tomorrow.getDate();
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

    const getDateName = (value) => {
        if (value === currentformattedDate) {
            return formattedTodayOutput;
        } else if (value === tomorrowDate) {
            return formattedOutput;
        }
        else if (value === afterTomorrowDate) {
            return formattedAfterOutput;
        }
    }
    const getDayId = (value) => {
        if (value === currentformattedDate) {
            return formattedTodayOutput;
        } else if (value === tomorrowDate) {
            return formattedOutput;
        }
        else if (value === afterTomorrowDate) {
            return formattedAfterOutput;
        }
    }

    const handleDayItemClick = (itemValue, value) => {
        setSelectedItem(itemValue);
        setSelectedDay(value);
        const dayName = getDateName(value);
        dispatch(addBookingDay({dateName: dayName })); // Thay đổi tên hành động thành addBooking
    };

    useEffect(() => {
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