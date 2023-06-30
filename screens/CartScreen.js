import { Alert, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartTotalPrice from "../components/CartTotalPrice";
import { removeAllCart, removeProductFromCart, updateReduceToCart, updateToCart } from "../store/redux/addCart";
import { useCallback, useEffect, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowHeight = Dimensions.get('window').height;
function CartScreen({ navigation }) {
    const orderRef = collection(FIRESTORE_DB, 'Orders');
    const [phone, setPhone] = useState('');
    const [guestName, setGuestName] = useState('');
    const [userUid, setUserUid] = useState('');
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartProduct.carts);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = useCallback(() => {
        let price = 0;
        try {
            const priceCart = cartData.map((item) => {
                price += item.price * item.quantity;
            });
            setTotalPrice(price + 15000);
        } catch (e) {
            console.log(e);
        }
        return price;
    }, [cartData]);
    useEffect(() => {
        const getAsynStore = async () => {
            const phone = await AsyncStorage.getItem('phone');
            const guestName = await AsyncStorage.getItem('fullName');
            const uid = await AsyncStorage.getItem('uid');
            setPhone(phone);
            setGuestName(guestName);
            setUserUid(uid);
        }
        getAsynStore();
        getTotalPrice();
    }, [totalPrice, getTotalPrice]);

    const groupedData = cartData.reduce((result, item) => {
        if (!result[item.id]) {
            result[item.id] = [];
        }
        result[item.id].push(item);
        return result;
    }, {});

    const groupCounts = Object.keys(groupedData).map((key) => ({
        id: key,
        count: groupedData[key].length,
        name: groupedData[key][0].name,
        image: groupedData[key][0].image,
        price: groupedData[key][0].price,
        quantity: groupedData[key][0].quantity
    }));
    // console.log(groupCounts);

    function onPressAdd(id) {
        dispatch(updateToCart({ cartId: id, cartQuantity: +1 }));
        getTotalPrice();
    }
    function onPressRemove(id) {
        const cartProduct = cartData.find(item => item.id == id);
        if (cartProduct.quantity > 1) {
            dispatch(updateReduceToCart({ cartId: id, cartQuantity: 1 }));
        } else {
            dispatch(removeProductFromCart({ cartId: id }));
        }
    }
    function addOrder(address) {
        try {
            setDoc(doc(orderRef), {
                phone: phone,
                name: guestName,
                address: address,
                product: cartData,
                price: totalPrice,
                uid: userUid,
                status: 1,
                date: new Date()
            });
            Alert.alert('Thông báo', 'Đặt hàng thành công');
            dispatch(removeAllCart());
            navigation.goBack();

        } catch (e) {
            console.log(e);
            console.log('abc');
        }
    }
    function OrderHandler(address) {
        if (address === undefined) {
            return Alert.alert('Lỗi', 'Không được bỏ trống phần địa chỉ');

        } else {
            Alert.alert(
                'Xác nhận',
                'Bạn có chắc đặt hàng không?',
                [
                    {
                        text: 'Đồng ý',
                        onPress: () => addOrder(address),
                    },
                    {
                        text: 'Huỷ bỏ',
                        onPress: () => console.log('Huỷ'),
                        style: 'cancel'
                    }
                ]
            );
        }

    }
    return (
        <View style={styles.root}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {groupCounts !== null && groupCounts.map((cart, index) => (
                    <View key={index} styles={styles.test}>
                        <View style={styles.innerContainer}>
                            <CartItem
                                id={cart.id}
                                name={cart.name}
                                imageUri={cart.image}
                                price={cart.price}
                                count={cart.quantity}
                                onPressAdd={onPressAdd}
                                onPressRemove={onPressRemove}
                            />
                        </View>
                    </View>
                ))}


            </ScrollView>
            <View style={styles.totalContainer}>
                <CartTotalPrice shipPrice={15000} totalPrice={totalPrice} onPressOrder={OrderHandler} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        marginBottom: Platform.OS === 'android' ? 210 : 180
    },
    innerContainer: {
        alignItems: 'center',
    },
    totalContainer: {
        position: 'absolute',
        left: 10,
        bottom: 30,
    }
})

export default CartScreen;