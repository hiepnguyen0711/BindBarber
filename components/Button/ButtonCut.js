import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

function ButtonCut({title}) {
    return (
        <View style={styles.ButtonContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/images/hair-cut_2.png')} style={styles.img} />
                <Text style={styles.ButtonTitle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default ButtonCut;

const styles = StyleSheet.create({
    ButtonContainer:{
        width: 80,
        height: 80,
        // overflow: 'hidden',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 8,
        padding: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
    ,
    img: {
        height: 50,
        resizeMode: 'contain'
    },
    ButtonTitle:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'josefin-r',
        marginVertical: 3,
        
    }
})