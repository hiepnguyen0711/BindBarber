import { Button, Text, View } from "react-native";
import {addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect } from "react";
import {FIRESTORE_DB, FIREBASE_APP} from "../firebase/app/firebaseConfig";
import firebase  from "@react-native-firebase/firestore";
import { async } from "@firebase/util";


function TestFirebase(){
   
    useEffect(() =>{
        const fb = firebase().collection('Users');
        fb.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    name: doc.data().name,
                    phone: doc.data().phone,
                    rank: doc.data().rank
                });
            });
            console.log(list)
        })
        
       
    }, [] );
    function addUser(){
        addDoc(collection(FIRESTORE_DB, 'Users'), {name: 'Hiệp', phone: '0772655181', rank: 1});
    }
    return(
        <View>
            <Button title='Đẩy lên firebase' onPress={addUser}/>
            <Text></Text>
        </View>
    );
}
export default TestFirebase;