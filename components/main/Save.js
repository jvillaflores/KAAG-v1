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
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { FloatingLabelInput } from 'react-native-floating-label-input';

function Save({ currentUser, route, navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const uploadImage = async () => {
    const uri = route.params.image;
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;
    console.log(childPath);
    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        saveAllPostData(snapshot);
        console.log(snapshot);
      });
    };

    const taskError = (snapshot) => {
      console.log(snapshot);
    };

    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        title,
        description,
        tags,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };
  const saveAllPostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("postsAll")
      .add({
        username: currentUser.name,
        downloadURL,
        title,
        description,
        tags,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        navigation.popToTop();
      });
  };

  return (
    <ScrollView style={styles.container}>
            <View>
              <Image source={{ uri: route.params.image }} />
            </View>

            <View style={styles.bodycontainer}>
              <View style = {{marginVertical:10,}}>
                  <Text style = {[styles.text,{fontSize:16}]}>Title </Text>
                  <Text style = {[styles.textItalized,{fontSize:14, color: "#707070"}]} > Type the title of your image.</Text>
                  <TextInput
                    style={[styles.addButton,{height:50}]}
                    multiline={true}
                    autoCorrect={false}
                    onChangeText={(title) => setTitle(title)}
                    maxLength={25}
                  />

              
              </View>

              <View style = {{marginVertical:10,}}>
                  <Text style = {[styles.text,{fontSize:16}]}>Description </Text>
                  <Text style = {[styles.textItalized,{fontSize:14, color: "#707070"}]} >Describe the image you have added.</Text>
                  <FloatingLabelInput
                      value={description}
                      blurOnSubmit={false}
                      countdownLabel="chars left"
                      multiline={true}
                      autoCorrect={false}
                      onChangeText={(description) => setDescription(description)}
                      maxLength={95}
                      showCountdown={true}
                      color="black"
                      containerStyles={{
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        borderColor: "#70707033",
                        borderRadius: 5,
                        marginVertical:10,
                      }}
                      inputStyles={{
                        flex:1,
                        letterSpacing: 0.25,
                        height: 80,
                        width: "95%",
                        paddingTop: 1,
                        marginTop: 10,
                        borderRadius: 5,
                        color:"black"
                        
                      }}
                      showCountdownStyles={{
                        color:"#707070",
                        
                        
                      }}
                      
            
                />
              </View>
              <View style = {{marginVertical:10,}}>
                <Text style = {[styles.text,{fontSize:16}]}>Tags </Text>
                    <Text style = {[styles.textItalized,{fontSize:14, color: "#707070"}]} > Add tags that are related to your image.</Text>
                    <TextInput
                      style={[styles.addButton,{height:50}]}
                      multiline={true}
                      autoCorrect={false}
                      onChangeText={(tags) => setTags(tags)}
                      
                    />
              </View>
              <View style = {{flexDirection:"row", flex:1, justifyContent:"center",marginVertical:10,}}>
                <Pressable 
                    style={[styles.button,{backgroundColor:"#8E2835"}]}
                    onPress={() => uploadImage()}
                    >
                    <Text style={[styles.text,{fontSize:16, color:'white'}]}>Share</Text>
                </Pressable>
            </View>
            </View>
            

            



    </ScrollView>
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Save);
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
  textItalized:{
    fontStyle:'italic',
    fontSize: 18,
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
      justifyContent:"center",
      paddingHorizontal:10
  },
  button:{
      flex:1,
      alignItems:"center",
      paddingVertical:20,
      borderRadius:5,
  }
  
});
