import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

function TitleManagerOrderMenu({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.titleFont}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{

    },
    titleFont:{
        fontFamily: 'chakra-b',
        fontSize: 20,
        color: Colors.primary300,
        textTransform: 'uppercase'
    }
})
export default TitleManagerOrderMenu;