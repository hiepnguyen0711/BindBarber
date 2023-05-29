import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";

function Banner({onPress}){
    const data = [
        { imageUrl: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1813272.jpg&fm=jpg' },
        { imageUrl: 'https://img.freepik.com/premium-photo/barbershop-armchair-salon-men_293990-16.jpg?w=2000' },
        { imageUrl: 'https://www.washingtonian.com/wp-content/uploads/2021/10/ScissorsScotchNavyYard-4-2048x1366.jpg' },
      ];
    
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.innerContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.banner} />
        </View>
        </TouchableOpacity>

      );
    return(
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={500}
                itemWidth={500}
                loop={true}
                autoplay={true}
                autoplayDelay={7000}
                autoplayInterval={3000}
            />
        </View>
    );
}

export default Banner;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: 'hidden',
        margin: 0
    },
    innerContainer:{
        flex: 1,
        margin: 0
    },
    banner:{
        height: 350,
        resizeMode: 'cover',
        width: '100%',
        margin: 0
    }
})