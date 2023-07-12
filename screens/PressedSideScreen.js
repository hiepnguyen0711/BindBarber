import { ScrollView, View } from "react-native";
import HairCutHeader from "../components/HairCutHeader";
import HairCutContent from "../components/HairCutContent";

function PressedSideScreen(){
    const imageData = [
        "https://i.imgur.com/9nKZBtY.jpg"
    ]
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <HairCutHeader imageUri={'https://i.imgur.com/tD9sQh3.jpg'}/>
            <HairCutContent title={'Ép Side'} imageData={imageData} content='Ép side là một phong cách tóc độc đáo và cá nhân, mang lại vẻ ngoài sành điệu và hiện đại. 
            Tại Bind Barber, chúng tôi có đội ngũ nghệ nhân tóc đã qua đào tạo kỹ lưỡng và giàu kinh nghiệm trong việc thực hiện ép side. 
            Chúng tôi sẽ làm việc cùng bạn để hiểu rõ về mong muốn và phong cách riêng của bạn, để tạo nên một ép side phù hợp và thể hiện cá nhân của bạn một cách tối đa.' />
        </ScrollView>
    );
}
export default PressedSideScreen;