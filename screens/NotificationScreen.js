import { ScrollView } from "react-native";
import NotificationHeader from "../components/NotificationHeader";
import NotificationContent from "../components/NotificationContent";

function NotificationScreen() {
    return (
        <ScrollView>
            <NotificationHeader />
            <NotificationContent />
        </ScrollView>

    );
}
export default NotificationScreen;