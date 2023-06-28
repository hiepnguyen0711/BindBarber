import { Alert, Dimensions, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { FIRESTORE_DB, storage } from "../firebase/app/firebaseConfig";
import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";

const windowWidth = Dimensions.get('window').width;
function PostProductForm() {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [productName, setProductName] = useState(null);
    const [productPrice, setProductPrice] = useState(null);

    const productRef = collection(FIRESTORE_DB, 'Products');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 20],
            quality: 1,
        });
        if (!result.canceled) {
            await setImage(result.assets[0].uri);
        }
    };

    const uploadImageAsync = async (uri) => {
        if (image == null) {
            return Alert.alert('Lỗi', 'Bạn chưa chọn ảnh nào');
        }
        uri = image;
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });
        try {
            const storageRef = ref(storage, `Products/image-${Date.now()}`);
            const result = await uploadBytes(storageRef, blob);
            blob.close();
            const url = await getDownloadURL(storageRef);
            postImageFireStore(url);
            Alert.alert('Thông báo', 'Đăng sản phẩm thành công !');
            navigation.goBack();
            return url;
        } catch (error) {
            Alert.alert(`Bị lỗi: ${error}`);
        }
    }

    async function postImageFireStore(imageUrl) {
        setDoc(doc(productRef), {
            image: imageUrl,
            name: productName,
            price: productPrice,
            time: new Date(),
        });
    }

    const setInputProductName = (value) =>{
        setProductName(value);
    }
    const setInputProductPrice = (value) => {
        setProductPrice(value);
    }

    return (
        <View style={styles.container}>
            <View style={styles.pickImageContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image === null ? null : image }} style={styles.imageProduct} />
                </View>
                <View style={styles.pickContainer}>
                    <TouchableOpacity style={styles.pickFontContainer} onPress={pickImage}>
                        <Text style={styles.pickFont}>Chọn ảnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.productNameFont}>Tên sản phẩm: </Text>
                <TextInput 
                style={styles.productNameInput} 
                placeholder={'Nhập tên sản phẩm'} 
                value={productName}
                onChangeText={setInputProductName}
                />
            </View>
            <View>
                <Text style={styles.productNameFont}>Giá tiền: </Text>
                <View style={styles.productPriceContainer}>
                    <TextInput 
                    style={styles.productNameInput} 
                    keyboardType={'numeric'} 
                    placeholder="Nhập giá tiền muốn bán, vd: 390000" 
                    value={productPrice}
                    onChangeText={setInputProductPrice}
                    maxLength={9}
                    />
                    <Text style={styles.iconPriceFont}>đ</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnPost} onPress={uploadImageAsync}>
                    <Text style={styles.btnFont}>Đăng bán</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.btnFont}>Huỷ bỏ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        flex: 1
    },
    pickImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        marginBottom: 16
    },
    imageContainer: {
        flex: 1,
        width: 200,
        height: 180,
        borderWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        marginRight: 8,
        overflow: 'hidden'
    },
    imageProduct: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    pickFontContainer: {
        backgroundColor: '#E4DCCF',
        padding: 8,
        borderRadius: 4
    },
    pickFont: {
        fontFamily: 'josefin-b'
    },
    productNameFont: {
        fontFamily: 'chakra-m',
        fontSize: 16
    },
    productNameInput: {
        backgroundColor: '#E4DCCF',
        padding: Platform.OS === 'android' ? 4 : 10,
        paddingHorizontal: 12,
        marginVertical: 4,
        borderRadius: 8,
        width: windowWidth - 64,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        fontFamily: 'josefin-b'
    },
    productPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconPriceFont: {
        fontFamily: 'chakra-b',
        fontSize: 18,
        color: '#367E18',
        marginHorizontal: 8
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    btnPost: {
        backgroundColor: Colors.primary100,
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 8
    },
    btnBack: {
        backgroundColor: '#A10035',
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 8
    },
    btnFont: {
        fontFamily: 'chakra-b',
        color: Colors.primary400,
        textTransform: 'uppercase'
    }
})
export default PostProductForm;
