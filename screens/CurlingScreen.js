import { View } from "react-native";
import CurlingHeader from "../components/CurlingHeader";
import CurlingContent from "../components/CurlingContent";

function CurlingScreen(){
    return(
        <View>
            <CurlingHeader />
            <CurlingContent />
        </View>
    );
}
export default CurlingScreen;