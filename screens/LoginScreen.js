import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Image } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const unsuscribe = useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("sndjnfds: ", authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsuscribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("authUser: ", auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/2048px-Signal-Logo.svg.png",
        }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
