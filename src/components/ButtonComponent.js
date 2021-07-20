import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { primary, white } from "../../assets/color";

const { height, width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const ButtonComponent = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: active ? primary : white }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}
    >
      <Text style={{ ...styles.genreText, color: active ? white : primary }}>
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    // paddingVertical: 2,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 15,
    color: "#696969",
  },
});
