import { ScrollView, View } from "react-native";
import HairCutHeader from "../components/HairCutHeader";
import HairCutContent from "../components/HairCutContent";

function HairCutScreen() {
    const imageData = [
        "https://i.imgur.com/rjbloiT.jpg",
        "https://i.imgur.com/PFlLQ0m.jpg",
        "https://i.imgur.com/jOFiFnF.jpg",
        "https://i.imgur.com/DXbjyt3.jpg",
        "https://i.imgur.com/ApL5CUT.jpg",
        "https://i.imgur.com/ttljQar.jpg"
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HairCutHeader imageUri={'https://i.imgur.com/PFrcBwd.jpg'} />
            <HairCutContent 
            title={'Cắt & Cạo'} 
            content='Chào mừng đến Bind Barber - tiệm cắt tóc hàng đầu ở Cà Mau! 
            Với 8 năm kinh nghiệm và danh tiếng xuất sắc, chúng tôi mang đến dịch vụ cắt và cạo râu tuyệt vời. 
            Đội ngũ chuyên nghiệp, không gian thoải mái và phong cách tạo kiểu độc đáo. 
            Hãy đến và trải nghiệm sự tươi mới và tự tin tại Bind Barber!'
            imageData={imageData} />
        </ScrollView>


    );
}
export default HairCutScreen;