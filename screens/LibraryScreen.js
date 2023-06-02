import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import LibraryItem from "../components/LibraryItem";
import { Colors } from "../constants/Colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LibraryScreen() {
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/333873428_1950680761935619_7204012638326863531_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WiJT0B_vpckAX9N2SUN&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBG2tlqVmZNH_pNCes17OFy3Wi113jM9URnP2U0jr7deA&oe=647BCD00'}
            />
            <LibraryItem 
            barberName={'Hiệp'} 
            barberImage={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/130242922_3428356397217425_17754825496431605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ZOWu2WMzHckAX-j9pM5&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBwbr6jJtVNF8qxGW7X1DG4x9b6dp9iQdE-DVdtSLNGlA&oe=649E4D0C'} 
            imageUrl={'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/333843897_708397124299774_2668316619979195090_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=bxxPFXYgpsQAX_Aty71&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDzM1OiRK3v0ZDTSlZtAJAWJT5XmSHuAZELs5BdelzSIQ&oe=647C1473'}
            />
            <LibraryItem 
            barberName={'Hiệp'} 
            barberImage={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/130242922_3428356397217425_17754825496431605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ZOWu2WMzHckAX-j9pM5&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBwbr6jJtVNF8qxGW7X1DG4x9b6dp9iQdE-DVdtSLNGlA&oe=649E4D0C'} 
            imageUrl={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/333890537_712776633637868_1206953940829685305_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TKD3SZaV7ewAX9YMw_N&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCqEEuEpvUwup5LTcE4awrqpLHFuRFLiNaGFT33AZSiCQ&oe=647B2562'}
            />
            <LibraryItem 
            barberName={'Hiệp'} 
            barberImage={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/130242922_3428356397217425_17754825496431605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ZOWu2WMzHckAX-j9pM5&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBwbr6jJtVNF8qxGW7X1DG4x9b6dp9iQdE-DVdtSLNGlA&oe=649E4D0C'} 
            imageUrl={'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/334233240_5971959322841110_7060330524177261264_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=JJlolssVA0QAX_BPNZD&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfA6qe-VFUlrEa58zK49Mz7GPBoBxTqZ1plEazBKoG-Uag&oe=647B8879'}
            />
            <LibraryItem 
            barberName={'Hiệp'} 
            barberImage={'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/130242922_3428356397217425_17754825496431605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ZOWu2WMzHckAX-j9pM5&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBwbr6jJtVNF8qxGW7X1DG4x9b6dp9iQdE-DVdtSLNGlA&oe=649E4D0C'} 
            imageUrl={'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/334243394_944611409879294_2467136747150626261_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=e3KGqfAArmYAX9T8T6o&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfD8l-WoUwsJuCnKfZKYue-xkb10trdggvpDr5PP1GC28w&oe=647B03CD'}
            />
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/333800196_900840704490137_6178222022291082004_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=k8tbN0i83iAAX97DMrZ&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBVr--zfJsDNPtssDyvPP6v1OX-dtBvXQDmcLKeROIkMg&oe=647E892F'}
            />
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/334205105_1635258060259752_3210984640982722770_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Kim8cmRmJJAAX_K3doh&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDVPn_x4FbYzw32RYRHvNWZTU9T1TN9_RrsMwyx1DC3XQ&oe=647E236D'}
            />
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/334239748_119225401095018_6710446906982336523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=yWlRSmEllP8AX_Yy9PM&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfACFr7Mx7yBVpCAqZhQan3EuLbcHTYHI4qSq66uIbdU-g&oe=647EA078'}
            />
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/333713698_728489358780585_5357062106134467385_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=4W5SIgBekUwAX8FG6fd&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAcNhS8jO_wOGdaANVIaXRBvISyqEfAZsIkzMsyx1j3yA&oe=647E38D5'}
            />
            <LibraryItem 
            barberName={'BOSS'} 
            barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'} 
            imageUrl={'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/334168182_758286465511212_6973186562313153931_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=5k3pEuZ6QS4AX8KXD6O&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDth1Gim0MjGVtzXzmuTGYdbCLiJ0hQV7j3x0Z2oDspUg&oe=647F6746'}
            />
        </ScrollView>

    );
}

export default LibraryScreen;

const styles = StyleSheet.create({
    root:{
        backgroundColor: Colors.primary100,
    },
    container: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    imgContainer: {
        // width: windowWidth
    },
    libraryImg: {
        height: 370,
        resizeMode: 'stretch',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center'
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonIcon: {
        marginHorizontal: 5
    },
    barberInfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barberName: {
        fontFamily: 'josefin-r',
        marginHorizontal: 5
    },
    barberContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#E8AA42',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barberImg: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    containerLike:{
        paddingHorizontal: 4,
        paddingVertical: 4
    },
    likeFont:{
        fontFamily: 'josefin-r',
        fontSize: 14,
        color: '#000000',
        marginHorizontal: 8
    }
})