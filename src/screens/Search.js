import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=cd93d3c53a9537529e388507ba13cac2&language=en-US&page=1&include_adult=false";

  //   const onChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.txt}>Search</Text>
      <TextInput
        style={styles.txtInput}
        onChangeText={(text) => setQuery(text)}
        placeholder="Enter search text..."
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1 },
  txt: {
    marginVertical: 15,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  txtInput: {
    width: 370,
    height: 50,
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 15,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
