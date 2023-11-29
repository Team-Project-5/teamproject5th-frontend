import { Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Login from "../screens/Login";
import Scrape from "../screens/Scrape";
import FindrouteMain from "../screens/FindrouteMain";
import FindrouteResult from "../screens/FindrouteResult";
import HotStation from "../screens/HotStation";
import Profile from "../screens/Profile";
import Board from "../screens/Board";
import Post from "../screens/Post";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="home"
              size={25}
              style={{ color: focused ? "skyblue" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="스크랩"
        component={Scrape}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="circle-o-notch"
              size={25}
              style={{ color: focused ? "skyblue" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="길찾기"
        component={FindrouteMain}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="subway"
              size={25}
              style={{ color: focused ? "skyblue" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="실시간인기역"
        component={HotStation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="fire"
              size={25}
              style={{ color: focused ? "skyblue" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="내정보"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="person"
              size={25}
              style={{ color: focused ? "skyblue" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RouteResult"
        component={FindrouteResult}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Board"
        component={Board}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
