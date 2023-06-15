import { ScrollView, View, StyleSheet } from "react-native";
import LibraryItem from "../components/LibraryItem";
import { Colors } from '../constants/Colors';

function SavedListScreen() {
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <LibraryItem
                barberName={'BOSS'}
                barberImage={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/39258895_1413699528773919_6219279194849804288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=H8D1WzJSH24AX_6bOZW&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBag4V62KLhZuX0kusSxKE7ThAfvn6SFKXXW7-D2LtPMw&oe=649E5399'}
                imageUrl={'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/333873428_1950680761935619_7204012638326863531_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WiJT0B_vpckAX9N2SUN&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBG2tlqVmZNH_pNCes17OFy3Wi113jM9URnP2U0jr7deA&oe=647BCD00'}
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
export default SavedListScreen;
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary100,
    },

})