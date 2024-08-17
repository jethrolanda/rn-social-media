import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList
} from "react-native";
import React from "react";
import FeedList from "@/component/FeedList";

const DATA = [
  {
    id: "1",
    title: "First Item"
  },
  {
    id: "2",
    title: "Second Item"
  },
  {
    id: "3",
    title: "Third Item"
  },
  {
    id: "4",
    title: "Fourth Item"
  },
  {
    id: "5",
    title: "Fifth Item"
  },
  {
    id: "6",
    title: "Sixth Item"
  }
];

export default function Page() {
  return (
    // <View style={styles.container}>
    //   <FeedList />
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FeedList item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
