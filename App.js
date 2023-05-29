import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';
import ShopScreen from './screens/ShopScreen';
import AccountScreen from './screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#025464',
        borderBottomWidth: 2, 
        borderBottomColor: '#E8AA42',
      },
      headerTintColor: '#F8F1F1',
      headerTitleStyle: {
        fontFamily: "josefin-b",
        fontWeight: "500",
        fontSize: 20,
        
      }
    }} >
      <BottomTab.Screen name="home" component={CategoryScreen} options={{
        title: 'Bind Barber',
        tabBarIcon: ({color,size}) => <Ionicons name="ios-cut" size={size} color={color} />,
        tabBarLabel: 'Trang chủ',
        
      }} />
      <BottomTab.Screen name="library" component={LibraryScreen} options={{
        title: 'Khách Hàng',
        tabBarIcon: ({color, size}) => <Ionicons name="logo-instagram" size={size} color={color} />,
        tabBarLabel: 'Ảnh Khách Hàng'
      }} />
      <BottomTab.Screen name="book" component={BookScreen} options={{
        title: 'Đặt lịch',
        tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color} />
      }} />
      <BottomTab.Screen name="shop" component={ShopScreen} options={{
        title: 'Cửa hàng Wax',
        tabBarIcon: ({color, size}) => <Ionicons name="ios-basket" size={size} color={color} />,
        tabBarLabel: 'Cửa hàng'
      }} />
      <BottomTab.Screen name="account" component={AccountScreen} options={{
        title: 'Tài Khoản',
        tabBarIcon: ({color, size}) => <Ionicons name="ios-person-circle-sharp" size={size} color={color} />
      }}  />
    </BottomTab.Navigator>
  );
}

export default function App() {
  const [fontLoaded] = useFonts({
    'dancing-b': require('./assets/fonts/dancing-b.ttf'),
    'dancing-m': require('./assets/fonts/dancing-m.ttf'),
    'dancing-r': require('./assets/fonts/dancing-r.ttf'),
    'josefin-b': require('./assets/fonts/josefin-b.ttf'),
    'josefin-m': require('./assets/fonts/josefin-m.ttf'),
    'josefin-r': require('./assets/fonts/josefin-r.ttf'),
    'pacifico': require('./assets/fonts/pacifico.ttf')
  })
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="bottomtab" component={BottomTabNavigator} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
