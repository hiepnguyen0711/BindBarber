import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
function ProductScreenForm() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <TouchableOpacity style={styles.btnAddContainer}>
                    <Ionicons name='add-circle' color={'white'} size={24} />
                    <Text style={styles.btnFont}>Đăng sản phẩm</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Products%2Fpodmade.png?alt=media&token=08a5418f-9ed7-4dd6-aaf7-57f1b91e3bf9' }}
                        style={styles.productImage} />
                    <Text style={styles.titleFont}>Ace High Black Cat Pomade</Text>
                    <Text style={styles.priceFont}>390.000 đ</Text>
                    <View style={styles.btnManagerContainer}>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Ionicons name="ios-pencil-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Ionicons name="trash-bin-sharp" color={'white'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}
export default ProductScreenForm;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20
    },
    btnAddContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary200,
        width: windowWidth - 192,
        padding: 8,
        borderRadius: 8,
        justifyContent: 'center'
    },
    btnFont: {
        fontFamily: 'chakra-b',
        marginHorizontal: 8,
        fontSize: 18,
        color: Colors.primary400
    },
    innerContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    productContainer:{
        backgroundColor: 'white',
        width: windowWidth - 245,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    titleFont:{
        fontFamily: 'chakra-b',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: Platform.OS === 'android' ? 2:4
    },
    priceFont:{
        fontFamily: 'chakra-m',
        fontSize: 14,
        color: Colors.primary200
    },
    btnManagerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4
    },
    btnEdit:{
        backgroundColor: '#BFDB38',
        padding: 4,
        borderRadius: 8,
        marginHorizontal: 8
    },
    btnDelete:{
        backgroundColor: '#F55050',
        padding: 4,
        borderRadius: 8,
        marginHorizontal: 8
    }
})