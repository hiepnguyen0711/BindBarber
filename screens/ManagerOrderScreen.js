import { Alert, ScrollView, StyleSheet, View } from "react-native";
import ManagerOrderMenu from "../components/ManagerOrderMenu";
import OrderPending from "../components/OrderPending";
import { Colors } from "../constants/Colors";
import TitleManagerOrderMenu from "../components/TitleManagerOrderMenu";
import OrderDelivering from "../components/OrderDelivering";
import OrderDelivered from "../components/OrderDelivered";
import { useCallback, useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function ManagerOrderScreen() {

    useEffect(() => {
        getOrderWaitData();
    }, [getOrderWaitData, orderWaitData]);

    const orderRef = collection(FIRESTORE_DB, 'Orders');
    const [orderWaitData, setOrderWaitData] = useState([]);
    const [orderDeliveringData, setOrderDeliveringData] = useState([]);
    const [orderDeliveredData, setOrderDeliveredData] = useState([]);
    const [menu, setMenu] = useState(1);
    const [menuTitle, setMenuTitle] = useState('chờ duyệt');

    const switchMenuHandler = (id) => {
        setMenu(id);
        const title = getTitleMenu(id);
        setMenuTitle(title);
        if (id === 1) {
            getOrderWaitData();
        } else if (id == 2) {
            getOrderDeliveringData();
        }else if(id == 3){
            getOrderDeliveredData();
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
        const q = query(orderRef, where('status', '==', 1), orderBy('date', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push({ id: doc.id, ...order });
            });
            setOrderWaitData(orders);
        });
    }, [orderRef, setOrderWaitData]);

    const getOrderDeliveringData = () => {
        const q = query(orderRef, where('status', '==', 2), orderBy('date', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push({ id: doc.id, ...order });
            })
            setOrderDeliveringData(orders);
        });
    }

    const getOrderDeliveredData = () => {
        const q = query(orderRef, where('status', '==', 3), orderBy('dateDelivered', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                orders.push({id: doc.id, ...order});
            });
            setOrderDeliveredData(orders);
        });
    }

    const DeliverHandler = (id) => {
        Alert.alert('Xác nhận', 'Bạn có chắc chắn duyệt đơn hàng này không?',
            [
                {
                    text: 'Đồng ý',
                    onPress: () => updateDoc(doc(orderRef, id), {
                        status: 2
                    })
                },
                {
                    text: 'Huỷ bỏ',
                    style: 'cancel'
                }
            ]);
    }

    const FinishOrderHandler = (id) => {
        Alert.alert('Xác nhận', 'Bạn muốn xác nhận đã hoàn tất đơn hàng này?',
            [
                {
                    text: 'Hoàn tất',
                    onPress: () => updateDoc(doc(orderRef, id), {
                        status: 3,
                        dateDelivered: new Date()
                    })
                },
                {
                    text: 'Huỷ bỏ',
                    onPress: () => console.log('huy'),
                    style: 'cancel'
                }
            ]);
    }
    return (
        <View style={styles.root}>
            <ManagerOrderMenu onPressHandler={switchMenuHandler} />
            <TitleManagerOrderMenu title={menuTitle} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {menu === 1 && orderWaitData.map((order, index) => (
                    <OrderPending key={index} data={order} onPressDeliver={DeliverHandler} />
                ))
                }

                {menu === 2 && orderDeliveringData.map((order, index) => (
                    <OrderDelivering key={index} data={order} onPressFinishOrder={FinishOrderHandler} />
                ))}
                {menu === 3 && orderDeliveredData.map((order, index) => (
                    <OrderDelivered data={order} key={index} />
                )) }
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