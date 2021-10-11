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
import Svg, {Path, G, Rect, Polygon, Title} from 'react-native-svg';
import RegisterScreen from "./Register";

import firebase from "firebase/app";
import Register from "./Register";
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
          <View style={styles.bottom}>
              <Text style={styles.welcome}>Welcome to KAAG,</Text>
              <Text style={styles.subtitle}>Sign in to continue!</Text>
          </View>
          <View style={styles.loginGroup}>
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
               <Text style={styles.textMini}>Forgot password?</Text>
           </View>
           
           <Pressable style={styles.button} onPress={() => this.onSignUp()}>
              <Text style={styles.text}>Login</Text>
           </Pressable>
           <Pressable style={styles.buttonGoogle} onPress={() => this.onSignUp()}>
                  <Svg id="search" xmlns="http://www.w3.org/2000/svg" width="22.845" height="22.845" viewBox="0 0 22.845 22.845">
                    <Path id="Path_382" data-name="Path 382" d="M5.063,145.9l-.8,2.969-2.906.061a11.442,11.442,0,0,1-.084-10.666h0l2.588.474L5,141.314a6.817,6.817,0,0,0,.064,4.59Z" transform="translate(0 -132.099)" fill="#fbbb00"/>
                    <Path id="Path_383" data-name="Path 383" d="M272.6,208.176a11.418,11.418,0,0,1-4.072,11.041h0l-3.259-.166-.461-2.879a6.808,6.808,0,0,0,2.929-3.476h-6.108v-4.519H272.6Z" transform="translate(-249.954 -198.887)" fill="#518ef8"/>
                    <Path id="Path_384" data-name="Path 384" d="M47.72,315.933h0a11.426,11.426,0,0,1-17.212-3.495l3.7-3.03A6.793,6.793,0,0,0,44,312.887Z" transform="translate(-29.148 -295.604)" fill="#28b446"/>
                    <Path id="Path_385" data-name="Path 385" d="M46.06,2.63l-3.7,3.029A6.792,6.792,0,0,0,32.346,9.216L28.625,6.169h0A11.425,11.425,0,0,1,46.06,2.63Z" transform="translate(-27.347)" fill="#f14336"/>
                  </Svg>
            <Text style={styles.textGoogle}> 
                
                    Connect with Google </Text>
         </Pressable>
         <View style={styles.signInGroup}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>
                I'm a new user. <Text style={styles.textSignUp}>Sign Up</Text>
             </Text>
           </TouchableOpacity>
         </View>
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
    //flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 70,
    left: 40,
  },
  bottom: {
    
    bottom: 20,
    marginBottom: 45,
  },
  loginGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 100,
    //left: 30,
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
    //alignItems:"center",
    alignContent: "center",
    justifyContent: "center",
    top:150,
    //top: 300,
    left: 80,
  },
  welcome: {
    // flex: 1,
    // left: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    // flex: 1,
    // left: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "grey",
  },
  button: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "80%",
    backgroundColor: "#8E2835",
    top: 130,
  },
  buttonGoogle: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "80%",
    backgroundColor: "#dadada",
    top: 140,
    
  },
  text: {
    alignSelf: "center",
    fontSize:18,
    
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
    paddingLeft:40,
    paddingTop:15,
    fontSize: 18,
    
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    position:"absolute",
    
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
    //fontWeight: "bold",
    //left: 50,
  },
  textMini: {
    fontSize: 12,
    color: "gray",
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
    marginTop: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 10,
  },
});
