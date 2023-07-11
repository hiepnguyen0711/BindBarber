import { Alert, Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: true,
            shouldSetBadge: true,
            shouldShowAlert: true,
        };
    }
});

function NotificationHeader() {
    const tokenRef = collection(FIRESTORE_DB, 'Tokens');
    const notificationRef = collection(FIRESTORE_DB, 'NotificationHistory');
    const [tokenData, setTokenData] = useState([]);
    const [userName, setUserName] = useState('');
    useEffect(() => {
        async function configurePushNotifications() {
            const { status } = await Notifications.getPermissionsAsync();
            let finalStatus = status;

            if (finalStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                Alert.alert('Thông báo', 'Yêu cầu thông báo cần cấp quyền !');
                return;
            }

            const pushTokenData = await Notifications.getExpoPushTokenAsync();
            if (Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.DEFAULT
                });
            }
        }
        async function getTokenData() {
            const q = await query(tokenRef, 'jVKNVJZHgrxwsZKjQHpH');
            const result = await onSnapshot(q, (querySnapshot) => {
                const tokens = [];
                querySnapshot.forEach((doc) => {
                    const token = doc.data();
                    tokens.push({ ...token });
                });
                setTokenData(tokens[0].token);
            })
        }
        async function getFullName() {
            const name = await AsyncStorage.getItem('fullName');
            setUserName(name);
        }
        configurePushNotifications();
        getTokenData();
        getFullName();
    }, []);

    const [notificationType, setNotificationType] = useState();
    function GetTextNotificationType(value) {
        setNotificationType(value);
    }
    function scheduleNotificationHandler() {
        try {
            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Bind Barbershop Thông Báo !',
                    body: notificationType,
                    data: { userName: 'Hac' }
                },
                trigger: {
                    seconds: 2
                }
            });
        } catch (e) {
            console.log(e);
        }

    }
    function requestSendPushNotification(){
        Alert.alert('Gửi thông báo', 'Bạn có chắc chắn gửi thông báo đến mọi người không?', [
            {
                text: 'Đồng ý',
                onPress: sendPushNotificationHandler
            },
            {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ]);
    }
    
    function sendPushNotificationHandler() {
        try {
            fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: tokenData,
                    title: 'Bind Barber',
                    body: notificationType
                })
            });
            setDoc(doc(notificationRef), {
                content: notificationType,
                time: new Date(),
                userPost: userName
            });
            Alert.alert('Thông báo', 'Gửi thông báo thành công');
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>GỬI THÔNG BÁO</Text>
            <TextInput placeholder="Gửi thông báo đến toàn thể khách hàng"
                style={styles.input}
                multiline={true}
                onChangeText={GetTextNotificationType}
                value={notificationType}
            />
            <TouchableOpacity style={styles.btnNotification} onPress={requestSendPushNotification}>
                <Text>Gửi thông báo</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        minHeight: 300,
        backgroundColor: Colors.primary100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    headerTitle: {
        color: Colors.primary300,
        fontFamily: 'chakra-b',
        fontSize: 22
    },
    input: {
        backgroundColor: Colors.primary400,
        padding: 16,
        borderRadius: 4,
        elevation: 4,
        width: windowWidth - 100,
        height: 100
    },
    btnNotification: {
        backgroundColor: Colors.primary200,
        padding: 16,
        borderRadius: 4,
        elevation: 4,
        marginVertical: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})
export default NotificationHeader;