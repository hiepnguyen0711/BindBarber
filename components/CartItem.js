import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import number_format from "../library/NumberFormat";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;
function CartItem({ id, name, imageUri, price, count, onPressAdd, onPressRemove }) {
    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Image
                        source={{ uri: imageUri === '' ? '' : imageUri }}
                        style={styles.imageProduct}
                    />
                </View>
                <View>
                    <Text style={styles.nameFont}>{name}</Text>
                    <Text style={styles.priceFont}>{number_format(price)} đ</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btnQuantity} onPress={() => onPressAdd(id)}>
                    <Ionicons name='add' size={22} color={Colors.primary400} />
                </TouchableOpacity>
                <Text style={styles.quantityFont}>{count}</Text>
                <TouchableOpacity style={styles.btnQuantitys} onPress={() => onPressRemove(id)}>
                    <Ionicons name='remove' size={22} color={Colors.primary400} />
                </TouchableOpacity>
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary400,
        paddingHorizontal: 8,
        width: windowWidth - 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageProduct: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 8
    },
    nameFont: {
        fontFamily: 'josefin-b',
        fontSize: 14
    },
    priceFont: {
        fontFamily: 'chakra-m',
        fontSize: 16,
        color: '#367E18'
    },
    btnQuantity: {
        backgroundColor: Colors.primary200,
        padding: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    btnQuantitys: {
        backgroundColor: Colors.primary200,
        padding: 2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    quantityFont: {
        backgroundColor: Colors.primary400,
        textAlign: 'center',
        fontFamily: 'chakra-b',
        padding: 2
    }
})
export default CartItem;