import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ServiceItem({ title }) {
    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../assets/images/hair-cut.png')} style={styles.img} />
                <Text>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default ServiceItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    img: {
        height: 60
    }
});