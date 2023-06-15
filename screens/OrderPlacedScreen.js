import { ScrollView, StyleSheet, Text, View } from "react-native";
import ItemOrderPlaced from "../components/ItemOrderPlaced";
import {Colors} from '../constants/Colors';

function OrderPlacedScreen(){
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ItemOrderPlaced />
            <ItemOrderPlaced />
            <ItemOrderPlaced />
            <ItemOrderPlaced />
            <ItemOrderPlaced />
            <ItemOrderPlaced />
        </ScrollView>
    );
}
export default OrderPlacedScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary100,
    }
})