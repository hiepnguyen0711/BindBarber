import { ScrollView, StyleSheet, Text, View } from "react-native";
import ItemOrderPlaced from "../components/ItemOrderPlaced";
import { Colors } from '../constants/Colors';
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function OrderPlacedScreen() {
    const orderRef = collection(FIRESTORE_DB, 'Orders');
    const [userUid, setUserUid] = useState('');
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const getAsynStore = async () => {
            const uid = await AsyncStorage.getItem('uid');
            setUserUid(uid);
        }
        const getOrderData = async () => {
            const q = query(
                orderRef,
                (where('uid', '==', userUid),
                orderBy('date', 'desc'))
            );
            const result = onSnapshot(q, (querySnapshot) => {
                const orders = [];
                querySnapshot.forEach((doc) => {
                    const order = doc.data();
                    orders.push({ id: doc.id, ...order });
                });
                setOrderData(orders);
            });
        }
        getAsynStore();
        getOrderData();
    }, [orderData]);
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {orderData !== null && orderData.map((order, index) => (
                <ItemOrderPlaced key={index} productData={order.product} price={order.price} date={order.date} />
            ))}

        </ScrollView>
    );
}
export default OrderPlacedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary100,
    }
})