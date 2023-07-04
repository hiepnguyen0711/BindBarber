import { ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import { useCallback, useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";

function ManagerMemberContent() {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [loading, setLoading] = useState(false);
    const [memberData, setMemberData] = useState([]);
    const getMemberData = useCallback(() => {
        const q = query(userRef, where('barber', '==', true));
        const result = onSnapshot(q, (querySnapshot) => {
            const members = [];
            querySnapshot.forEach((doc) => {
                const member = doc.data();
                if(member.rank === 2){
                    member.isRank = 'Quản Lí';
                }
                else if(member.rank === 1)
                {
                    member.isRank = '';
                }
                else if(member.rank === 3)
                {
                    member.isRank = 'BOSS';
                }
                // console.log(member);
                if (member.barber) {
                    members.push({ id: doc.id, isBarber: 'Barber', ...member });
                }
                else {
                    members.push({ id: doc.id, isBarber: 'Member', ...member });
                }
                
            });
            setMemberData(members);
        })
    }, []);
    useEffect(() => {
        getMemberData();
    }, []);


    function onLoading(value) {
        setLoading(value);
    }
    return (
        <View style={styles.container}>
            {memberData.map((item, index) => (
                <View style={styles.innerContainer} key={index}>
                    <View>
                        {loading && <ActivityIndicator size={'small'} color={Colors.primary200} style={styles.activity} />}
                        <Image
                            source={{ uri: item.avatar }}
                            style={styles.imageMember}
                            onLoadStart={() => onLoading(true)}
                            onLoadEnd={() => onLoading(false)}
                        />
                    </View>
                    <View >
                        <Text style={styles.memberName}>{item.fullName}</Text>
                        <Text style={styles.memberPhone}>{item.phone}</Text>
                        <Text style={styles.memberRank}>{item.isBarber}</Text>
                    </View>
                    <View >
                        <Text style={styles.rankFont}>{item.isRank}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnRank}>
                            <Ionicons name="briefcase-outline" size={22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnBarber}>
                            <Ionicons name="ribbon" size={22} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
            ))}


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        padding: 30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: -20,
        minHeight: 700
    },
    innerContainer: {
        backgroundColor: Colors.primary400,
        borderRadius: 4,
        padding: Platform.OS === 'android' ? 4 : 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8

    },
    activity: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        left: 20
    },
    imageMember: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 50
    },
    memberName: {
        fontFamily: 'chakra-b',
    },
    memberPhone: {
        fontFamily: 'chakra-m'
    },
    memberRank: {
        fontFamily: 'chakra-r'
    },
    rankFont: {
        color: Colors.primary200,
        fontFamily: 'chakra-m'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnRank: {
        backgroundColor: Colors.primary300,
        padding: 3,
        borderRadius: 4,
        marginHorizontal: 4
    },
    btnBarber: {
        backgroundColor: Colors.primary200,
        padding: 3,
        borderRadius: 4,
        marginHorizontal: 4
    }
})
export default ManagerMemberContent;