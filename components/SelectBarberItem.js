import { StyleSheet, Text, View } from "react-native";
import BarberItem from "./barberItem";
import React, {useState} from 'react';

function SelectBarberItem() {
    const [selectBarber, setSelectBarber]= useState(null);
    function selectBarberHandler(value){
        setSelectBarber(value);
    }
    return (
        <View>
            <View>
                <Text style={styles.barberTitle}>
                    Barber
                </Text>
            </View>
            <View style={styles.barberGroup}>
                    <BarberItem 
                    imageUrl={'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Barbers%2Fbind.jpeg?alt=media&token=971ff10c-163d-4c64-9eae-a6ac03bee76c'} 
                    barberName={'BOSS'}
                    color={'red'}
                    onPress={selectBarberHandler}
                    value={1}
                    selected={selectBarber === 1}
                    />
                    {/* barber 2 */}
                    <BarberItem 
                    imageUrl={'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Barbers%2Fhiep_2.jpeg?alt=media&token=5ea5be23-47a2-4539-a28c-2d19ec723689'} 
                    barberName={'Hiệp'}
                    color={'white'}
                    onPress={selectBarberHandler}
                    value={2}
                    selected={selectBarber === 2}
                    />
                    {/* barber 3 */}
                    <BarberItem 
                    imageUrl={'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Barbers%2Fhung.jpeg?alt=media&token=99308eab-dc44-40df-adc9-c933c01ee11d'} 
                    barberName={'Hùng'}
                    color={'white'}
                    onPress={selectBarberHandler}
                    value={3}
                    selected={selectBarber === 3}
                    />
            </View>
        </View>
    );
}
export default SelectBarberItem;

const styles = StyleSheet.create({
    barberTitle: {
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    barberGroup:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8
    }
})