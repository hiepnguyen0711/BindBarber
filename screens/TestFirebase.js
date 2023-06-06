import { Button, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function TestFirebase() {
    const [listBarber, setListBarber] = useState([]);
    useEffect(() => {
        // const db = firebase.firestore();
        const usersRef = collection(FIRESTORE_DB, 'Users');

        const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
        const list = [];

            querySnapshot.forEach((doc) => {
                // console.log(doc.id, '=>', doc.data());
                list.push({
                    id: doc.id,
                    name: doc.data().name,
                    rank: doc.data().rank
                });
            });
            // console.log(list);
        setListBarber(list);

           
        });
    }, []);
    function addUser() {
        // const db = firebase.firestore();
        // const usersRef = collection(db, 'Users');
        // addDoc(usersRef, { name: 'Hiệp', phone: '0772655181', rank: 1 });
        addDoc(collection(FIRESTORE_DB, 'Users'), { name: 'Facebook', phone: '0772655181', rank: 1 });
    }


    return (
        <ScrollView>
        <View>
            <Button title='Đẩy lên firebase' onPress={addUser} />
            {listBarber.map(item => {
                return (
                    <Text key={item.id}>{item.name} - {item.id} - Rank: {item.rank}</Text>
                );
            })}
        </View>
        </ScrollView>

    );
}
export default TestFirebase;