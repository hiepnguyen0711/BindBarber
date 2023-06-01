import { Image, StyleSheet, View, Text, Platform, ScrollView } from "react-native";
import Banner from "../components/Banner";
import Service from "../components/Service";
import ServiceItem from "../components/ServiceItem";
import InfoContact from "../components/InfoContact";

function CategoryScreen() {
    function ViewBannerHandler() {
        console.log('abc');
    }
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
        <View style={styles.container}>
            <Banner onPress={ViewBannerHandler} />
            <View style={styles.innerContainer}>
                <View style={styles.serviceTitle}>
                    <Service title='Dịch vụ' />
                </View>
                <View style={styles.serviceButton}>
                    <ServiceItem title='Cắt Tóc' />
                </View>
                <View style={styles.barberTitle}>
                    <Text style={styles.barberFont}>Barber</Text>
                </View>
                <View style={styles.barberImg}>
                    {/* barber 1 */}
                    <View style={styles.textImg}>
                        <View style={styles.innerBarber}>
                            <Image source={require('../assets/images/barber/bind.jpeg')} style={styles.barberPicture} />
                        </View>
                        <Text style={[styles.barberText, {color: 'red'}]}>BOSS</Text>
                    </View>
                    {/* barber 2 */}
                    <View style={styles.textImg}>
                        <View style={styles.innerBarber}>
                            <Image source={require('../assets/images/barber/hiep_2.jpeg')} style={styles.barberPicture} />
                        </View>
                        <Text style={[styles.barberText, {color: 'white'}]}>Hiệp</Text>
                    </View>
                    {/* barber 3 */}
                    <View style={styles.textImg}>
                        <View style={styles.innerBarber}>
                            <Image source={require('../assets/images/barber/hung.jpeg')} style={styles.barberPicture} />
                        </View>
                        <Text style={[styles.barberText, {color: 'white'}]}>Hùng</Text>
                    </View>
                    {/*  */}
                </View>
            </View>
            {/* info contact */}
            <InfoContact />
        </View>
        </ScrollView>
    );

}

export default CategoryScreen;
const styles = StyleSheet.create({
    root:{
        backgroundColor: '#025464',
    },
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1
    },
    banner: {
        height: 250,
        resizeMode: 'cover',
        width: '100%',
    },
    serviceTitle: {
        flex: 2
    },
    serviceButton: {
        flex: 3
    },
    barberTitle: {
        flex: 3,
        marginHorizontal: 16
    },
    barberFont: {
        fontFamily: 'pacifico',
        fontWeight: 500,
        fontSize: 28,
        color: '#E8AA42'
    },
    barberImg: {
        flex: 4,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    textImg: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    innerBarber: {
        backgroundColor: '#E57C23',
        borderRadius: 80,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        width: 80,
        height: 80,
        // marginTop: -30,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    barberPicture: {
        height: 75,
        width: 75,
        borderRadius: 75,
        resizeMode: 'cover'
    },
    barberText: {
        fontFamily: 'josefin-m',
        fontSize: 18,

    }
})