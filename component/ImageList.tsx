import { StyleSheet, Image, View } from "react-native";
import React from "react";

const ImageList = ({ item }: any) => {
  return (
    <View style={styles.coverImgContainer}>
      <Image
        source={{ uri: `https://picsum.photos/200/300?random=${item.id}` }}
        style={styles.coverImg}
      />
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  coverImgContainer: {
    flex: 1,
    padding: 2,
    backgroundColor: "white",
    paddingVertical: 2,
    alignItems: "center"
  },
  coverImg: {
    // flex: 1,
    width: "100%",
    height: 250
  }
});
