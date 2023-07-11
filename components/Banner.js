import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";


const windowWidth = Dimensions.get('window').width;
function Banner({ onPress }) {
    const data = [
        // { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Banners%2Fbanner_1.png?alt=media&token=68234498-7133-4bf5-b238-65e1800beddd' },
        { imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bindbarber-a98b3.appspot.com/o/Banners%2Fbanner_2.png?alt=media&token=d510d3ac-ad00-427f-8dc0-1f504ff45092' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.innerContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.banner} />
            </View>
        </TouchableOpacity>

    );
    return (
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
    container: {
        flex: 1,
        overflow: 'hidden',
        margin: 0
    },
    innerContainer: {
        flex: 1,
        margin: 0,
        height: 300
    },
    banner: {
        height: 300,
        resizeMode: 'cover',
    }
})