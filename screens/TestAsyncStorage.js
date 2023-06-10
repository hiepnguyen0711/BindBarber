import AsyncStorage from '@react-native-async-storage/async-storage';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

function TestAsyncStorage() {
    const [userName, setUsername] = useState('');
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('Users', value);
        }
        catch (error) {
            console.log(error);
        }
    }
    storeData('Hắc');
    storeData('Hiệp')
    const getData = async (key) => {
        try{
            const value = await AsyncStorage.getItem(key);
            if(value !== null){
                setUsername(value);
            }else
            {
                setUsername('Không có người dùng');
            }
        }catch(error){
            console.log(error);
        }
    }
    getData('email');
    return (
        <View style={styles.container}><Text>{userName}</Text></View>
    );
}
export default TestAsyncStorage;
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})