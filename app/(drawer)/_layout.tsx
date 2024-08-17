import { View, Text, StyleSheet, Image } from "react-native";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useEffect } from "react";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
          {/* Morrison, IL, United States */}
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/Feed" ? "#fff" : "#000"}
          />
        )}
        label={"Feed"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/Feed" ? "#fff" : "#000" }
        ]}
        style={{ backgroundColor: pathname == "/Feed" ? "#333" : "#fff" }}
        onPress={() => router.push("/Feed")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == "/Profile" ? "#fff" : "#000"}
          />
        )}
        label={"Profile"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/Profile" ? "#fff" : "#000" }
        ]}
        style={{ backgroundColor: pathname == "/Profile" ? "#333" : "#fff" }}
        onPress={() => router.push("/Profile")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname == "/Favourites" ? "#fff" : "#000"}
          />
        )}
        label={"Favourites"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/Favourites" ? "#fff" : "#000" }
        ]}
        style={{ backgroundColor: pathname == "/Favourites" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/Favourites");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == "/Settings" ? "#fff" : "#000"}
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/Settings" ? "#fff" : "#000" }
        ]}
        style={{ backgroundColor: pathname == "/Settings" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/Settings");
        }}
      />
    </DrawerContentScrollView>
  );
};
export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Favourites" options={{ headerShown: true }} />
      <Drawer.Screen name="Settings" options={{ headerShown: true }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  userImg: {
    borderRadius: 40
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  userEmail: {
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline"
  }
});
