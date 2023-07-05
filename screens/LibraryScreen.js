import { View, ScrollView, StyleSheet } from "react-native";
import LibraryItem from "../components/LibraryItem";
import { Colors } from "../constants/Colors";
import { collection, doc, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useState, useEffect } from 'react';

function LibraryScreen() {
    const customerRef = collection(FIRESTORE_DB, 'Library');
    // const userRef = collection(FIRESTORE_DB, 'Users');

    const [libraryData, setLibraryData] = useState([]);

    useEffect(() => {
        const getLibraryData = async () => {
            try {
                // này là lấy dữ liệu = getDocs

                // const q = await query(userRef, where('rank', '>=', 2));
                // const userSnapshot = await getDocs(q);
                // const barber = [];
                // userSnapshot.forEach((doc) => {
                //     barber.push({ id: doc.id, ...doc.data() });
                //     // console.log(doc.data());
                // });
                // setBarberData(barber);

                // này là lấy dữ liệu = onSnapshot
                const qq = await query(customerRef, orderBy('time', 'desc'))
                const resultsss = await onSnapshot(qq, (querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach(async (doc) => {
                        data.push({ id: doc.id, ...doc.data() });
                    });
                    setLibraryData(data);
                });
            } catch (e) {
                console.log('Lỗi: ', e);
            }
        }
        getLibraryData();

    }, []);

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
            {libraryData.map((item, index) => (
                <LibraryItem
                    key={index}
                    barberName={item.fullName}
                    barberImage={item.avatar}
                    imageUrl={item.image}
                    liked={item.liked}
                    id={item.id}
                />
            ))}
            </View>
            
        </ScrollView>
    );
}

export default LibraryScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
    },
    container:{
        alignItems: 'center'
    }
})