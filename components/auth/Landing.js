import React from "react";
import { Text, View, Button, StyleSheet, Pressable, Image } from "react-native";

var logo = require("../../assets/info1.svg");

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={{ width: 300, height: 200 }} />
      </View>
      <View style={styles.header}>
        <Text style={styles.textHead}>Learn Kagan Language</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.textSubHead}>
          Kagan has a native language called Kinagan, which is related to the
          Mandayan Language and Maguindanaon, Tausug, Visayan, and Tagalog
          dialects and was influenced by the Arabic Language. Let us preserve
          native language and be part of team to by contributing what you know.
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.buttonSignUp}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    backgroundColor: "#8E2835",
    top: 125,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonSignUp: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    backgroundColor: "#8E2835",
    top: 135,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: 100,
  },
  header: {
    alignSelf: "center",
    bottom: -45,
  },

  textHead: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  subHeader: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    bottom: -60,
    paddingLeft: 20,
    paddingRight: 20,
  },

  textSubHead: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
});
