import { ActivityIndicator, Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native";
import number_format from "../library/NumberFormat";
import { Colors } from "../constants/Colors";
import ButtonShop from "./ButtonShop";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
function ShopItem({ imageUrl, title, price, onPress }) {
    const [loading, setLoading] = useState(false);

    function onLoading(value){
        setLoading(value);
    }
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {loading && <ActivityIndicator size={'large'} color={'red'} style={styles.activity} />}
                
                <Image 
                source={{ uri: imageUrl }} 
                style={styles.itemImage} 
                onLoadStart={() => onLoading(true)}
                onLoadEnd={() => onLoading(false)}
                />
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemPrice}>{number_format(price)} đ</Text>
            </View>
            <ButtonShop onPress={onPress}/>
        </View>
    );
}

export default ShopItem;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        margin: 16,
        width: (windowWidth - 64)/ 2,
        height: 200,
        alignItems: 'center',
        paddingBottom: 8,
        paddingHorizontal: 4,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        justifyContent: 'space-around',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    activity:{
        position: 'absolute',
        zIndex: 1,
        top: 45,
        // left: 30
    },
    itemImage: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
        aspectRatio: 1
    },
    itemTitle: {
        fontFamily: 'josefin-m',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 4
    },
    itemPrice: {
        fontFamily: 'chakra-b',
        color: Colors.primary200,
        fontSize: 16
    }
})