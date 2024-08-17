import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput
} from "react-native";
import { useLocalSearchParams, useNavigation, Stack } from "expo-router";
import { useEffect, useState } from "react";
import Button from "@/component/Button";

const Edit = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  useEffect(() => {
    //   navigation.setOptions({ title: "asd", headerShown: true });
    // navigation.getParent()?.setOptions({
    //   headerShown: false
    // });
  }, [navigation]);

  return (
    <SafeAreaView>
      {/* <Stack.Screen
        options={{
          title: "My home",
          // headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerShown: true
        }}
      /> */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text>First Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value="John"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value="Doe"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value="john@email.com"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Button
          iconName="save"
          onPress={() => {}}
          title="Save"
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20
  },
  userImg: {
    borderRadius: 40
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  },
  fieldContainer: {
    padding: 10
  }
});
