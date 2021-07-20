import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import ButtonComponent from "../components/ButtonComponent";
import { primary, lightGreen } from "../../assets/color";
import ItemSeparator from "../components/ItemSeparator";
import MovieCard from "../components/MovieCard";

import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
} from "../api/api";

const Generes = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Romance",
  "Horror",
  "Sci-fi",
];

const MovieList = ({ navigation }) => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [genres, setGenres] = useState([{ id: 10110, name: "All" }]);

  useEffect(() => {
    getNowPlayingMovies().then((res) => setNowPlayingMovies(res.data));
    getUpcomingMovies().then((res) => setUpcomingMovies(res.data));
    getAllGenres().then((res) => setGenres([...genres, ...res.data.genres]));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Fav Movie</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => {
            return (
              <ButtonComponent
                active={item.name === activeGenre ? true : false}
                genreName={item.name}
                onPress={setActiveGenre}
              />
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                voteAverage={item.vote_average}
                voteCount={item.vote_count}
                poster={item.poster_path}
                heartLess={false}
                onPress={() =>
                  navigation.navigate("MovieDetails", { movieId: item.id })
                }
              />
            );
          }}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Upcoming Movies</Text>
      </View>
      <View>
        <FlatList
          data={upcomingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                voteAverage={item.vote_average}
                voteCount={item.vote_count}
                poster={item.poster_path}
                size={0.7}
                onPress={() =>
                  navigation.navigate("MovieDetails", { movieId: item.id })
                }
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  headerSubTitle: {
    fontSize: 16,
    color: primary,
  },
});
