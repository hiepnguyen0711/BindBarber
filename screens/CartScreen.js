import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartTotalPrice from "../components/CartTotalPrice";

const windowHeight = Dimensions.get('window').height;
function CartScreen() {
    const cartData = useSelector((state) => state.cartProduct.carts);
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
        price: groupedData[key][0].price
    }));

    console.log(groupedData);
    
    return (
        <View style={styles.root}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {cartData !== null && groupCounts.map((cart, index) => (
                    <View key={index} styles={styles.test}>
                        <View style={styles.innerContainer}>
                            <CartItem id={cart.id} name={cart.name} imageUri={cart.image} price={cart.price} count={cart.count} />
                        </View>
                    </View>
                ))}


            </ScrollView>
            <View style={styles.totalContainer}>
                <CartTotalPrice />
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