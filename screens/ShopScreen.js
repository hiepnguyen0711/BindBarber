import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import ShopItem from "../components/ShopItem";
import { collection, onSnapshot, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useCallback, useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateToCart } from "../store/redux/addCart";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const productRef = collection(FIRESTORE_DB, 'Products');
    const [productData, setProductData] = useState([]);
    const [numberProducts, setNumberProducts] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    const cartData = useSelector((state) => state.cartProduct.carts);
    const getCartCount = useCallback(() => {
        let count = 0;
        const checkCounts = cartData.map((item) => {
            count += item.quantity;
        });
        return count;
    }, [cartData]);
    function CartScreenHandler(){
        if(isLogged === false) return Alert.alert('Thông báo', 'Bạn chưa đăng nhập, không thể đặt hàng');
        if(numberProducts === 0){
            Alert.alert('Thông báo','Giỏ hàng trống');
        }else{
            navigation.navigate('cart');
        }
    }
    const getLogin = async () => {
        const login = await AsyncStorage.getItem('isLogged');
        if(login == 1)
        {
            setIsLogged(true);
        }else if(login == 0)
        {
            setIsLogged(false);
        }
    }
    useEffect(() => {
        getLogin();
        setNumberProducts(getCartCount());
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerRightContainer}>
                    <TouchableOpacity onPress={CartScreenHandler}>
                        <Ionicons name='md-cart' size={32} color={Colors.primary400} />
                        {numberProducts > 0 && <View style={styles.cartContainer}>
                            <Text style={styles.cartFont}>{numberProducts}</Text>
                        </View>}
                    </TouchableOpacity>
                </View>
            ),
        });
        const getProductData = async () => {
            const q = query(productRef);
            const result = await onSnapshot(q, (querySnapshot) => {
                const products = [];
                querySnapshot.forEach((doc) => {
                    const product = doc.data();
                    products.push({ id: doc.id, ...product });
                });
                setProductData(products);
            })
        }
        getProductData();
    }, [numberProducts, getCartCount, isLogged]);

    function addCartHandler(id, name, image, price) {
        if(isLogged === false) return Alert.alert('Thông báo', 'Bạn chưa đăng nhập, không thể đặt hàng');
        const cartItem = cartData.find(item => item.id === id);
        if (cartItem) {
            // console.log(cartItem);
            dispatch(updateToCart({ cartId: id, cartQuantity: +1}));
        } else {
            // console.log(id);
            dispatch(addProductToCart({ cartId: id, cartName: name, cartImage: image, cartPrice: price, cartQuantity: 1 }));
        }
        const count = getCartCount();
        setNumberProducts(count + 1);
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <View style={styles.innerContainer}>
                <View style={styles.shopItem}>
                    {productData !== null && productData.map((product, index) => (
                        <ShopItem
                            key={index}
                            imageUrl={product.image}
                            title={product.name}
                            price={product.price}
                            onPress={() => addCartHandler(product.id, product.name, product.image, product.price)}
                        />
                    ))}


                </View>
            </View>
        </ScrollView>

    );
}

export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary100,

    },
    innerContainer: {
        marginBottom: 30,
    },
    shopItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'stretch',

    },
    headerRightContainer: {
        position: 'relative',
        marginHorizontal: 16,
        marginTop: 8
    },
    cartContainer: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: 'red',
        // padding: 2,
        borderRadius: 32,
        width: 20,
        height: 20,

    },
    cartFont: {
        color: Colors.primary400,
        fontSize: 12,
        fontFamily: 'chakra-b',
        textAlign: 'center'
    }
})