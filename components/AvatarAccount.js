import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import { FIRESTORE_DB, storage } from '../firebase/app/firebaseConfig';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { collection, doc, updateDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

function AvatarAccount({ imageUrl, accountName, phone, rankName }) {
    const [picture, setImage] = useState(null);
    // const [rankName, setRankName] = useState('');
    // async function getRankName(){
    //    const rank = await AsyncStorage.getItem('rank');
    //    setRankName(rank);
    // }
    // getRankName();
    const pickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            const uid = await AsyncStorage.getItem('uid');
            const uploadURL = await uploadImageAsync(result.assets[0].uri);
            setImage(uploadURL);
            const userDocRef = doc(collection(FIRESTORE_DB, 'Users'), uid);
            await updateDoc(userDocRef, {
                avatar: uploadURL
            });
        }
    };

    const uploadImageAsync = async (uri) => {
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
            const storageRef = ref(storage, `Avatar/image-${Date.now()}`);
            const result = await uploadBytes(storageRef, blob);

            blob.close();
            return await getDownloadURL(storageRef);
        } catch (error) {
            Alert.alert(`Bị lỗi: ${error}`);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <TouchableOpacity onPress={pickAvatar}>
                    <Image source={{ uri: imageUrl }} style={styles.avatarAccount} />
                </TouchableOpacity>
            </View>
            <View style={styles.nameInfo}>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameFont}>{accountName}</Text>
                    <Image source={require('../assets/images/verified.gif')} style={styles.iconVerified} />
                </View>
                <Text style={styles.phoneFont}>{phone}</Text>
                <View style={styles.accuracyContainer}>
                    <Text style={styles.accuracyFont}>{rankName}</Text>
                </View>
            </View>
        </View>
    );
}
export default AvatarAccount;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary400,
        margin: 16,
        marginVertical: 8,
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 22,
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    avatarAccount: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 16,
        resizeMode: 'stretch',
    },
    nameInfo: {
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameFont: {
        fontFamily: 'chakra-b',
        fontSize: 22,
        marginVertical: 2
    },
    iconVerified: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 2
    },
    phoneFont: {
        fontFamily: 'josefin-r',
        color: 'gray',
        fontSize: 14,
        marginVertical: 2
    },
    accuracyContainer: {
        backgroundColor: Colors.primary300,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 4,
        marginVertical: 2,


    },
    accuracyFont: {
        fontFamily: 'josefin-r',
        fontSize: 14,
        textAlign: 'center',
        color: Colors.primary400,
    }
});