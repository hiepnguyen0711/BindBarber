import { ScrollView, View } from "react-native";
import HairCutHeader from "../components/HairCutHeader";
import HairCutContent from "../components/HairCutContent";

function CurlingScreen() {
    const imageData = [
        "https://i.imgur.com/A0EopyC.jpg",
        "https://i.imgur.com/BDylG82.jpg",
        "https://i.imgur.com/G0Gmbh6.jpg"
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HairCutHeader imageUri={'https://i.imgur.com/16HUF1h.jpg'} />
            <HairCutContent title={'Uốn Tóc'} imageData={imageData} content='Chúng tôi tại Bind Barber tự hào mang đến dịch vụ uốn tóc tuyệt vời nhất tại Cà Mau! 
            Với đội ngũ nghệ nhân tóc giàu kinh nghiệm và tài năng, 
            chúng tôi cam kết tạo ra những kiểu uốn tóc đẹp và độc đáo, tôn vinh phong cách và cá nhân của từng khách hàng.
            Khi bạn đến với chúng tôi, chúng tôi lắng nghe mong muốn của bạn và tư vấn kỹ lưỡng để hiểu rõ về phong cách tóc bạn mong muốn. 
            Từ uốn xoăn nảy tự nhiên, uốn bồng bềnh đến uốn thẳng mượt, chúng tôi sẽ tạo nên một kiểu tóc độc đáo và phù hợp với bạn.
            ' 
            />
        </ScrollView>
    );
}
export default CurlingScreen;