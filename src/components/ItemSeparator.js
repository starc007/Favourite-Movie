import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemSeparator = ({ height, width }) => {
  return <View style={{ height, width }} />;
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeparator;


