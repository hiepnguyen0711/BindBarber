import { Alert } from "react-native";
import SettingsForm from "../components/SettingsForm";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, updateDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function ChangePhoneScreen() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [phone, setPhone] = useState('');
    const [userUid, setUserUid] = useState('');
    useEffect(() => {
        const getUserPhoneUID = async () => {
            const tel = await AsyncStorage.getItem('phone');
            setPhone(tel);
            const uid = await AsyncStorage.getItem('uid');
            setUserUid(uid);
        }
        getUserPhoneUID();
    },[]);
    function confirmSaveHandler(value){
        try {
            if(value.length < 9) return Alert.alert('Thông báo', 'Số điện thoại không chính xác');
            updateDoc(doc(userRef, userUid), {
                phone: value
            })
            Alert.alert('Thông báo', 'Đổi số điện thoại thành công.');
            setPhone(value);
            AsyncStorage.setItem('phone', value);
        } catch (e) {
            console.log(e);
        }
    }
    function requestSaveHandler(status, value){
        if(status === 2){
            Alert.alert('Thông báo', `Bạn có muốn thay đổi số điện thoại thành ${value} không?`,
            [
                {
                    text: 'Đồng ý',
                    onPress: () => confirmSaveHandler(value)
                },
                {
                    text: 'Huỷ bỏ',
                    style: 'cancel'
                }
            ])
        }
    }
    return (
        <SettingsForm 
        title={'Phone hiện tại'} 
        titleContent={phone} 
        titleInput={'Nhập sđt muốn thay đổi'} 
        type={'numeric'} 
        status={2}
        saveHandler={requestSaveHandler}
        />
    );
}
export default ChangePhoneScreen;