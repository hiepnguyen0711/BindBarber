import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";


const windowWidth = Dimensions.get('window').width;
function NotificationContent(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lịch sử thông báo</Text>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}><Text style={styles.dateFont}>15/6/2023</Text></View>    
                <View style={styles.contentInnnerContainer}><Text style={styles.contentFont}>Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào Xin chào xin chào
                Xin chào xin chào</Text></View>    
                <View style={styles.authorContainer}><Text style={styles.authorTitle}>được gửi bởi </Text><Text style={styles.authorName}>Hiệp</Text></View>        
            </View>
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
        fontSize: 14
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