import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { FIRESTORE_DB, storage } from "../firebase/app/firebaseConfig";
import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PostAdminForm() {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const libraryRef = collection(FIRESTORE_DB, 'Library');
    const userRef = collection(FIRESTORE_DB, 'Users');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 20],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            await setImage(result.assets[0].uri);
            await console.log(image);
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
            const storageRef = ref(storage, `Customer/image-${Date.now()}`);
            const result = await uploadBytes(storageRef, blob);

            blob.close();
            postImageFireStore();
            Alert.alert('Thông báo', 'Đăng bài thành công !');
            navigation.goBack();
            return await getDownloadURL(storageRef);
        } catch (error) {
            Alert.alert(`Bị lỗi: ${error}`);
        }
    }

    async function postImageFireStore() {
        const uid = await AsyncStorage.getItem('uid');
        const q = query(userRef, where('uid', '==', uid));
        const result = await onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                users.push(user);

            });
            
            setDoc(doc(libraryRef), {
                avatar: users[0].avatar,
                fullName: users[0].fullName,
                barberId: uid,
                image: image,
                liked: 0,
                time: new Date()

            });
        });


    }

    return (
        <View style={styles.container}>
            <View>
                {image && <Image source={{ uri: image === null ? null : image }} style={styles.imagePick} />}
                <TouchableOpacity style={styles.btnPick} onPress={pickImage}>
                    <Text style={styles.pickFont}>Chọn ảnh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnUpBack}>
                <TouchableOpacity style={styles.btnUp} onPress={uploadImageAsync}>
                    <Text style={styles.upFont}>Đăng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.upFont}>Thoát</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default PostAdminForm;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imagePick: {
        width: 300,
        height: 300,
        resizeMode: 'stretch',
        marginBottom: 30
    },
    btnPick: {
        backgroundColor: Colors.primary100,
        padding: 8,
        paddingHorizontal: 26,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    pickFont: {
        color: Colors.primary400,
        fontFamily: 'chakra-b',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    btnUpBack: {
        flexDirection: 'row',
        marginTop: 30
    },
    btnUp: {
        backgroundColor: Colors.primary200,
        padding: 8,
        paddingHorizontal: 26,
        borderRadius: 8,
        marginHorizontal: 8
    },
    upFont: {
        color: Colors.primary400,
        fontFamily: 'josefin-b',
        fontSize: 20,
        lineHeight: 25
    },
    btnBack: {
        backgroundColor: '#CD1818',
        padding: 8,
        paddingHorizontal: 26,
        borderRadius: 8,
        marginHorizontal: 8
    }
})