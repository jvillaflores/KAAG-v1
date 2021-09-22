import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <View style={styles.banner}>
          <Text style={styles.welcome}>Create Account,</Text>
          <Text style={styles.subtitle}>Sign up to get started!</Text>
        </View>
        <View style={styles.loginGroup}>
          <Text style={styles.textGrey}>Name</Text>
          <TextInput
            onChangeText={(name) => this.setState({ name })}
            style={styles.input}
          />
          <Text style={styles.textGrey}>Email</Text>
          <TextInput
            onChangeText={(email) => this.setState({ email })}
            style={styles.input}
          />
          <Text style={styles.textGrey}>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
          />
        </View>
        <Pressable style={styles.button} onPress={() => this.onSignUp()}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.buttonGoogle} onPress={() => this.onSignUp()}>
          <Text style={styles.textGoogle}>
            <Image
              style={styles.logo}
              source={require("../../assets/Google.svg")}
            />
            Connect with Google
          </Text>
        </Pressable>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
            style={styles.signInGroup}
          >
            <Text>
              I'm already a member{" "}
              <Text style={styles.textSignUp}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    top: 100,
    left: 40,
  },
  loginGroup: {
    flex: 1,
    top: 150,
    left: 30,
  },
  signInGroup: {
    flex: 1,

    top: 275,
    left: 90,
  },
  welcome: {
    flex: 1,
    left: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    flex: 1,
    left: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "grey",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    backgroundColor: "#8E2835",
    top: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonGoogle: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    backgroundColor: "#dadada",
    top: 215,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "black",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  logo: {
    width: 16,
    height: 16,
    right: 10,
  },
  textGoogle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
    fontWeight: "bold",
    left: 50,
  },
  textMini: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    left: 200,
  },
  textSignUp: {
    fontSize: 14,
    color: "#8E2835",
    fontWeight: "bold",
    left: 200,
  },
  input: {
    height: 45,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
