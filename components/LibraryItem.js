import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
function LibraryItem({ barberName, imageUrl, barberImage, liked }) {
    const [loading, setLoading] = useState(false);
    function onLoading(value, label) {
        setLoading(value);
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                {loading && <View style={styles.loadingActivity}>
                    <ActivityIndicator size='large' color='red' />
                </View>}
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
                    <TouchableOpacity>
                        <View style={styles.buttonIcon}>
                            <Ionicons name="bookmark-outline" size={24} color={'black'} />
                        </View>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 50
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