import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import ShopItem from "../components/ShopItem";
import { collection, onSnapshot, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/redux/addCart";

function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const productRef = collection(FIRESTORE_DB, 'Products');
    const [productData, setProductData] = useState([]);
    const [numberProducts, setNumberProducts] = useState(0);
    const cartData = useSelector((state) => state.cartProduct.carts);
    const cartCount = cartData.length;
    const getCartCount = () => {
        return cartData.length;
    }
    useEffect(() => {
        setNumberProducts(getCartCount());
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerRightContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('cart')}>
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
    }, [numberProducts]);

    function addCartHandler(id, name, image, price) {
        dispatch(addProductToCart({ cartId: id, cartName: name, cartImage: image, cartPrice: price }));
        const count = getCartCount();
        setNumberProducts(count+1);
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