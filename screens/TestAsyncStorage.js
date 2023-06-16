import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../firebase/app/firebaseConfig';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';

function TestAsyncStorage() {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        
        if (!result.canceled) {
            const uploadURL = await uploadImageAsync(result.assets[0].uri);
            setImage(uploadURL);
        } else{
            setImage(null);
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
            const storageRef = ref(storage, `Avatar/image-${Date.now()}` );
            const result = await uploadBytes(storageRef, blob);

            blob.close();
            const linktest = await getDownloadURL(storageRef);
            console.log(linktest);
            return linktest;
        } catch (error) {
            Alert.alert(`Bị lỗi: ${error}`);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TouchableOpacity style={styles.btnUpload} onPress={() => uploadImageAsync(image)}>
                    <Text style={styles.uploadFont}>Up lên fireStorage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default TestAsyncStorage;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    btnUpload: {
        backgroundColor: 'red',
        padding: 16,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadFont: {
        fontFamily: 'josefin-b',
        fontSize: 18,
        textTransform: 'uppercase',
        color: 'white'
    }
})