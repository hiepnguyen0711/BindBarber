import { Image, StyleSheet, Text, View } from "react-native";

function ItemOrderPlaced(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.itemName}>Ace High Black Cat Pomade</Text>
                <Text style={styles.itemPrice}>390.000 đ</Text>
                <View>
                    <Text>Đã giao</Text>
                </View>
            </View>
            <View>
                <Image 
                source={{ uri: 'https://product.hstatic.net/200000362771/product/thiet_ke_chua_co_ten__8__e25147eb1d084a26ab6b2d92edfd6ca7_grande.png'}} 
                style={styles.itemImage}
                />
            </View>
        </View>
    );
}
export default ItemOrderPlaced;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemName:{
        fontFamily: 'chakra-b',
    },
    itemPrice:{
        fontFamily: 'chakra-b'
    },
    itemImage:{
        width: 100,
        height: 100
    }
})