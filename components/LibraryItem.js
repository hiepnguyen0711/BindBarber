import { ActivityIndicator, Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { arrayRemove, arrayUnion, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function LibraryItem({ barberName, imageUrl, barberImage, liked, id }) {
    const userRef = collection(FIRESTORE_DB, 'Users');
    const [loading, setLoading] = useState(false);
    const [userUid, setUserUid] = useState('');
    const [userSavePost, setUserSavePost] = useState([]);
    // const savedCollection = userSavePost[0].savedCollection;
    const findSavePost = userSavePost.find(user => user.savedCollection.includes(id));

    useEffect(() => {
        getUserUid();
        getUserSavePost();
    },[getUserSavePost]);
    const getUserUid = useCallback(async () => {
        const uid = await AsyncStorage.getItem('uid');
        setUserUid(uid);
    },[]);
    const getUserSavePost = useCallback(() => {
        const q = query(userRef, where('uid', '==', userUid));
        const result = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                users.push({id: doc.id, ...user});
            });
            setUserSavePost(users);
        })
        console.log(typeof findSavePost);
    },[]);
    function onLoading(value, label) {
        setLoading(value);
    }
    function SavePostHandler(id){
        updateDoc(doc(userRef, userUid), {
            savedCollection: arrayUnion(id)
        })
    }
    function RemovePostHandler(id) {
        updateDoc(doc(userRef, userUid), {
          savedCollection: arrayRemove(id)
        });
      }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                {loading && <ActivityIndicator size='large' color='red'  style={styles.loadingActivity}/> }
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.libraryImg}
                    onLoadStart={() => onLoading(true, 'onLoadStart')}
                    onLoadEnd={() => onLoading(false, 'onLoadEnd')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity>
                        <View style={styles.buttonIcon}>
                            <Ionicons name="heart-outline" size={24} color={'black'} />
                        </View>
                    </TouchableOpacity>
                    {findSavePost ? <TouchableOpacity onPress={() => RemovePostHandler(id)}>
                        <View style={styles.buttonIcon}>
                            <Ionicons name="bookmark" size={24} color={Colors.primary300} />
                        </View>
                    </TouchableOpacity> :  <TouchableOpacity onPress={() => SavePostHandler(id)}>
                        <View style={styles.buttonIcon}>
                            <Ionicons name="bookmark-outline" size={24} color={'black'} />
                        </View>
                    </TouchableOpacity> }
                   
                </View>
                <TouchableOpacity>
                    <View style={styles.barberInfo}>
                        <View  >
                            <Text style={styles.barberName} >by {barberName}</Text>
                        </View>
                        <View style={styles.barberContainer}>
                            <Image
                                source={{ uri: barberImage }}
                                style={styles.barberImg}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.containerLike}>
                <Text style={styles.likeFont} >{liked} lượt thích</Text>
            </View>
        </View>
    );
}

export default LibraryItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // overflow: 'hidden',
        width: windowWidth - 60
    },
    imgContainer: {
    },
    loadingActivity: {
       position: 'absolute',
       zIndex: 1,
       top: '45%',
       left: '45%'
    },
    libraryImg: {
        height: 400,
        resizeMode:'cover',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        // aspectRatio: 1.25
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center'
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonIcon: {
        marginHorizontal: 5
    },
    barberInfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barberName: {
        fontFamily: 'josefin-r',
        marginHorizontal: 5
    },
    barberContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#E8AA42',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barberImg: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    containerLike: {
        paddingHorizontal: 4,
        paddingVertical: 4
    },
    likeFont: {
        fontFamily: 'josefin-r',
        fontSize: 14,
        color: '#000000',
        marginHorizontal: 8
    }
})