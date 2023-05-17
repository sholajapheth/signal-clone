import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Avatar } from "@rneui/base";

const ChatScreen = ({ navigation, route }) => {
  const { id, chatName } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",

      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontWeight: "700",
            }}
          >
            {chatName}
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
