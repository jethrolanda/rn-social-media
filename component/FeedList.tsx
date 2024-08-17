import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const FeedList = ({ item }: { item: any }) => {
  const onPress = () => {
    router.push("/Profile");
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.profileContainer}>
        {/* <View> */}
        <Pressable onPress={onPress} style={styles.userProfile}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
            style={styles.userImg}
            width={50}
            height={50}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>John Doe</Text>
            <Text style={styles.datePosted}>Yesterday at 10 PM</Text>
          </View>
        </Pressable>
        {/* </View> */}
        <View>
          <Ionicons name="ellipsis-vertical" size={16} color="black" />
        </View>
      </View>
      <View style={styles.coverImgContainer}>
        <Image
          source={{ uri: `https://picsum.photos/200/300?random=${item.id}` }}
          style={styles.coverImg}
        />
      </View>
      <View style={styles.reactions}>
        <View>
          <Ionicons name="heart-outline" size={30} color="black" />
        </View>
        <View>
          <Ionicons name="chatbubble-outline" size={28} color="black" />
        </View>
        <View>
          <Ionicons name="paper-plane-outline" size={30} color="black" />
        </View>
      </View>
      <View style={styles.descriptions}>
        <Text style={styles.title}>John Doe</Text>
        <Text>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog.
        </Text>
      </View>
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 20
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  userProfile: {
    flexDirection: "row"
  },
  infoContainer: {
    marginLeft: 20
  },
  profile: {},
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  datePosted: {},
  userImg: {
    borderRadius: 40
  },
  coverImgContainer: {
    // flex: 1
  },
  coverImg: {
    width: "100%",
    height: 200
  },
  reactions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginHorizontal: 10
  },
  descriptions: {
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
    marginHorizontal: 10
  }
});
