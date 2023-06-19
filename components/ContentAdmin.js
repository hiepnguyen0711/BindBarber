import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DashboardContentItem from "./DashboardContentItem";
import { Colors } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';


const borderTopRadius = 50;
function ContentAdmin({navigation}) {

    function PostAdminScreenHandler() {
        navigation.navigate('postadmin');
    }
    return (
        <View style={styles.container}>
            <View style={styles.serviceContainer}>
                <Text style={styles.serviceFont}>Công cụ</Text>
            </View>
            <View style={styles.itemContainer}>
                <DashboardContentItem imageUrl={'https://i.imgur.com/ZwY5MrB.png'} title='Đặt lịch' />
                <DashboardContentItem imageUrl={'https://i.imgur.com/vHhzX7M.png'} title='Đơn hàng' />
                <DashboardContentItem imageUrl={'https://i.imgur.com/GW7eWZY.png'} title='Đăng bài' onPress={PostAdminScreenHandler} />
                <DashboardContentItem imageUrl={'https://i.imgur.com/YczV1Rf.png'} title='Dịch vụ' />
                <DashboardContentItem imageUrl={'https://i.imgur.com/H0aJok0.png'} title='Sản phẩm' />
                <DashboardContentItem imageUrl={'https://i.imgur.com/1Tx9vHE.png'} title='Thành viên' />
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <View>
                    <Ionicons name='add' color={'white'} size={38} />
                </View>
            </TouchableOpacity>
        </View>

    );
}
export default ContentAdmin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: borderTopRadius,
        borderTopRightRadius: borderTopRadius,
        marginTop: -100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        overflow: Platform.OS === 'ios' ? 'visible' : 'visible',
        elevation: 32,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8
    },
    serviceContainer: {
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

    },
    serviceFont: {
        fontFamily: 'pacifico',
        fontSize: 32,
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: Colors.primary200,
        right: 50,
        top: -25,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 32,
        elevation: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    }
})