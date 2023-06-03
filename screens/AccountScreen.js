import { ScrollView, StyleSheet, Text, View } from "react-native";
import AvatarAccount from "../components/AvatarAccount";
import { Colors } from "../constants/Colors";
import TotalAmountSpent from "../components/TotalAmountSpent";
import AccountSetting from "../components/AccountSetting";
import ButtonLogout from "../components/ButtonLogout";

function AccountScreen() {
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View >
                    <AvatarAccount
                        imageUrl={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCVbDShzHzuw3kjCFyKJCwdIkLzLZrvGDoj5oYoIev-ig&oe=649FA519'}
                        accountName={'BOSS'}
                        phone={'0945899810'}
                    />
                </View>
                <View>
                    <TotalAmountSpent price={8888888} />
                </View>
                <View style={styles.functionContainer}>
                    <AccountSetting iconName={'person-outline'} title={'Thiết lập tài khoản'} />
                    <AccountSetting iconName={'calendar-outline'} title={'Lịch đã đặt'} />
                    <AccountSetting iconName={'cart-outline'} title={'Đơn hàng đã đặt'} />
                    <AccountSetting iconName={'bookmark-outline'} title={'Danh sách đã lưu'} />
                    <AccountSetting iconName={'desktop-outline'} title={'Công cụ quản lí của Admin'} />
                </View>
                <View>
                    <ButtonLogout />
                </View>
            </View>
        </ScrollView>
    );
}

export default AccountScreen;
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,

    },
    container: {
        marginBottom: 30
    },
    functionContainer: {
        backgroundColor: Colors.primary400,
        paddingVertical: 8,
        margin: 16,
        marginTop: 10,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8
    }
})