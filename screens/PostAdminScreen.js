import { Text, View } from "react-native";
import BannerPostAdmin from "../components/BannerPostAdmin";
import ContentPostAdmin from "../components/ContentPostAdmin";

function PostAdminScreen(){
    return(
        <View>
            <BannerPostAdmin />
            <ContentPostAdmin />
        </View>
    );
}
export default PostAdminScreen;