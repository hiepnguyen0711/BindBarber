import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useEffect, useState } from "react";


const windowWidth = Dimensions.get('window').width;
function NotificationContent(){
    const notificationRef = collection(FIRESTORE_DB, 'NotificationHistory');
    const [notificationData, setNotificationData] = useState([]);
    useEffect(() => {
        async function getNotificationData(){
            const q = await query(notificationRef, orderBy('time', 'desc'));
            const result = await onSnapshot(q, (querySnapshot) => {
                const notifications = [];
                querySnapshot.forEach((doc) => {
                    const notification = doc.data();
                    notification.time = notification.time.toDate();
                    const day = notification.time.getDate();
                    const month = notification.time.getMonth()+1;
                    const year = notification.time.getFullYear();
                    const formattedDate = `${day < 10? '0' + day : day }/${month < 10 ? '0' + month : month}/${year}`;
                    notifications.push({id: doc.id, date: formattedDate, ...notification});
                });
                setNotificationData(notifications);
            });
        }
        getNotificationData();
    }, []);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lịch sử thông báo</Text>
            {notificationData.map((item, index) => (
                <View style={styles.contentContainer} key={index}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>{item.date}</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>{item.content}</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>{item.userPost}</Text></View>        
            </View>
            ))}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        minHeight: 700,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -30,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems: 'center',
        padding: 8
    },
    title:{
        fontFamily: 'chakra-b',
        fontSize: 22,
        marginVertical: 4
    },
    contentContainer:{
        backgroundColor: Colors.primary400,
        width: windowWidth 
    },
    dateContainer:{
        backgroundColor: Colors.primary300
    },
    dateFont:{
        fontFamily: 'chakra-b',
        fontSize: 14,
        textAlign: 'center'
    },
    contentInnnerContainer:{
        padding: 4
    },
    contentFont:{
        fontFamily: 'chakra-r',
        fontSize: 14,
        textAlign: 'center'
    },
    authorContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    authorTitle:{
        fontFamily: 'chakra-r',
    },
    authorName:{
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        color: Colors.primary200
    }
})
export default NotificationContent;