import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MovieList from "../screens/MovieList";
import FavouriteMovie from "../screens/Favourite";
import MovieDetails from "../screens/MovieDetail";
import Search from "../screens/Search";

import { white, darkBlue } from "../../assets/color";

import { ROUTES, TABS } from "./Routes";

const screenOptions = {
  headerStyle: {
    backgroundColor: white,
  },
  headerTintColor: darkBlue,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const HomeStack = createStackNavigator();
export const MoviesStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ ...screenOptions }}>
    <HomeStack.Screen
      name={ROUTES.MOVIE_LIST}
      component={MovieList}
      options={{
        // title: TABS.HOME,
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name={ROUTES.MOVIE_DETAILS}
      component={MovieDetails}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
export const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={{ ...screenOptions }}>
    <SearchStack.Screen
      name={ROUTES.SEARCH}
      component={Search}
      options={{
        // title: TABS.SEARCH,
        headerShown: false,
      }}
    />
    <SearchStack.Screen
      name={ROUTES.SEARCH_RESULTS}
      component={MovieList}
      options={{ title: "Search results" }}
    />
    <SearchStack.Screen
      name={ROUTES.MOVIE_DETAILS}
      component={MovieDetails}
      options={({ route }) => {
        const { title } = route.params || {};

        return {
          title,
        };
      }}
    />
  </SearchStack.Navigator>
);

const FavouriteStack = createStackNavigator();
export const FavouriteStackScreen = () => (
  <FavouriteStack.Navigator screenOptions={{ ...screenOptions }}>
    <FavouriteStack.Screen
      name={ROUTES.Favourite}
      component={FavouriteMovie}
      options={{
        // title: TABS.Favourite,
        headerShown: false,
      }}
    />
  </FavouriteStack.Navigator>
);
