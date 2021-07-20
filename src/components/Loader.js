import React from "react";
import { ActivityIndicator} from "react-native-paper";
import { primary } from "../../assets/color";

const Loader = () => {
  return <ActivityIndicator animating={true} color={primary} />;
};

export default Loader;


