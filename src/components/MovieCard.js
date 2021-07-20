import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import {
  primary,
  white,
  pink,
  gray,
  darkGray,
  blue,
  Yellow,
} from "../../assets/color";
import { Ionicons } from "@expo/vector-icons";
import images from "../../assets/images";
import { getPoster, getLanguage } from "../api/api";

const MovieCard = ({
  title,
  language,
  voteAverage,
  voteCount,
  poster,
  size,
  heartLess,
  onPress,
}) => {
  const [liked, setLiked] = useState(false);
  // const [voteCountValue, setVoteCountValue] = useState(voteCount);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ImageBackground
        style={{ ...styles.container, width: 230 * size, height: 340 * size }}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: getPoster(poster) }}
      >
        <View style={{ ...styles.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={images.IMDB}
            resizeMode="cover"
            style={{ ...styles.imdbImage, height: 20 * size, width: 50 * size }}
          />
          <Text
            style={{
              ...styles.imdbRating,
              marginVertical: 5 * size,
              fontSize: 14 * size,
            }}
          >
            {voteAverage}
          </Text>
        </View>
        {!heartLess ? (
          <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={30 * size}
              color={liked ? pink : white}
              style={{ position: "absolute", bottom: 10, left: 10 }}
            />
          </TouchableNativeFeedback>
        ) : null}
      </ImageBackground>
      <View>
        <Text
          style={{ ...styles.movieTitle, width: 230 * size }}
          numberOfLines={3}
        >
          {title}
        </Text>
        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>
            {getLanguage(language).english_name}
          </Text>
          <View style={styles.rowAndCenter}>
            <Ionicons
              name="heart"
              size={20 * size}
              color={pink}
              style={{ marginRight: 4 }}
            />
            <Text style={styles.movieSubTitle}>{voteCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

MovieCard.defaultProps = {
  size: 1,
  heartLess: true,
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 12,
  },
  movieTitle: {
    color: blue,
    fontWeight: "bold",
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieSubTitle: {
    fontSize: 13,
    color: darkGray,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: Yellow,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginHorizontal: 5,
    color: pink,
    fontWeight: "bold",
  },
});
