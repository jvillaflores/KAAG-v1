import React, { useState } from "react";
import { View, 
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
import { NavigationEvents } from "react-navigation";


function NewDictionary({ currentUser, route, navigation }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  

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
      <ScrollView style={styles.container}>
      
          <View style = {styles.center}>
              <View style = {styles.paddingLeft}>
                  
                  <Text style={styles.title_text}>Word </Text>
                  <Text style = {styles.guidelines}> Type the Kinagan word you want to explain. </Text>
                  <TextInput
                    style={styles.input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>

              <View style = {styles.paddingLeft}>
                  
                  <Text style={styles.title_text}>In Filipino </Text>
                  <Text style = {styles.guidelines}>Translate the Kinagan word you have suggested to Filipino </Text>
                  <TextInput
                    style={styles.input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>

              <View style = {styles.paddingLeft}>
                  
                  <Text style={styles.title_text}>Example </Text>
                  <Text style = {styles.guidelines}>Write an example of the word you have suggested in Kinagan.</Text>
                  <TextInput
                    style={styles.input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
              <View style = {styles.paddingLeft}>
                  
                  <Text style={styles.title_text}>Example Translation </Text>
                  <Text style = {styles.guidelines}>Translate in Filipino the example of the word you have suggested in Kinagan.</Text>
                  <TextInput
                    style={styles.input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
              

              <View style = {styles.paddingLeft}>
                  <Text style={styles.title_text}>Meaning </Text>
                  <Text style = {styles.guidelines}>Define the Kinagan word you have suggested in Filipino.</Text>
                  <TextInput
                    style={styles.description_input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
              <View style = {styles.paddingLeft}>
                  <Text style={styles.title_text}>Audio </Text>
                  <Text style = {styles.guidelines}>Upload an audio on how to pronounce the Kinagan word you have suggested.</Text>
                  <TextInput
                    style={styles.tags_input}
                    multiline = {true}
                    //onChangeText={(caption) => setCaption(caption)}
                  />
              </View>
          </View>
      <Pressable style = {styles.button} onPress={() => navigation.navigate('NewWord')}>
          <Text style = {styles.subtitle}>Share</Text>
      </Pressable>
    </ScrollView>
    
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(NewDictionary);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    // /justifyContent: "center",
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
    marginBottom:80,
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
