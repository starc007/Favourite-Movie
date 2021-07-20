import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  FlatList,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import ItemSeparator from "../components/ItemSeparator";
import { blue, darkGray, lightGray, pink, white } from "../../assets/color";
import { getMovieByID, getPoster, getVideo, getLanguage } from "../api/api";
import { APPEND_TO_RESPONSE as AR } from "../../assets/urls";
import CastCard from "../components/CastCard";

const { height, width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;
const setHeight = (h) => (height / 100) * h;

const MovieDetail = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByID(movieId, `${AR.VIDEOS},${AR.CREDITS}`).then((res) =>
      setMovie(res?.data)
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(217,217,217,0)"]}
        start={[0, 0.3]}
        style={styles.linerGradient}
      />
      <View style={styles.moviePosterImageContainer}>
        <Image
          style={styles.moviePosterImage}
          resizeMode="cover"
          source={{ uri: getPoster(movie?.backdrop_path) }}
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={35} color={white} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}
      >
        <Ionicons name="play-circle-outline" size={70} color={white} />
      </TouchableOpacity>
      <ItemSeparator height={setHeight(37)} />
      <View style={styles.movieTitleContainer}>
        <Text numberOfLines={2} style={styles.movieTitle}>
          {movie?.original_title}
        </Text>
        <View style={styles.row}>
          <Ionicons name="heart" size={28} color={pink} />
          <Text style={styles.ratingText}> {movie?.vote_average}</Text>
        </View>
      </View>
      <Text style={styles.genreText}>
        {movie?.genres?.map((genre) => genre?.name).join(", ")} |{" "}
        {movie?.runtime} Min
      </Text>
      <Text style={styles.genreText}>
        {getLanguage(movie?.original_language)?.english_name}
      </Text>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{movie?.overview}</Text>
      </View>
      <View>
        <Text style={styles.castTitle}>Cast</Text>
        <FlatList
          data={movie?.credits?.cast}
          keyExtractor={(item) => item?.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <CastCard
              originalName={item?.name}
              characterName={item?.character}
              image={item?.profile_path}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linerGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: "absolute",
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    position: "absolute",
    right: 0,
    left: 20,
    top: 50,
    elevation: 20,
  },
  playButton: {
    position: "absolute",
    top: 110,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  movieTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: blue,
    width: setWidth(60),
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  genreText: {
    color: darkGray,
    paddingHorizontal: 20,
    paddingTop: 5,
    fontSize: 13,
  },
  overviewContainer: {
    backgroundColor: lightGray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  overviewText: {
    color: darkGray,
    fontSize: 14,
    textAlign: "justify",
    paddingVertical: 5,
  },
  castTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
