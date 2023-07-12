import { ScrollView, View } from "react-native";
import HairCutHeader from "../components/HairCutHeader";
import HairCutContent from "../components/HairCutContent";

function HairDyingScreen(){
    const imageData = [
        "https://i.imgur.com/rjbloiT.jpg",
        "https://i.imgur.com/hnldGZ1.jpg",
        "https://i.imgur.com/GKat0t6.jpg"
    ]
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <HairCutHeader imageUri={'https://i.imgur.com/9sWYUdt.jpg'} />
            <HairCutContent title={'Nhuộm'} imageData={imageData} content='Tại Bind Barber, chúng tôi hiểu rằng màu tóc là một phần quan trọng trong việc thể hiện cá nhân và phong cách của bạn. 
            Chúng tôi sẽ tư vấn và hướng dẫn bạn về những xu hướng và sự kết hợp màu sắc phù hợp nhất với diện mạo và sở thích của bạn. Từ nhuộm tóc tự nhiên, 
            nâng cấp màu sắc hiện có, đến những sắc thái thú vị và cá tính, chúng tôi sẽ tạo ra một tác phẩm nghệ thuật trên tóc của bạn.' />
        </ScrollView>
    );
}
export default HairDyingScreen;