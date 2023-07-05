import { ActivityIndicator, Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import { useCallback, useEffect, useState } from "react";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ManagerMemberContent({ dataFind }) {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const findData = dataFind;
    const [loading, setLoading] = useState(false);
    const [memberData, setMemberData] = useState([]);
    const [memberRank, setMemberRank] = useState(1);
    const getMemberAsyncStore = useCallback(async () => {
        try {
            const rank = await AsyncStorage.getItem('rank');
            setMemberRank(rank);
            // console.log(memberRank);
        } catch (e) {
            console.log(e);
        }
    }, [memberRank]);
    const getMemberData = useCallback(() => {
        const q = query(userRef, where('barber', '==', true));
        const result = onSnapshot(q, (querySnapshot) => {
            const members = [];
            querySnapshot.forEach((doc) => {
                const member = doc.data();
                if (member.rank === 2) {
                    member.isRank = 'Quản Lí';
                }
                else if (member.rank === 1) {
                    member.isRank = '';
                }
                else if (member.rank === 3) {
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
        getMemberAsyncStore();
        console.log(findData);
    }, [findData]);


    function onLoading(value) {
        setLoading(value);
    }
    function PromotedToManager(id, name, rank) {
        if (memberRank < 3) return Alert.alert('Thông báo', 'Chỉ có BOSS mới có quyền thực hiện chức năng này');
        if (rank === 3 && memberRank < 3) return Alert.alert('Thông báo', 'Bạn không thể tác động vào BOSS');
        Alert.alert('Thông báo', `Bạn có chắc chắn thăng chức cho ${name} lên làm Quản Lí?`,
            [
                {
                    text: 'Đồng ý',
                    onPress: () => updateDoc(doc(userRef, id), {
                        rank: 2
                    })
                },
                {
                    text: 'Huỷ bỏ',
                    style: 'cancel'
                }
            ]);
    }
    function DemotedToManager(id, name, rank) {
        if (memberRank < 3) return Alert.alert('Thông báo', 'Chỉ có BOSS mới có quyền thực hiện chức năng này');
        if (rank === 3) return Alert.alert('Thông báo', 'Bạn không thể tác động vào BOSS');
        Alert.alert('Thông báo', `Bạn chắc chắn muốn giáng chức ${name} `, [
            {
                text: 'Đồng ý',
                onPress: () => updateDoc(doc(userRef, id), {
                    rank: 1
                })
            },
            {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ])
    }
    const RemoveBarber = (id, name, rank) => {
        if (rank === 3 && memberRank < 3) return Alert.alert('Thông báo', 'Bạn không thể tác động vào BOSS');
        Alert.alert('Xác nhận', `Bạn có chắc chắn xoá ${name} khỏi thợ cắt tóc không?`, [
            {
                text: 'Đồng ý',
                onPress: () => updateDoc(doc(userRef, id), {
                    barber: false
                })
            }, {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ])
    }
    const AddBaber = (id, name, rank) => {
        if (rank === 3 && memberRank < 3) return Alert.alert('Thông báo', 'Bạn không thể tác động vào BOSS');
        Alert.alert('Xác nhận', `Bạn có chắc thêm ${name} làm Thợ cắt tóc của quán?`, [
            {
                text: 'Đồng ý',
                onPress: () => updateDoc(doc(userRef, id), {
                    barber: true
                })
            }, {
                text: 'Huỷ bỏ',
                style: 'cancel'
            }
        ])
    }
    return (
        <View style={styles.container}>
            {findData.length !== 0 ? findData.map((item, index) => (<View style={styles.innerContainer} key={index}>
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
                    <Text style={styles.memberRank}>{item.barber === true ? 'Barber' : 'Member'}</Text>
                </View>
                <View >
                    <Text style={styles.rankFont}>{item.rank === 1 ? '' : 'Quản Lí'}</Text>
                </View>
                <View style={styles.btnContainer}>
                    {item.rank > 1 ? <TouchableOpacity style={styles.btnRank} onPress={() => DemotedToManager(item.id, item.fullName, item.rank)}>
                        <Ionicons name="briefcase" size={22} color="white" />
                    </TouchableOpacity> : <TouchableOpacity style={styles.btnRank} onPress={() => PromotedToManager(item.id, item.fullName, item.rank)}>
                        <Ionicons name="briefcase-outline" size={22} color="white" />
                    </TouchableOpacity>}
                    {item.barber ? <TouchableOpacity style={styles.btnBarber} onPress={() => RemoveBarber(item.id, item.fullName, item.rank)}>
                        <Ionicons name="ribbon" size={22} color="white" />
                    </TouchableOpacity> : <TouchableOpacity style={styles.btnBarber} onPress={() => AddBaber(item.id, item.fullName, item.rank)}>
                        <Ionicons name="ribbon-outline" size={22} color="white" />
                    </TouchableOpacity>}

                </View>

            </View>)) : memberData.map((item, index) => (
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
                        {item.rank > 1 ? <TouchableOpacity style={styles.btnRank} onPress={() => DemotedToManager(item.id, item.fullName, item.rank)}>
                            <Ionicons name="briefcase" size={22} color="white" />
                        </TouchableOpacity> : <TouchableOpacity style={styles.btnRank} onPress={() => PromotedToManager(item.id, item.fullName, item.rank)}>
                            <Ionicons name="briefcase-outline" size={22} color="white" />
                        </TouchableOpacity>}
                        {item.barber ? <TouchableOpacity style={styles.btnBarber} onPress={() => RemoveBarber(item.id, item.fullName, item.rank)}>
                            <Ionicons name="ribbon" size={22} color="white" />
                        </TouchableOpacity> : <TouchableOpacity style={styles.btnBarber} onPress={() => AddBaber(item.id, item.fullName, item.rank)}>
                            <Ionicons name="ribbon-outline" size={22} color="white" />
                        </TouchableOpacity>}

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
        fontFamily: 'chakra-r',
        color: 'gray'
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
        marginHorizontal: 4,

    }
})
export default ManagerMemberContent;