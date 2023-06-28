import { Alert, Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { collection, deleteDoc, onSnapshot, query, doc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useEffect, useState } from "react";
import number_format from "../library/NumberFormat";

const windowWidth = Dimensions.get('window').width;
function ProductScreenForm() {
    const navigation = useNavigation();
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
                })
                setProductData(products);
            })
        }
        getProductData();
    }, []);

    function deleteProductHandler(id){
        Alert.alert('Xoá sản phẩm này', "Bạn có chắc chắn xoá không?",
        [
            {
                text: 'Đồng ý',
                onPress: () => {
                    deleteDoc(doc(FIRESTORE_DB, "Products", id));
                    Alert.alert('Thông báo', 'Đã xoá thành công !');
                }
            },
            {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ]);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <TouchableOpacity style={styles.btnAddContainer} onPress={() => navigation.navigate('postproduct')}>
                    <Ionicons name='add-circle' color={'white'} size={24} />
                    <Text style={styles.btnFont}>Đăng sản phẩm</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                {productData !== null && productData.map((product, index) => (
                    <View style={styles.productContainer} key={index}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.productImage} />
                        <Text style={styles.titleFont}>{product.name}</Text>
                        <Text style={styles.priceFont}>{number_format(product.price)} đ</Text>
                        <View style={styles.btnManagerContainer}>
                            {/* <TouchableOpacity style={styles.btnEdit}>
                                <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.btnDelete} onPress={() => deleteProductHandler(product.id)}>
                                <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}








            </View>
        </ScrollView>
    );
}
export default ProductScreenForm;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20
    },
    btnAddContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        padding: 8,
        borderRadius: 8,
        justifyContent: 'center'
    },
    btnFont: {
        fontFamily: 'chakra-b',
        marginHorizontal: 8,
        fontSize: 18,
        color: Colors.primary400
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    productContainer: {
        backgroundColor: 'white',
        width: windowWidth - 245,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    titleFont: {
        fontFamily: 'chakra-b',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: Platform.OS === 'android' ? 2 : 4
    },
    priceFont: {
        fontFamily: 'chakra-m',
        fontSize: 14,
        color: Colors.primary200
    },
    btnManagerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4
    },
    btnEdit: {
        backgroundColor: '#BFDB38',
        padding: 4,
        borderRadius: 8,
        marginHorizontal: 8
    },
    btnDelete: {
        backgroundColor: '#F55050',
        padding: 4,
        borderRadius: 8,
        marginHorizontal: 8
    }
})