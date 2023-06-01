import { View, Text, StyleSheet, Image } from 'react-native';

function InfoContact() {
    return (
        <View style={styles.container}>
            <View style={styles.groupBarberName}> 

            <Image source={require('../assets/images/barber-shop.png')} style={styles.iconBarberShop} />
            <Text style={styles.storeName}>BIND BARBERSHOP</Text>
            <Image source={require('../assets/images/barber-shop.png')} style={styles.iconBarberShop} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.Title}>Địa chỉ:</Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.Info}> Đường Đinh Tiên Hoàng Phường 9, TP. Cà Mau </Text>
                </View>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.Title}>Điện thoại:</Text>
                <Text style={styles.Info}> 0945899810 (Chí Đại)</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.Title}>Giờ làm việc:</Text>
                <Text style={styles.Info}> 9h đến 19h (còn khách vẫn còn làm)</Text>
            </View>
            <View>
                <Text style={styles.footerAds}>NHẬN ĐÀO TẠO HỌC VIÊN</Text>
            </View>
        </View>
    );
}
export default InfoContact;
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        alignItems:'center',
        marginBottom: 20,
        marginTop: 8
    },
    groupBarberName:{
        flexDirection: 'row',
        alignItems:'center'
    },
    iconBarberShop:{
        height: 20,
        resizeMode: 'contain'
    },
    storeName: {
        fontFamily: 'chakra-b',
        textTransform: 'uppercase',
        color: '#E8AA42',
        fontSize: 24,
        textAlign: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 4
    },
    Title: {
        color: '#E8AA42',
        fontFamily: 'josefin-b',
        fontSize: 16
    },
    Info: {
        color: '#F8F1F1',
        fontFamily: 'josefin-m',
        fontSize: 14
    },
    footerAds:{
        fontSize: 18,
        fontFamily: 'chakra-b',
        color:'#E57C23'
    }
})