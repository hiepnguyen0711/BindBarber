import { ScrollView, StyleSheet, View } from "react-native";
import ManagerOrderMenu from "../components/ManagerOrderMenu";
import OrderPending from "../components/OrderPending";
import { Colors } from "../constants/Colors";

function ManagerOrderScreen() {
    return (
        <View style={styles.root}>
            <ManagerOrderMenu />
            <ScrollView showsVerticalScrollIndicator={false}>
                <OrderPending />
                <OrderPending />
                <OrderPending />
                <OrderPending />
                <OrderPending />
                <OrderPending />

            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    root:{
        backgroundColor: Colors.primary100,
        flex: 1,
        alignItems: 'center'
    }
})
export default ManagerOrderScreen;