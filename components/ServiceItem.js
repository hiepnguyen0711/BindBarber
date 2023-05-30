import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCut from "./Button/ButtonCut";
import ButtonCurling from "./Button/ButtonCurling";
import ButtonDying from "./Button/ButtonDying";
import ButtonPressed from "./Button/ButtonPressed";
import ButtonWax from "./Button/ButtonWax";

function ServiceItem({ title }) {
    return (

        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ButtonCut title={title} />
                <ButtonCurling title={'Uốn'} />
                <ButtonDying title={'Nhuộm'} />
                <ButtonPressed title={'Ép Side'} />
                <ButtonWax title={'Wax'} />
            </ScrollView>
        </View>
    );
}
export default ServiceItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 8
    },

});