import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function CurlingContent() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.serviceFont}>Dịch vụ</Text>
            <Text style={styles.titleFont}>Cắt & Cạo</Text>
            <View style={styles.iconContainer}>
                <Image source={require('../assets/images/star.png')} style={styles.icon} />
                <Image source={require('../assets/images/star.png')} style={styles.icon} />
                <Image source={require('../assets/images/star.png')} style={styles.icon} />
                <Image source={require('../assets/images/star.png')} style={styles.icon} />
                <Image source={require('../assets/images/star.png')} style={styles.icon} />
            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutFont}>Chào mừng đến Bind Barber - tiệm cắt tóc hàng đầu ở Cà Mau! 
                Với 8 năm kinh nghiệm và danh tiếng xuất sắc, chúng tôi mang đến dịch vụ cắt và cạo râu tuyệt vời. 
                Đội ngũ chuyên nghiệp, không gian thoải mái và phong cách tạo kiểu độc đáo. 
                Hãy đến và trải nghiệm sự tươi mới và tự tin tại Bind Barber!
                </Text>
            </View>
            <View >
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/1.jpeg')} style={styles.imageGuest} />
                    <Image source={require('../assets/images/2.jpeg')} style={styles.imageGuest} />
                    <Image source={require('../assets/images/3.jpeg')} style={styles.imageGuest} />
                    <Image source={require('../assets/images/4.jpeg')} style={styles.imageGuest} />
                    <Image source={require('../assets/images/5.jpeg')} style={styles.imageGuest} />
                    <Image source={require('../assets/images/6.jpeg')} style={styles.imageGuest} />
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.replace('bookscreen')}>
                    <Text style={styles.btnFont}>Đặt Lịch</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        minHeight: (windowHeight+50) - 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -100,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    serviceFont:{
        fontFamily: 'chakra-r',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    titleFont:{
        fontFamily: 'josefin-b',
        fontSize: 22,
    },
    iconContainer: {
        flexDirection: 'row'
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginHorizontal: 2
    },
    aboutContainer: {
        width: windowWidth - 100,
        marginVertical: 5
    },
    aboutFont: {
        fontFamily: 'josefin-r',
        lineHeight: 20
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: windowWidth - 20,
    },
    imageGuest: {
        width: windowWidth - 300,
        height: 100,
        resizeMode: 'cover',
        marginHorizontal: 3,
        marginVertical: 3
    },
    btnContainer: {
        backgroundColor: 'black',
        width: windowWidth - 190,
        padding: Platform.OS === 'android' ? 5 : 10,
        borderRadius: 30,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    btnFont: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        fontSize: 20
    }
})
export default CurlingContent;