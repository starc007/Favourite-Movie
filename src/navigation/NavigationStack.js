import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";



import {
  MoviesStackScreen,
  SearchStackScreen,
  FavouriteStackScreen,
} from "./Screens";
import { ROUTES, TABS } from "./Routes";

import { darkBlue, white, pink, blue, primary } from "../../assets/color";

enableScreens();

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTES.MOVIE_LIST}
        activeColor={primary}
        barStyle={{ backgroundColor: white }}
      >
        <Tab.Screen
          name={TABS.HOME}
          component={MoviesStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={TABS.SEARCH}
          component={SearchStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={TABS.Favourite}
          component={FavouriteStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
