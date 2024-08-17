import { View, Text } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Button from "@/component/Button";
export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="#000" />
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button
              iconName="add-circle-outline"
              onPress={() => router.push("/Feed/new")}
              title="Add Post"
              style={{ borderWidth: 0 }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
          headerTitle: "Profile",
          headerShown: true
        }}
      />
    </Tabs>
  );
}
