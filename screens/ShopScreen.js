import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import ShopItem from "../components/ShopItem";

function ShopScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <View style={styles.innerContainer}>
                <View style={styles.shopItem}>
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/thiet_ke_chua_co_ten__7__e1fe97ad45234f6283de22241ae1751e_grande.png'}
                        title={'Ace High High Noon Pomade'}
                        price={480000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/black-cat-2_e724c6225e574e3daf8b95db1ecd9f6f_large.jpg'}
                        title={'Ace High Black Cat Pomade'}
                        price={390000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_hanz_de_fuko_gravity_paste_7c0bedaa40ae4a90953afbb22a6e5872_large.jpg'}
                        title={'Hanz De Fuko Gravity Paste'}
                        price={580000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_napla_nature_balm_2_copy_f796c182cf314f7ebe803efda74ed10d_large.jpg'}
                        title={'Napla Natural Balm'}
                        price={480000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/z3879561753113_ef1ceea1ca4fd0a15d2fe2278766d0d4_5e44b4d5105f4f89a65d4ce65c4f8735_large.jpg'}
                        title={'Arcadian Clay Pomade Vanilla Cedar'}
                        price={460000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_js_sloane_matte_creme_f92dbb929c474211b9d1fe41dc0c441a_grande.jpg'}
                        title={'JS Sloane Matte Creme'}
                        price={460000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/z3757975392685_ad2b6682af8ea1167b993a22d57e63ec__1__2a0c37751e1b464284e096492a359c7c_grande.jpg'}
                        title={'Gonzo Creme Dry Matte Clay'}
                        price={390000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_schmiere_poker_strong_189ac47a2b9f4bf183698d5258a6e7fe_grande.jpg'}
                        title={'Schmiere Poker Strong'}
                        price={430000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_suavecito_matte_pomade_4a590d211e764c2c97517d53f0fe7ec1_grande.jpg'}
                        title={'Suavecito Matte Pomade'}
                        price={350000}
                    />
                    <ShopItem imageUrl={'https://product.hstatic.net/200000362771/product/web_lockhart_s_unorthodox_goon_grease_water_based_pomade_8f2adf93d5d248a0adced845b38219b2_grande.jpg'}
                        title={'Lockharts Goon Grease Unorthodox Water Based'}
                        price={440000}
                    />
                </View>
            </View>
        </ScrollView>

    );
}

export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary100,
      
    },
    innerContainer:{
        marginBottom: 30,
    },
    shopItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        
    }
})