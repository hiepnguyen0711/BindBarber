import { StyleSheet, Text, View } from "react-native";

function Service({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.service}>{title}</Text>
            {/* <View></View> */}
        </View>
    );
}

export default Service;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 0,
        marginHorizontal: 16
    },
    service:{
        fontFamily: 'pacifico',
        fontWeight: 500,
        fontSize: 28,
        color: '#E8AA42'
    }
});