import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UploadList from "./UploadList";
import UploadItem from "./UploadItem";


import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");


function Contribution({ currentUser, route, navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [uploadModal, setUploadModal] = useState(false);
  const closeUploadModal = () => {
    setUploadModal(false);
  };
 
  //const { width: winWidth, height: winHeight } = Dimensions.get('window');

  //////// SAVE /////////

  const [caption, setCaption] = useState("");
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

  //

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);


  const takePicture = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      setUploadModal(false);
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,

        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        //let newImages = [data, ...images];
         setImage(data);
        //setImage(newImages);
      }
    } else {
      Alert.alert("Camera Permission Needed");
    }
    
    
  };

  const handleAddPhoto = () => {
    setUploadModal(true);
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      contentContainerStyle={{ flex: 1 }}
      >
      <View style={styles.upload}>
        <TextInput value={currentUser.name} />
        <TextInput 
            style={styles.text}
            multiline = {true}
            autoCorrect = {false}
            blurOnSubmit = {true}
            
            placeholder="What's happening?"
            onChangeText={(caption) => setCaption(caption)} />
            
        
        <View style={{ marginVertical: 10, flex: 1 }}>
          <View style={ {flex: 1, alignItems: "center"}}>
            {/* {image && <UploadItem item={image}/>}  */}
            {image && (item=[image])}  
          </View>
        </View>

        {!image && (
          <TouchableOpacity onPress={handleAddPhoto}>
            <Text>Add</Text>
          </TouchableOpacity>
        )}


        {/* <Button title = "Save" onPress = {() => navigation.navigate('Save',{image}) } />
      
        {image && <Image source = {{uri: image}} style = {{flex: 1}}/>}  */}
        {image && (
          <Button title = "Save" onPress = {() => navigation.navigate('Save',{image}) }></Button>
          // <TouchableOpacity
          //   //style={styles.cart__checkoutButton}
          //   activeOpacity={0.7}
          //   //onPress={() => uploadImage()}
          //   onPress = {() => navigation.navigate('Save',{image}) }
          // >
          //   <Text>Confirm</Text>
          // </TouchableOpacity>
        )}

        {!image && (
          <View style={styles.cameraButton}> 
          <View style={styles.imageButton}>
            <TouchableOpacity
                style={{
                  ...styles.upload__containerInsideCol,
                  borderRightColor: "lightgray",
                  borderRightWidth: 1,
                }}
                onPress={takePicture}
              >
                <MaterialCommunityIcons name="camera" color="#8E2835" size={30} />
                <Text style={styles.buttontext}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.upload__containerInsideCol}
                onPress={pickImage}
              >
                <MaterialCommunityIcons name="image" color="#8E2835" size={30} />
                <Text style={styles.buttontext}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        
      </View>
    </ScrollView>
    
  )
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Contribution);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'white'
  },
  cameraButton:{
    //position: "absolute",
    bottom: 0,
    width: 80,
    height: 80,
    // borderRadius: 20,
    // borderColor: "#8E2835",
    // borderWidth: 3,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",


  },
  imageButton:{
    position: "absolute",
    bottom: 20,
    width: 80,
    height: 50,
    // borderRadius: 20,
    // borderColor: "#8E2835",
    // borderWidth: 3,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttontext:{
    color: "#8E2835",
    fontSize: 10,
  },
  center:{
    position: "absolute",
    alignSelf: "center",
    top: 12.5,
  },
  cameraContainer : {
    flex: 1,
    flexDirection: 'row',
    
  },
  upload:{
    flex: 1,
    
  },
  upload__indicator:{
    flex: 1,
  },
  upload__indicatorTitle:{
    flex: 1,
  },
  upload__indicatorSemiTitle:{
    flex: 1,
  },
  upload__containerOutside:{
    position: "absolute",
    bottom: 0,
    width: '100%',
    height: '16%',
    backgroundColor: '#F2F2F2',
    flexDirection: "row",
    alignSelf: "center",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: '#8E2835',
    
    
  },
  upload__containerInside:{
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  upload__containerInsideCol:{
    margin: 1,
    alignItems: "center",
    width: 100,
    height: 60,
    justifyContent: "center",
  },
  camerafixedRatio: {
    flex: 1,
    aspectRatio: 1, 
    backgroundColor: '#fff',
  },
  modalBackground:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  
  capture: {
    position: "absolute",
    bottom: 30,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "#eee",
    borderWidth: 6,
    alignSelf: "center"

  },
  Flipbutton: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    right: 25,
    top: 15,
    
  },
  ChooseImageButton: {
    position: "absolute",
    bottom: 10,
    width: 80,
    height: 80,
    alignSelf: "flex-end"


  },

  loginGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: -50,
    left: 30,
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
  input1: {
    height: 100,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
    fontWeight: "bold",
    left: 50,
  },
  button1: {
    marginBottom: 200,
  },
  
  text: {
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    padding: 15,
    margin: 12
  },
  text1: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  upload__addButton: {
    borderStyle: "dashed",
    //borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
  },

});
