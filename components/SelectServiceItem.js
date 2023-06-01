import { Platform, StyleSheet, Text, View } from "react-native";
import ItemService from "./ItemService";
import TotalService from "./TotalService";

function SelectServiceItem(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.serviceTitle}>
                    Dịch Vụ
                </Text>
            </View> 
            <View style={styles.serviceBorder}>
                <ItemService title={'Cắt & Cạo'} price={60000} nameIonicons="remove-circle" />
                <ItemService title={'Uốn'} price={300000} nameIonicons="add-circle" />
                <ItemService title={'Nhuộm'} price={200000} nameIonicons="add-circle" />
                <ItemService title={'Ép Side'} price={120000} nameIonicons="add-circle" />
            </View>
            <View>
                <TotalService />
            </View>
        </View>
    );
}
export default SelectServiceItem;
const styles = StyleSheet.create({
    container:{
        marginBottom: 30
    },
    serviceTitle:{
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    serviceBorder:{
        borderBottomWidth: 1,
        borderBottomColor: '#E8AA42',
        marginBottom: 20,
        paddingBottom: 20,
        borderStyle: Platform.OS === 'android'? 'dashed' : 'solid',
    }
})