import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationEvents } from "react-navigation";
import { Audio } from "expo-av";

function ApplicationConf({ currentUser, route, navigation }) {
  const downloadAudio = async () => {
    // The rest of this plays the audio
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(item.downloadURL);
      await soundObject.playAsync();
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      
            <View>
                <Text style = {[styles.text, {color: '#8E2835'}]}>username application</Text>
            </View>

            <View style={styles.bodycontainer}>
                <Text style = {[styles.text,{fontSize:16}]}>
                    Resume
                </Text>
                <TouchableOpacity style={[styles.addButton,{height:90}]}>
                    <MaterialCommunityIcons
                        
                        name="file-pdf-box" 
                        size={35} 
                        color='#70707033' />
                    <Text style ={{color:'#B1B1B1', fontSize: 12}}> Tap to view file</Text>
                </TouchableOpacity>

                <Text style = {[styles.text,{fontSize:16}]}>
                    Why should you be our validator? 
                </Text>
                <Text>
                    Note from the applicant.
                </Text>
                <View style={[styles.addButton,{height:200}]}>

                </View>
            </View>

            <View style = {{flexDirection:"row" , justifyContent:"center"}}>
                <Pressable style={[styles.button,{backgroundColor:"#288E4D"}]}>
                    <Text style={[styles.text,{fontSize:16, color:'white'}]}>Accept</Text>
                </Pressable>
                <Pressable
                    style={[styles.button,{backgroundColor:"#BB0000"}]}
                    onPress={() => navigation.navigate("Decline")}
                >
                    <Text style={[styles.text,{fontSize:16, color:'white'}]}>Decline</Text>
                </Pressable>
            </View>



    </ScrollView>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(ApplicationConf);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    top: 1,
    paddingVertical:20,
    paddingHorizontal:20,
    
  },
  text: {
      fontWeight:'bold',
      fontSize: 20,
      
  },
  bodycontainer:{
      paddingVertical:30,
      paddingHorizontal:15,
  },
  addButton:{
      borderColor:"#70707033",
      borderWidth: 1.5,
      marginVertical:10,
      borderRadius:7,
      alignItems:"center",
      justifyContent:"center"
  },
  button:{
      
      paddingVertical:20,
      paddingHorizontal:54,
      marginHorizontal:5,
      borderRadius:5,
  }
  
});
