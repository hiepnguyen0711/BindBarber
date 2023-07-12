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
import AppLoading from 'expo-app-loading';
import TestFirebase from './screens/TestFirebase';
import LoginScreen from './screens/LoginScreen';
import SigupScreen from './screens/SigupScreen';
import { useState, useLayoutEffect, useEffect } from 'react';
import TestAsyncStorage from './screens/TestAsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountSetting from './screens/AccountSettings';
import { Colors } from './constants/Colors';
import ChangeUserNameScreen from './screens/ChangeUserNameScreen';
import ChangePhoneScreen from './screens/ChangePhoneScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import BookScheduleScreen from './screens/BookScheduleScreen';
import OrderPlacedScreen from './screens/OrderPlacedScreen';
import SavedListScreen from './screens/SavedListScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import PostAdminScreen from './screens/PostAdminScreen';
import PostAdminFormScreen from './screens/PostAdminFormScreen';
import { Provider } from 'react-redux'
import { store } from './store/redux/store';
import AdminBookScheduleScreen from './screens/AdminBookScheduleScreen';
import ProductScreen from './screens/ProductScreen';
import PostProductScreen from './screens/PostProductScreen';
import CartScreen from './screens/CartScreen';
import { LogBox } from 'react-native';
import ManagerOrderScreen from './screens/ManagerOrderScreen';
import ManagerServiceScreen from './screens/ManagerServiceScreen';
import ManagerMemberScreen from './screens/ManagerMemberScreen';
import NotificationScreen from './screens/NotificationScreen';
import HairCutScreen from './screens/HairCutScreen';
import CurlingScreen from './screens/CurlingScreen';
import HairDyingScreen from './screens/HairDyingScreen';
import PressedSideScreen from './screens/PressedSideScreen';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


function BottomTabNavigator() {
  const [checkLogin, setLogin] = useState();
  useLayoutEffect(() => {
    
    const checkLogged = async () => {
      try {
        const response = await AsyncStorage.getItem('isLogged');
      
        if (response == 1) {
          setLogin(true);
        } else {
          setLogin(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    checkLogged();
  }, [checkLogin]);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E8AA42',
          borderBottomWidth: 2,
          borderBottomColor: '#000000',
        },
        headerTintColor: '#F8F1F1',
        headerTitleStyle: {
          fontFamily: "josefin-b",
          fontWeight: "500",
          fontSize: 20,
        },
        tabBarStyle: { backgroundColor: '#E8AA42' },
        tabBarActiveTintColor: '#025464',
        tabBarInactiveTintColor: '#F8F1F1',
        tabBarLabelStyle: {
          fontFamily: 'josefin-r',
        },
      }}

    >
      <BottomTab.Screen name="home" component={CategoryScreen} options={{
        title: 'Bind Barber',
        tabBarIcon: ({ color, size }) => <Ionicons name="ios-cut" size={size} color={color} />,
        tabBarLabel: 'Trang chủ',
        headerShown: false

      }} />
      <BottomTab.Screen name="library" component={LibraryScreen} options={{
        title: 'Khách Hàng',
        tabBarIcon: ({ color, size }) => <Ionicons name="logo-instagram" size={size} color={color} />,
        tabBarLabel: 'Ảnh Khách Hàng'
      }} />
      <BottomTab.Screen name="book" component={BookScreen} options={{
        title: 'Đặt lịch',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
      }} />
      <BottomTab.Screen name="shop" component={ShopScreen} options={{
        title: 'Cửa hàng Wax',
        tabBarIcon: ({ color, size }) => <Ionicons name="ios-basket" size={size} color={color} />,
        tabBarLabel: 'Cửa hàng'
      }} />
      <BottomTab.Screen name="account"
        component={checkLogin ? AccountScreen : LoginScreen}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-person-circle-sharp" size={size} color={color} />
        }} />
      
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
    'pacifico': require('./assets/fonts/pacifico.ttf'),
    'chakra-b': require('./assets/fonts/chakra-b.ttf'),
    'chakra-m': require('./assets/fonts/chakra-m.ttf'),
    'chakra-r': require('./assets/fonts/chakra-r.ttf')
  });
  
  if (!fontLoaded) {
    return <AppLoading />;
  }
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary300,
            },
            headerTintColor: Colors.primary400,
            headerTitleStyle: {
              fontFamily: 'chakra-b',
            }
          }} >
            <Stack.Screen name="bottomtab" component={BottomTabNavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name="login" component={LoginScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name="sigup" component={SigupScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name="accountsettings" component={AccountSetting} options={{
              title: 'Thiết lập tài khoản',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="changeusername" component={ChangeUserNameScreen} options={{
              title: 'Đổi tên tài khoản',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="changephone" component={ChangePhoneScreen} options={{
              title: 'Đổi số điện thoại',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="changepassword" component={ChangePasswordScreen} options={{
              title: 'Đổi mật khẩu',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="bookschedule" component={BookScheduleScreen} options={{
              title: 'Lịch đã đặt',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="orderplaced" component={OrderPlacedScreen} options={{
              title: 'Đơn hàng đã đặt',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="savedlist" component={SavedListScreen} options={{
              title: 'Tóc đã lưu',
              headerBackTitleVisible: false
            }} />
            <Stack.Screen name="admindashboard" component={AdminDashboardScreen} options={{
              title: 'Bảng điều khiển của Administator',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="postadmin" component={PostAdminScreen} options={{
              title: 'Quản lý bài viết',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="postadminform" component={PostAdminFormScreen} options={{
              title: 'Đăng bài viết',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="managerbooked" component={AdminBookScheduleScreen} options={{
              title: 'Quản lý Đặt Lịch',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="managerproduct" component={ProductScreen} options={{
              title: 'Quản lý sản phẩm',
              headerBackTitleVisible: false,
            }} />
             <Stack.Screen name="postproduct" component={PostProductScreen} options={{
              title: 'Đăng sản phẩm',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="cart" component={CartScreen} options={{
              title: 'Giỏ hàng',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="managerorder" component={ManagerOrderScreen} options={{
              title: 'Quản Lí Đơn Hàng',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="managerservice" component={ManagerServiceScreen} options={{
              title: 'Quản Lí Dịch Vụ',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="managermember" component={ManagerMemberScreen} options={{
              title: 'Quản lý thành viên',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="postnotification" component={NotificationScreen} options={{
              title: 'Gửi thông báo',
              headerBackTitleVisible: false,
            }} />
            <Stack.Screen name="haircut" component={HairCutScreen} options={{
              title: 'Cắt tóc',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="bookscreen" component={BookScreen} options={{
              title: 'Đặt lịch',
              headerBackTitleVisible: false,
              // headerShown: false
            }} />
            <Stack.Screen name="curling" component={CurlingScreen} options={{
              title: 'Đặt lịch',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="hairdying" component={HairDyingScreen} options={{
              title: 'Nhuộm Tóc',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="pressedside" component={PressedSideScreen} options={{
              title: 'Ép Side',
              headerBackTitleVisible: false,
              headerShown: false
            }} />
            <Stack.Screen name="shopscreen" component={ShopScreen} options={{
              title: 'Cửa hàng',
              headerBackTitleVisible: false,
              // headerShown: false
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

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
