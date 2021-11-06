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

function ValidatorApplication({ currentUser, route, navigation }) {
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
      
            <View style={styles.bodycontainer}>
                <View style={{marginVertical:15}}>
                    <View>
                        <Text style = {[styles.text, {color: '#000000'}]}>Be a KAAG Validator</Text>
                    </View>
                    <Text>
                        A KAAG Validator must be from Kagan Tribe, a linguists, speaks Kinagan/ Kagan. He/She will 
                        validate submissions and contributions of different Kinagan words.  
                    </Text>
                </View>

                <View style={{marginVertical:5}}>
                    <Text style = {[styles.text,{fontSize:16}]}>
                        Resume
                    </Text>
                    <TouchableOpacity style={[styles.addButton,{height:90}]} >
                        <MaterialCommunityIcons
                            name="file-pdf-box" 
                            size={35} 
                            color='#70707033' />
                        <Text style ={{color:'#B1B1B1', fontSize: 12}}> Upload Resume File</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style = {[styles.text,{fontSize:16}]}>
                        Why should you be our validator? 
                    </Text>
                    <Text>
                        Explain why do you want to become a KAAG Validator. Share your experiences.
                    </Text>
                    <TextInput style={[styles.addButton,{height:180}]}>

                    </TextInput>
                </View>
                <View style = {{flexDirection:"row", flex:1, justifyContent:"center", marginTop:10}}>
                    <Pressable style={[styles.button,{backgroundColor:"#8E2835"}]}>
                        <Text style={[styles.text,{fontSize:16, color:'white'}]}>Submit Application</Text>
                    </Pressable>
                
                </View>
            </View>

            



    </ScrollView>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(ValidatorApplication);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    top: 1,
    paddingVertical:15,
    paddingHorizontal:20,
    
  },
  text: {
      fontWeight:'bold',
      fontSize: 20,
      letterSpacing:0.5
    
      
  },
  bodycontainer:{
      paddingVertical:5,
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
      flex:1,
      borderRadius:5,
      alignItems:"center",
      paddingVertical:15,
  }
  
});
