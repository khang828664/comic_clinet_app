import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
import Register from 'app/screens/Register'
import Home from 'app/screens/Home';
import ComicInfo from 'app/screens/ComicInfo'
import UserInfo from 'app/screens/UserInfo'
import Bookmark from 'app/screens/Bookmark'
import History from 'app/screens/History'
import ComicCreate from 'app/screens/CreateComic'
import UpdateComic from 'app/screens/UpdateComicInfo'
import ThemeController from '../components/ThemeController';
import ComicRead from 'app/screens/ComicRead'
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const UserInfoStack = createStackNavigator();
const BottomBar = createMaterialBottomTabNavigator();
const LoginStack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,

};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}
const HomeNavigator = () => (
  <HomeStack.Navigator
    initialRouteName="Home"
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    {/* <HomeStack.Screen name="ComicInfo" component={ComicInfo}
      options={{
        headerShown:false
      }}
    /> */}
  </HomeStack.Navigator>
)
const BookmarkNavigator = () => (
  <BookmarkStack.Navigator
    initialRouteName="Bookmark"
  >
    <BookmarkStack.Screen
      name="Bookmark"
      component={Bookmark}
      options={{ headerShown: false }}
    />
  </BookmarkStack.Navigator>
)
const HistoryNavigator = () => (
  <BookmarkStack.Navigator
    initialRouteName="History"
  >
    <BookmarkStack.Screen
      name="History"
      component={History}
      options={{ headerShown: false }}
    />
  </BookmarkStack.Navigator>
)
const UserInfoNavigator = () => (
  <UserInfoStack.Navigator
    initialRouteName="UserInfo"
  >
    <UserInfoStack.Screen
      name="UserInfo"
      component={UserInfo}
      options={{ headerShown: false }}
    />
    <UserInfoStack.Screen
      name= "CreateComic"
      component={ComicCreate}
      options = {{
        headerShown:true
      }}
    />
     <UserInfoStack.Screen
      name= "UpdateComic"
      component={UpdateComic}
      options = {{
        headerShown:true
      }}
    />
    {/* <BookmarkStack.Screen name="ComicInfo" component={ComicInfo} /> */}
  </UserInfoStack.Navigator>
)
const BottomBarNavigator = () => (
  <BottomBar.Navigator
    initialRouteName="Home"
    activeColor="#e31c25"
    inactiveColor="#f6e1e1"
    barStyle={{
      backgroundColor: '#000'
    }}
  >
    <BottomBar.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }:any) => <Icon name="home" color={color} size={20} solid={true} />
      }}
    ></BottomBar.Screen>
    <BottomBar.Screen
      name="Bookmark" component={BookmarkNavigator}
      options={{
        tabBarLabel: 'Bookmark',
        tabBarIcon: ({ color }:any) => <Icon name="bookmark" color={color} size={20} solid={true} />
      }}
    ></BottomBar.Screen>
    <BottomBar.Screen
      name="History" component={HistoryNavigator}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color }:any ) => <Icon name="clock" color={color} size={20} solid={true} />
      }}
    ></BottomBar.Screen>
    <BottomBar.Screen
      name="UserInfo" component={UserInfoNavigator} options={{
        tabBarLabel: 'UserInfo',
        tabBarIcon: ({ color }:any) => <Icon name="meh" color={color} size={20} solid={true} />
      }}
    ></BottomBar.Screen>
  </BottomBar.Navigator>
)
//Stack All Page Application
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
  >
    <Stack.Screen
      name="Home"
      component={BottomBarNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ComicRead" component={ComicRead} options={{
      headerShown: false
    }}/>
     <Stack.Screen name="ComicInfo" component={ComicInfo} 
      options={{
        headerShown:false
      }}
    />
  </Stack.Navigator>
)
const LoginStackNavigator = () => (
  <LoginStack.Navigator
    initialRouteName="Login"
  >
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false
      }}
    />
    <LoginStack.Screen
      name="Register"
      component={Register}
    />
  </LoginStack.Navigator>
)
const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <>{isLoggedIn ? (
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar barStyle={theme.dark ? 'dark-content' : 'light-content'} />
        <StackNavigator />
      </NavigationContainer>
    ) : (
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar barStyle={theme.dark ? 'dark-content' : 'light-content'} />
        <LoginStackNavigator />
      </NavigationContainer>

    )}
    </>
  );
};
export default App;
