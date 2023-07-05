import { Alert, ScrollView, View } from "react-native";
import ManagerMemberContent from "../components/ManagerMemberContent";
import ManagerMemberHeader from "../components/ManagerMemberHeader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useState } from "react";

function ManagerMemberScreen() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [userData, setUserData] = useState([]);
    const FindDataHandler =  (value) => {
        const q =  query(userRef, where('phone', '==', value));
        const result = onSnapshot (q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                const user = doc.data();    
                users.push({id: doc.id, ...user});

            });
            setUserData(users);
            if(users.length === 0) return Alert.alert('Thông báo', 'Không có tài khoản có SĐT vừa mới tìm kiếm');
        });
        
    }
    return (
        <ScrollView>

            <ManagerMemberHeader onPressFind={FindDataHandler}/>
            <ManagerMemberContent dataFind={userData} />
        </ScrollView>
    );
}
export default ManagerMemberScreen;