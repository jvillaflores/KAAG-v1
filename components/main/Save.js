import React, { useState } from "react";
import { View, 
        TextInput, 
        Image, 
        Button, 
        TouchableOpacity, 
        Text,
        StyleSheet
       } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function Save({ currentUser, route, navigation }) {
  const [caption, setCaption] = useState("");
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
        caption,
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
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        navigation.popToTop();
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params.image }} />
      
      <TextInput
          style = {styles.text_input} 
          value={currentUser.name} />
      <TextInput
        style={styles.input}
        multiline = {true}
        placeholder="Caption . . ."
        onChangeText={(caption) => setCaption(caption)}
      />
       <TextInput
        style={styles.tags_input}
        multiline = {true}
        placeholder="Add tags"
        onChangeText={(caption) => setCaption(caption)}
      />
      <TouchableOpacity title="Save" onPress={() => uploadImage()}>
          <Text style = {styles.subtitle}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Save);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  subtitle: {
    //flex: 1,
    //left: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#7F3E3B",
    //alignItems: "center"
    margin: 20,
  },
  text_input:{
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 10,
  },
  input: {
    letterSpacing: 0.25,
    height: 100,
    width: "100%",
    paddingLeft: 12,
    paddingTop: 1,
    margin: 10,
    //borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#70707033',

  },
  tags_input: {
    letterSpacing: 0.25,
    height: 40,
    width: "100%",
    paddingLeft: 12,
    paddingBottom: 12,
    
    
    borderBottomWidth: 1,
    borderColor: '#70707033',

  },

})
