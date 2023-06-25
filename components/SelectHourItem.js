import { Alert, StyleSheet, Text, View } from "react-native";
import HourItem from "./HourItem";
import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { addBookingHours } from "../store/redux/bookSchedule";

function SelectHourItem() {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);

    function selectHourHandler(value){
        setSelectedItem(value);
        dispatch(addBookingHours({hour: value}))
    }
    return (
        <View>
            <Text style={styles.hourTitle}>Chọn Giờ</Text>
            <View style={styles.hourGroup}>
                <HourItem title="9:00 SA" value={9} onPress={selectHourHandler} selected={selectedItem === 9}/>
                <HourItem title="10:00 sa" value={10} onPress={selectHourHandler} selected={selectedItem === 10}/>
                <HourItem title="11:00 sa" value={11} onPress={selectHourHandler} selected={selectedItem === 11}/>
                <HourItem title="12:00 sa" value={12} onPress={selectHourHandler} selected={selectedItem === 12}/>
                <HourItem title="13:00 ch" value={13} onPress={selectHourHandler} selected={selectedItem === 13}/>
                <HourItem title="14:00 ch" value={14} onPress={selectHourHandler} selected={selectedItem === 14}/>
                <HourItem title="15:00 ch" value={15} onPress={selectHourHandler} selected={selectedItem === 15}/>
                <HourItem title="16:00 ch" value={16} onPress={selectHourHandler} selected={selectedItem === 16}/>
                <HourItem title="17:00 ch" value={17} onPress={selectHourHandler} selected={selectedItem === 17}/>
                <HourItem title="18:00 ch" value={18} onPress={selectHourHandler} selected={selectedItem === 18}/>
                <HourItem title="19:00 ch" value={19} onPress={selectHourHandler} selected={selectedItem === 19}/>
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