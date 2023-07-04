import { ScrollView, View } from "react-native";
import ManagerMemberContent from "../components/ManagerMemberContent";
import ManagerMemberHeader from "../components/ManagerMemberHeader";

function ManagerMemberScreen() {
    return (
        <ScrollView>

            <ManagerMemberHeader />
            <ManagerMemberContent />
        </ScrollView>
    );
}
export default ManagerMemberScreen;