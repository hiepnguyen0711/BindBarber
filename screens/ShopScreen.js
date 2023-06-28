import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import ShopItem from "../components/ShopItem";
import { collection, onSnapshot, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useEffect, useState } from "react";

function ShopScreen() {
    const productRef = collection(FIRESTORE_DB, 'Products');
    const [productData, setProductData] = useState([]);

    useEffect(() => {
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
    }, []);
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

    }
})