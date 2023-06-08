import axios from "axios";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { Alert } from "react-native";
export async function createAccount(email, password, phone, navigation) {
    const API_KEY = 'AIzaSyBR68LGZ2rQAV_UyLwjR-xZ8YbsBfDMJLs';
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        // xem userUID
        const currentUserUID = response.data.localId;
        console.log('currentUser UID:', currentUserUID);

        // Thêm thông tin người dùng vào Firestore
        const userDocRef = doc(collection(FIRESTORE_DB, 'Users'), currentUserUID);
        await setDoc(userDocRef, {
            uid: currentUserUID,
            email: email,
            phone: phone,
            rank: 1
        });
        console.log('Document ID:', userDocRef.id);
        await Alert.alert('Chúc mừng', 'Bạn đã đăng kí thành công !');
        navigation.replace('login');
    } catch (error) {
        if (error.response) {
            console.log('Thông tin chi tiết lỗi: ', error.response.data);
            if (error.response.data.error.message === 'EMAIL_EXISTS') {
                // setErrorMessage('Email đã tồn tại');
                console.log('Email đã tồn tại');
                Alert.alert('Lỗi', 'Email này đã tồn tại !');
            } else if (error.response.data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
                Alert.alert('Lỗi', 'Mật khẩu Yếu, phải từ 6 kí tự trở lên');
            }
        }
        else {
            console.log('Lỗi không xác định: ', error.message);
        }
    }
}
