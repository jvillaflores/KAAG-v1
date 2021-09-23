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
} from "react-native";
import { Camera } from "expo-camera";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import * as ImagePicker from "expo-image-picker";

export default function Contribution({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer }>
        <Camera 
          ref = {ref => setCamera(ref)}
          style={styles.fixedRatio} 
          type={type}
          ratio = {'1:1'} 
          
        />
      </View>
      <Pressable
      
          style={styles.button}
          onPress={() =>  {
            setType(
              type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
             );
             console.log('flipped')
             
          }}
         >
          <MaterialCommunityIcons name="camera-party-mode" color={"#ffffff"} size={25} />
        </Pressable>
      
      <Pressable 
          style = {styles.capture}
          title = "Take Picture" onPress = {() => takePicture() } />

      <Pressable
        style = {styles.ChooseImageButton} 
        title = "Choose Image" onPress = {() => pickImage() } >
           <MaterialCommunityIcons name="image" color={"#ffffff"} size={30} />
      </Pressable>

      <Pressable 
        style = {styles.SaveButton}
        title = "Save" onPress = {() => navigation.navigate('Save',{image}) } />
      
      {image && <Image source = {{uri: image}} style = {{flex: 1}}/>}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
  },
  cameraContainer : {
    flex: 1,
    flexDirection: 'row',
    aspectRatio: 1/1,
    

  },
  camerafixedRatio: {
    flex: 2,
    aspectRatio: 1 / 1

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
  ChooseImageButton: {
    position: "absolute",
    bottom: 5,
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
  button: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    left: -25,
    //width: "80%",
    //backgroundColor: "#8E2835",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  text1: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
