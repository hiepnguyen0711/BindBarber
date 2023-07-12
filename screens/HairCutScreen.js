import { View } from "react-native";
import HairCutHeader from "../components/HairCutHeader";
import HairCutContent from "../components/HairCutContent";

function HairCutScreen() {
    return (
        <View>
            <HairCutHeader imageUri={'https://i.imgur.com/PFrcBwd.jpg'} />
            <HairCutContent />
        </View>


    );
}
export default HairCutScreen;