import { collection, onSnapshot, query, deleteDoc, doc, orderBy } from "firebase/firestore";
import { FlatList, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Platform, ActivityIndicator, Alert } from "react-native";
import { FIRESTORE_DB } from "../firebase/app/firebaseConfig";
import { useState, useEffect } from 'react';
import { Colors } from "../constants/Colors";

function ContentPostAdmin() {
    const postRef = collection(FIRESTORE_DB, 'Library');
    const [libraryData, setLibraryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayedItems, setDisplayedItems] = useState(5); // Initially display 2 items
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const getLibraryData = async () => {
            try {
                const q = await query(postRef, orderBy('time', 'desc'));
                const result = onSnapshot(q, (querySnapshot) => {
                    const data = [];
                    querySnapshot.forEach((doc) => {
                        data.push({ id: doc.id, ...doc.data() });
                    });
                    setLibraryData(data);
                    setTotalItems(data.length); // Update the totalItems state
                });
            } catch (error) {
                console.log(`Lỗi ContentPostAdmin: ${error}`);
            }
        }
        getLibraryData();
    }, []);
    function onLoading(value) {
        setLoading(value);
    }
    function handleLoadMore() {
        setDisplayedItems(prevItems => prevItems + 5); // Increase the displayedItems state by 2
    }

    function loadLibraryData(itemData) {
        function deletePost() {
            Alert.alert('Xoá bài viết này', "Bạn có chắc chắn xoá không?",
                [
                    {
                        text: 'Đồng ý',
                        onPress: () => {
                            deleteDoc(doc(FIRESTORE_DB, "Library", itemData.item.id));
                            Alert.alert('Thông báo', 'Đã xoá thành công !');
                        }
                    },
                    {
                        text: 'Huỷ bỏ',
                        style: 'cancel'
                    }
                ]);
        }
        let dayPost = itemData.item.time.toMillis();
        let t = new Date(dayPost);
        let formatted = ('0' + t.getDate()).slice(-2)
            + '/' + ('0' + t.getMonth()).slice(-2)
            + '/' + (t.getFullYear())
            + ' - ' + (t.getHours())
            + ':' + (t.getMinutes());
        if (itemData.index < displayedItems) {

            return (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {loading && <ActivityIndicator size='large' color={Colors.primary200} style={Platform.OS === 'android' ? null : styles.imagePost} />}

                        <Image
                            source={{ uri: itemData.item.image }}
                            style={styles.imagePost}
                            onLoadStart={() => onLoading(true)}
                            onLoadEnd={() => onLoading(false)}
                        />
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.fontContainer}>
                            <Text style={styles.authorFont}>được đăng bởi <Text style={styles.fullNameFont}>{itemData.item.fullName}</Text></Text>
                            <Text style={styles.dateFont}>{formatted}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <View style={styles.btnInnerContainer}>
                                <TouchableOpacity style={styles.fontBtnFunction} onPress={deletePost}>
                                    <Image source={require('../assets/images/dashboard/trash-bin.png')} style={styles.imageBtnFunction} />
                                    {/* <Text style={styles.btnFont}>Xoá</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }

    return (
        <View style={styles.root}  >
            <FlatList
                data={libraryData}
                renderItem={loadLibraryData}
                keyExtractor={item => item.id}
            />

            {/* {displayedItems < totalItems && (
                <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
                    <Text style={styles.loadMoreButtonText}>Load More</Text>
                </TouchableOpacity>
            )} */}
            <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
                    <Text style={styles.loadMoreButtonText}>Load More</Text>
                </TouchableOpacity>
        </View>
    );
}
export default ContentPostAdmin;
const styles = StyleSheet.create({
    root: {
        paddingBottom: 410,
        flexDirection: 'column',
    },
    container: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    imageContainer: {
        borderRadius: 8,
    },
    imagePost: {
        height: 350,
        resizeMode: 'stretch',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    fontContainer: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    authorFont: {
        fontFamily: 'josefin-m',
        fontSize: 16
    },
    fullNameFont: {
        fontSize: 16,
        fontFamily: 'josefin-b',
        textTransform: 'uppercase',
        color: '#CD1818',
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },
    dateFont: {
        fontFamily: 'chakra-r',
        color: '#9BABB8',
        fontSize: 12
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    btnInnerContainer: {
        flexDirection: 'row'
    },
    fontBtnFunction: {
        alignItems: 'center',
        marginHorizontal: 8
    },
    imageBtnFunction: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginVertical: Platform.OS === 'android' ? 2 : 8,
        alignItems: 'center'
    },
    btnFont: {
        fontFamily: 'josefin-m',
    },
    btnLoadMore: {
    },
    loadMoreButton: {
        backgroundColor: Colors.primary200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: 'center',
    },
    loadMoreButtonText: {
        fontFamily: 'josefin-m',
        fontSize: 14,
        color: Colors.primary400,
    },
})