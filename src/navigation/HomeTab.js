import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "./../screens/NotificationScreen";
import { AuthContext } from "../provider/AuthProvider";


const HomeTab = createMaterialBottomTabNavigator();


const HomeTabScreen = () => {
  return (
    <AuthContext.Consumer>
        {(auth) => (
    <HomeTab.Navigator initialRouteName="Home" activeColor="white"
    barStyle={{ backgroundColor: '#873FB2' }}>
      <HomeTab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" color="white" size={26} />
            ) : (
              <AntDesign name="home" color="white" size={22} />
            ),
          
        }}
      />
      <HomeTab.Screen
        name="Notification"
        //component={()=><NotificationScreen currentUser={auth.CurrentUser} />}
        children={()=><NotificationScreen currentUser={auth.CurrentUser} />}
        options={{
           tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color="white"
              />
            ),
        }}
      />
    </HomeTab.Navigator> 
    )}
    </AuthContext.Consumer>
  );
};

export default HomeTabScreen;