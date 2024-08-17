import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  TextStyle
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TButton = {
  onPress: () => void;
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<TextStyle>;
};
export default function Button(props: TButton) {
  const { onPress, title, iconName, style } = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={iconName} size={16} color="black" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 4,
    // backgroundColor: "black",
    borderWidth: 1,
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black"
  }
});
