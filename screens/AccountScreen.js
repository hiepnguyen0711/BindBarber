import { Alert, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import AvatarAccount from "../components/AvatarAccount";
import { Colors } from "../constants/Colors";
import TotalAmountSpent from "../components/TotalAmountSpent";
import AccountSetting from "../components/AccountSetting";
import ButtonLogout from "../components/ButtonLogout";
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebase/app/firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react';

function AccountScreen({ navigation }) {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [rank, setRank] = useState(0);
    const [avatar, setAvatar] = useState('');

    const userRef = collection(FIRESTORE_DB, 'Users');
    const getUserData = async () => {
        try {
            const uid = await AsyncStorage.getItem('uid');
            console.log('uid = ' + uid);

            const q = query(userRef, where('uid', '==', uid));
            const result = onSnapshot(q, (querySnapshot) => {
                const users = [];
                querySnapshot.forEach((doc) => {
                    const user = doc.data();
                    users.push(user);
                });
                console.log(users);
                // set data 
                if (users.length > 0) {
                    setUserName(users[0].fullName);
                    setPhone(users[0].phone);
                    setTotalAmount(users[0].totalAmount);
                    setRank(users[0].rank);
                    setAvatar(users[0].avatar);
                }
            })
        } catch (e) {
            console.log(e);
        }
    };
    getUserData();
    function adminHandler() {
        if (rank == 1) {
            Alert.alert('Thông báo', 'Bạn không đủ quyền hạn,\nđể sử dụng chức năng này !');
        } else {
            navigation.navigate('admindashboard');
        }
    }
    function SettingsHandler() {
        navigation.navigate('accountsettings');
    }
    function BookScheduleScreenHandler() {
        navigation.navigate('bookschedule');
    }
    function OrderPlacedScreenHandler() {
        navigation.navigate('orderplaced');
    }
    function SavedListScreenHandler() {
        navigation.navigate('savedlist');
    }
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View >
                    <AvatarAccount
                        imageUrl={avatar}
                        accountName={userName}
                        phone={phone}
                        rankName={rank === 1 ? 'Thành viên' : 'Administrator'}
                    />
                </View>
                <View>
                    <TotalAmountSpent price={totalAmount == 0 ? 0 : totalAmount} />
                </View>
                <View style={styles.functionContainer}>
                    <AccountSetting iconName={'person-outline'} title={'Thiết lập tài khoản'} onPress={SettingsHandler} />
                    <AccountSetting iconName={'calendar-outline'} title={'Lịch đã đặt'} onPress={BookScheduleScreenHandler} />
                    <AccountSetting iconName={'cart-outline'} title={'Đơn hàng đã đặt'} onPress={OrderPlacedScreenHandler} />
                    <AccountSetting iconName={'bookmark-outline'} title={'Danh sách đã lưu'} onPress={SavedListScreenHandler} />
                    {rank > 1 ? <AccountSetting iconName={'desktop-outline'} title={'Công cụ quản lí của Admin'} onPress={adminHandler} /> : null}
                </View>
                <View>
                    <ButtonLogout />
                </View>
            </View>
        </ScrollView>
    );
}

export default AccountScreen;
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,

    },
    container: {
        marginBottom: 30
    },
    functionContainer: {
        backgroundColor: Colors.primary400,
        paddingVertical: 8,
        margin: 16,
        marginTop: 10,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    }
})