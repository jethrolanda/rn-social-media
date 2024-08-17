import { View, Text } from "react-native";
import { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";

export default function _layout() {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.setOptions({ title: "asd", headerShown: false });
  //   navigation.getParent()?.setOptions({
  //     headerShown: false
  //   });
  // }, [navigation]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
