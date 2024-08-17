import Button from "@/component/Button";
import ImageList from "@/component/ImageList";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

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
  },
  {
    id: "7",
    title: "Seventh Item"
  },
  {
    id: "8",
    title: "Eighth Item"
  },
  {
    id: "9",
    title: "Ninth Item"
  },
  {
    id: "10",
    title: "Tenth Item"
  },
  {
    id: "11",
    title: "Eleventh Item"
  },
  {
    id: "12",
    title: "Twelveth Item"
  },
  {
    id: "13",
    title: "Twelveth Item"
  },
  {
    id: "14",
    title: "Twelveth Item"
  },
  {
    id: "15",
    title: "Twelveth Item"
  }
];

export default function Page() {
  const navigation = useNavigation();
  const onPressEditProfile = () => {
    router.push("/Profile/123");
  };
  console.log(navigation);
  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: true
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>Morrison, IL, United States</Text>
        </View>
      </View>
      <View style={styles.userInfoWrapper}>
        <View>
          <Text style={styles.heading}>Posts</Text>
          <Text style={styles.value}>123</Text>
        </View>
        <View>
          <Text style={styles.heading}>Following</Text>
          <Text style={styles.value}>52</Text>
        </View>
        <View>
          <Text style={styles.heading}>Followers</Text>
          <Text style={styles.value}>53</Text>
        </View>
        <View style={styles.socials}>
          <Button
            iconName="share-social"
            onPress={() => {}}
            title="Share"
            style={{ fontSize: 12 }}
          />
          <Button iconName="pencil" onPress={onPressEditProfile} title="Edit" />
        </View>
      </View>
      <View style={styles.imageList}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={DATA}
          renderItem={({ item }) => <ImageList item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 20
  },
  userImg: {
    borderRadius: 40
  },
  userDetailsWrapper: {
    flex: 1,
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
  },
  heading: {
    fontSize: 12
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  socials: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  imageList: {
    // flex: 1
  }
});
