import { Image, StyleSheet, View, Text, Platform, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import Banner from "../components/Banner";
import Service from "../components/Service";
import ServiceItem from "../components/ServiceItem";
import InfoContact from "../components/InfoContact";
import { Colors } from "../constants/Colors";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useCallback, useEffect, useState } from "react";

function CategoryScreen() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [barberData, setBarberData] = useState([]);
    const [loading, setLoading] = useState(false);

    const onLoading = (value) => {
        setLoading(value);
    }

    const getBarberData = useCallback(() => {

        const q = query(userRef, where('barber', '==', true), orderBy('rank', 'desc'));
        const result = onSnapshot(q, (querySnapshot) => {
            const barbers = [];
            querySnapshot.forEach((doc) => {
                const barber = doc.data();
                barbers.push({ id: doc.id, ...barber });
            });
            setBarberData(barbers);
        })
    }, []);
    useEffect(() => {
        getBarberData();
    }, []);
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Banner />
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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.barberImg}>
                            {barberData.map((item, index) => (
                                <TouchableOpacity style={styles.barberImageContainer} key={index}>
                                    <View style={styles.textImg} >
                                        <View style={styles.innerBarber}>
                                            {loading && <ActivityIndicator size={'large'} color={'red'} style={styles.activity} />}
                                            <Image
                                                source={{ uri: item.avatar }}
                                                style={styles.barberPicture}
                                                onLoadStart={() => onLoading(true)}
                                                onLoadEnd={() => onLoading(false)}
                                            />
                                        </View>
                                        <Text style={[styles.barberText, { color: 'red' }]}>{item.fullName}</Text>
                                    </View>
                                </TouchableOpacity>

                            ))}

                        </View>

                    </ScrollView>
                </View>
                {/* info contact */}
                <InfoContact />
            </View>
        </ScrollView>
    );

}

export default CategoryScreen;
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
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
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'flex-start',
    },
    barberImageContainer: {
        alignItems: 'center',
        marginHorizontal: 2
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    activity: {
        position: 'absolute',
        zIndex: 1
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