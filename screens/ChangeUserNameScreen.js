import { useEffect, useState } from "react";
import SettingsForm from "../components/SettingsForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { collection, doc, updateDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function ChangeUserNameScreen() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [userName, setUserName] = useState();
    const [userUid, setUserUid] = useState();
    useEffect(() => {
        const getUserNameUID = async () => {
            const name = await AsyncStorage.getItem('fullName');
            setUserName(name);
            const uid = await AsyncStorage.getItem('uid');
            setUserUid(uid);
        }
        getUserNameUID();
    }, []);
    function confirmSaveNameHandler(value) {
        try {
            updateDoc(doc(userRef, userUid), {
                fullName: value
            });
            Alert.alert('Thông báo', 'Đổi tên thành công.');
            setUserName(value);
            AsyncStorage.setItem('fullName', value);
        } catch (e) {
            console.log(e);
        }
    }
    function saveNameHandler(status, value) {
        if (status === 1) {
            Alert.alert('Đổi tên', `Bạn có chắc chắn muốn đổi tên thành ${value} không?`, 
            [
                {
                    text: 'Đổng ý',
                    onPress: () => confirmSaveNameHandler(value)
                },
                {
                    text: 'Huỷ bỏ',
                    style: 'cancel'
                }
            ]);
        }
    }
    return (
        <SettingsForm
            title={'Tên hiện tại'}
            titleContent={userName}
            titleInput={'Nhập tên muốn thay đổi'}
            type={"default"}
            status={1}
            saveHandler={saveNameHandler}
        />
    );
}
export default ChangeUserNameScreen;

