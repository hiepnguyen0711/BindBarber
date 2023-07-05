import axios from "axios";
import { collection, addDoc, setDoc, doc, query, where, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'AIzaSyB8NqJwFSO-ce2kvKYhO_Wo3b7MZVGcFn4';
export async function createAccount(email, fullName, password, phone, navigation) {

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
            fullName: fullName,
            phone: phone,
            rank: 1,
            totalAmount: 0,
            avatar: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Avatar%2Fno-avatar.png?alt=media&token=e88193de-43e1-45ef-9238-684a80a79092',
            shipping: [],
            savedCollection: []
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

export async function loginUser(email, password, navigation) {
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        // xem userUID
        const currentUserUID = await response.data.localId;
        console.log('currentUser UID:', currentUserUID);
        const userRef = collection(FIRESTORE_DB, 'Users');
        const q = query(userRef, where('uid', '==', currentUserUID));
        const result = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                users.push({ id: doc.id, ...user });
            });
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('password', password);
            AsyncStorage.setItem('isLogged', '1');
            AsyncStorage.setItem('uid', currentUserUID);
            AsyncStorage.setItem('phone', users[0].phone);
            AsyncStorage.setItem('avatar', users[0].avatar);
            AsyncStorage.setItem('fullName', users[0].fullName);
            AsyncStorage.setItem('rank', users[0].rank.toString());
            navigation.replace('bottomtab');
        });



        // const valueUid = JSON.stringify(currentUserUID);

    } catch (error) {
        if (error.response) {
            console.log('Thông tin chi tiết lỗi: ', error.response.data);
            if (error.response.data.error.message === 'EMAIL_NOT_FOUND') {
                // setErrorMessage('Email đã tồn tại');
                console.log('Email không tồn tại');
                Alert.alert('Lỗi', 'Email không tồn tại !');
            } else if (error.response.data.error.message === 'INVALID_PASSWORD') {
                Alert.alert('Lỗi', 'Sai mật khẩu');
            }
        }
        else {
            console.log('Lỗi không xác định: ', error.message);
        }
    }
}
