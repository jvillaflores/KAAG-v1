import React, { useState } from "react";
import { View, 
        TextInput, 
        Image, 
        Button, 
        TouchableOpacity, 
        Text,
        StyleSheet, 
        Pressable
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
      
          <View style={styles.bottom}>
            <Image source={{ uri: route.params.image }} />
              
              {/* <TextInput
              style = {styles.text_input} 
              value={currentUser.name} /> */}
          </View>
          <View style = {styles.center}>
              <View style = {styles.paddingLeft}>
                  
                  <Text style={styles.title_text}>Title </Text>
                  <Text style = {styles.guidelines}> Type the title of your image.</Text>
                  <TextInput
                    style={styles.input}
                    multiline = {true}
                    onChangeText={(caption) => setCaption(caption)}
                  />
              </View>

              <View style = {styles.paddingLeft}>
                  <Text style={styles.title_text}>Description </Text>
                  <Text style = {styles.guidelines}> Describe the image you have added.</Text>
                  <TextInput
                    style={styles.description_input}
                    multiline = {true}
                    onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
              <View style = {styles.paddingLeft}>
                  <Text style={styles.title_text}>Tags </Text>
                  <Text style = {styles.guidelines}> Add tags that are related to your image.</Text>
                  <TextInput
                    style={styles.tags_input}
                    multiline = {true}
                    onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
          </View>
      <Pressable style = {styles.button} title="Save" onPress={() => uploadImage()}>
          <Text style = {styles.subtitle}>Share</Text>
      </Pressable>
    </View>
    
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Save);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    top: 1,
    //left: 40,
  },
  subtitle: {
    alignSelf: "center",
    fontSize:18,
    
    letterSpacing: 0.25,
    color: "white",
  },
  button:{
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "90%",
    backgroundColor: "#8E2835",
    //top: 130,
    marginTop: 20,
  },
  guidelines:{
    fontSize: 12,
    fontStyle:"italic",
    color:"#707070",
  },

  bottom: {
    marginBottom: 20,
  },

  center:{
    justifyContent:"center",
    alignContent:"center",
  },

  paddingLeft:{
    
    alignContent:"flex-start",
    // padding:15,
    // paddingRight:5,
     marginTop:20,
     paddingLeft:20,
    
  },

  title_text:{
    //alignContent:"flex-start",
    fontWeight:"bold",
    fontSize:17,
  },
  text_input:{
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 10,
  },
  input: {
    letterSpacing: 0.25,
    height: 50,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },
  tags_input: {
    letterSpacing: 0.25,
    height: 80,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },
  description_input: {
    letterSpacing: 0.25,
    height: 100,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',

  },

})
