import { StyleSheet, Text, View } from "react-native";
import BarberItem from "./barberItem";

function SelectBarberItem() {
    return (
        <View>
            <View>
                <Text style={styles.barberTitle}>
                    Barber
                </Text>
            </View>
            <View style={styles.barberGroup}>
                    <BarberItem 
                    imageUrl={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCVbDShzHzuw3kjCFyKJCwdIkLzLZrvGDoj5oYoIev-ig&oe=649FA519'} 
                    barberName={'BOSS'}
                    color={'red'}
                    />
                    {/* barber 2 */}
                    <BarberItem 
                    imageUrl={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/130242922_3428356397217425_17754825496431605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ZOWu2WMzHckAX-j9pM5&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfDdDru6DIoyVk6wUz4WqnF6uO5joxm2kI9jyomggOeK5Q&oe=649F9E8C'} 
                    barberName={'Hiệp'}
                    color={'white'}
                    />
                    {/* barber 3 */}
                    <BarberItem 
                    imageUrl={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/80620817_2569011343216010_2423870651832991744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=19VdIot49HMAX9scV1-&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDC-mRPNekkp7dP_0jZUFo297o4DD09VsmpBGSIQayc-w&oe=649FB58D'} 
                    barberName={'Hùng'}
                    color={'white'}
                    />
            </View>
        </View>
    );
}
export default SelectBarberItem;

const styles = StyleSheet.create({
    barberTitle: {
        fontFamily: 'chakra-b',
        fontSize: 28,
        textTransform: 'uppercase',
        color: '#E57C23'
    },
    barberGroup:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8
    }
})