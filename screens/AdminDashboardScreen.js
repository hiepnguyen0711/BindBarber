import { StyleSheet, Text, View } from "react-native";
import BannerAdmin from "../components/BannerAdmin";
import { Colors } from "../constants/Colors";
import ContentAdmin from "../components/ContentAdmin";

function AdminDashboardScreen({navigation}) {
    return (
        <View style={styles.container}>
            <BannerAdmin navigation={navigation} />
            <ContentAdmin navigation={navigation} />
        </View>
    );
}
export default AdminDashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.primary100
    }
})