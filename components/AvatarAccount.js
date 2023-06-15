import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import { FIRESTORE_DB, FIREBASE_STORAGE } from '../firebase/app/firebaseConfig';

function AvatarAccount({ imageUrl, accountName, phone }) {
    const [picture, setImage] = useState(null);

    const pickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
        // upload to firebase (storage)
        try {
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();
        const filename = result.assets[0].uri.substring(result.assets[0].uri.lastIndexOf('/') + 1);
        console.log('Tới đây');
        console.log('tên file ảnh:'+ filename);
        var storageRef = FIREBASE_STORAGE.storage().ref().child(filename);
        console.log('Tới đây 2');
            await storageRef.put(blob);
            console.log('Uploading to Firebase Storage...');
            // Get the download URL
            const downloadURL = await storageRef.getDownloadURL();
            console.log('Download URL:', downloadURL);

        }
        catch (e) {
            console.log(e);
            console.log('Error during upload:', e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <TouchableOpacity onPress={pickAvatar}>
                    <Image source={{ uri: picture === null ? 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/no-avatar.png?alt=media&token=8c24e03d-1b95-4384-8021-53f5db61b838' : picture }} style={styles.avatarAccount} />
                </TouchableOpacity>
            </View>
            <View style={styles.nameInfo}>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameFont}>{accountName}</Text>
                    <Image source={require('../assets/images/verified.gif')} style={styles.iconVerified} />
                </View>
                <Text style={styles.phoneFont}>{phone}</Text>
                <View style={styles.accuracyContainer}>
                    <Text style={styles.accuracyFont}>Thành viên</Text>
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
        resizeMode: 'contain'
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