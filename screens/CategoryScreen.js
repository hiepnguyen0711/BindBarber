import { Image, StyleSheet, View } from "react-native";
import Banner from "../components/Banner";
import Service from "../components/Service";
import ServiceItem from "../components/ServiceItem";

function CategoryScreen(){
    function ViewBannerHandler(){
        console.log('abc');
    }
    return(
        <View style={styles.container}>
            <Banner onPress={ViewBannerHandler} />
            <Service title='Dịch vụ' />
            <ServiceItem  title='Cắt Tóc' />
        </View>
        
    );
  
}

export default CategoryScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    innerContainer:{
        flex: 1,
        
    },
    banner:{
        height: 250,
        resizeMode: 'cover',
        width: '100%',
    }
})