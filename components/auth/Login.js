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
import RegisterScreen from "./Register";

import firebase from "firebase/app";
require("firebase/auth");

// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
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
          <Text style={styles.welcome}>Welcome to KAAG,</Text>
          <Text style={styles.subtitle}>Sign in to continue!</Text>
        </View>
        <View style={styles.loginGroup}>
          <Text style={styles.textGrey}>Email</Text>
          <TextInput
            placeholder = "Email" 
            onChangeText={(email) => this.setState({ email })}
            style={styles.input}
          />
          <Text style={styles.textGrey}>Password</Text>
          <TextInput
            placeholder = "Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
          />
        </View>
        <View style={styles.miniGroup}>
          <Text style={styles.textMini}>Forgot password?</Text>
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
        <View style={styles.signInGroup}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>
              I'm a new user. <Text style={styles.textSignUp}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// export function Landing({ navigation }) {
//   return (

//   );
// }

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 100,
    left: 40,
  },
  loginGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 100,
    left: 30,
  },
  miniGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 200,
    left: 240,
  },
  signInGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 300,
    left: 110,
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
    top: 225,
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
    top: 240,
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
    height: 50,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
