import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { darkGray } from "../../assets/color";
import { getPoster } from "../api/api";

import { EvilIcons } from "@expo/vector-icons";
import images from "../../assets/images";

const CastCard = ({ originalName, image, characterName }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: getPoster(image) } : images.IMDB}
        resizeMode={image ? "cover" : "contain"}
        style={styles.image}
      />
      <Text style={styles.originalName}>{originalName}</Text>
      <Text style={styles.characterName}>{characterName}</Text>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 80,
    borderRadius: 10,
  },
  originalName: {
    width: 80,
    fontSize: 12,
  },
  characterName: {
    width: 80,
    fontSize: 10,
    color: darkGray,
  },
});
