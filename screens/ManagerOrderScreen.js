import { Alert, ScrollView, StyleSheet, View } from "react-native";
import ManagerOrderMenu from "../components/ManagerOrderMenu";
import OrderPending from "../components/OrderPending";
import { Colors } from "../constants/Colors";
import TitleManagerOrderMenu from "../components/TitleManagerOrderMenu";
import OrderDelivering from "../components/OrderDelivering";
import OrderDelivered from "../components/OrderDelivered";
import { useCallback, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function ManagerOrderScreen() {

    useEffect(() => {
        getOrderWaitData();
    }, [getOrderWaitData]);

    const orderRef = collection(FIRESTORE_DB, 'Orders');
    const [orderWaitData, setOrderWaitData] = useState([]);
    const [menu, setMenu] = useState(1);
    const [menuTitle, setMenuTitle] = useState('chờ duyệt');
    const switchMenuHandler = (id) => {
        setMenu(id);
        const title = getTitleMenu(id);
        setMenuTitle(title);
        if(id === 1){
            getOrderWaitData();
        }
    }
    const getTitleMenu = (value) => {
        if (value === 1) {
            return 'Chờ duyệt';
        } else if (value === 2) {
            return 'đang giao';
        }
        else if (value === 3) {
            return 'đã giao';
        }
    }
    const getOrderWaitData = useCallback(() => {
        const q = query(orderRef, orderBy('date', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push({id: doc.id, ...order});
            });
            setOrderWaitData(orders);
        });
    }, [orderRef, setOrderWaitData]);
    return (
        <View style={styles.root}>
            <ManagerOrderMenu onPressHandler={switchMenuHandler} />
            <TitleManagerOrderMenu title={menuTitle} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {menu === 1 && orderWaitData.map((order, index) => (
                <OrderPending key={index} data={order} />
                ))
                }

                {menu === 2 && <OrderDelivering />}
                {menu === 3 && <OrderDelivered />}
            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
        flex: 1,
        alignItems: 'center'
    }
})
export default ManagerOrderScreen;