import { StyleSheet, Text, View } from "react-native";

function Service({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
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
    title:{
        fontFamily: 'pacifico',
        fontWeight: 500,
        fontSize: 28
    }
});