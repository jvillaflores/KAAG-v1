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
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';

function NewDictionary({ currentUser, route, navigation }) {
  const [kagan, setKagan] = useState("Test");
  const [filipino, setFilipino] = useState("TOST");
  const [sentence, setSentence] = useState("HOLA TOST");
  const [filipinoSentence, setFilipinoSentence] = useState("HOLA TOSTA");
  const [meaning, setMeaning] = useState("Test test test");
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(null)

  const chooseFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "audio/*", copyToCacheDirectory: false, });
    // Alert.alert("Audio File", result.name);
    console.log(result);
    if (result.type === "success") {
      setAudio(result);
    }
    else {
      alert("something went wrong!!")
    }
  };

  const uploadAudios = async () => {
    // const uri = recording.getURI();
    const uri = FileSystem.documentDirectory + audio.name;

    await FileSystem.copyAsync({
      from: audio.uri,
      to: uri
    })

    try {
      // const blob = await new Promise((resolve, reject) => {
      //   const xhr = new XMLHttpRequest();
      //   xhr.onload = () => {
      //     try {
      //       resolve(xhr.response);
      //     } catch (error) {
      //       console.log("error:12", error);
      //     }
      //   };
      //   xhr.onerror = (e) => {
      //     console.log(e);
      //     reject(new TypeError("Network request failed"));
      //   };
      //   xhr.responseType = "blob";
      //   xhr.open("GET", `file://${audio?.uri}`, true);
      //   xhr.send(null);
      // });
      // console.log('file://'+audio?.uri)
      // let u = (`file://${audio?.uri}`)
      let res = await fetch(uri);
      let blobs = await res.blob();
      if (blobs != null) {
        const uriParts = audio?.uri.split(".");
        const fileType = uriParts[uriParts.length - 1];
        console.log(uriParts, '0-0-0', fileType)
        // firebase
        //   .storage()
        //   .ref()
        //   .child(`nameOfTheFile.${fileType}`)
        //   .put(blob, {
        //     contentType: `audio/${fileType}`,
        //   })
        //   .then(() => {
        //     console.log("Sent!");
        //   })
        //   .catch((e) => console.log("error:", e));
      } else {
        console.log("erroor with blob");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const uploadAudio = async () => {
    const childPath = `audio/${firebase.auth().currentUser.uid
      }/${Math.random().toString(36)}`;
    console.log(childPath);
    const uri = FileSystem.documentDirectory + audio.name;

    await FileSystem.copyAsync({
      from: audio.uri,
      to: uri
    })

    let res = await fetch(uri);
    let blob = await res.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      setLoading(snapshot.bytesTransferred / audio?.size * 100)
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };

    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        saveAllPostData(snapshot);
        setLoading(null)
        console.log(snapshot);
      });
    };

    const taskError = (snapshot) => {
      setLoading(null);
      alert(snapshot)
      console.log(snapshot);
    };

    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("dictionary")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        kagan,
        filipino,
        sentence,
        filipinoSentence,
        meaning,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };
  const saveAllPostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("dictionaryAll")
      .add({
        username: currentUser.name,
        downloadURL,
        kagan,
        filipino,
        sentence,
        filipinoSentence,
        meaning,
        status: 0,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        alert('Thanks for contribution!!')
        setLoading(null)
        navigation.popToTop();
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Word </Text>
          <Text style={styles.guidelines}>
            {" "}
            Type the Kinagan word you want to explain.{" "}
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={kagan}
            onChangeText={(kagan) => setKagan(kagan)}
          />
        </View>

        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>In Filipino </Text>
          <Text style={styles.guidelines}>
            Translate the Kinagan word you have suggested to Filipino{" "}
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={filipino}
            onChangeText={(filipino) => setFilipino(filipino)}
          />
        </View>

        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Example </Text>
          <Text style={styles.guidelines}>
            Write an example of the word you have suggested in Kinagan.
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={sentence}
            onChangeText={(sentence) => setSentence(sentence)}
          />
        </View>
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Example Translation </Text>
          <Text style={styles.guidelines}>
            Translate in Filipino the example of the word you have suggested in
            Kinagan.
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={filipinoSentence}
            onChangeText={(filipinoSentence) =>
              setFilipinoSentence(filipinoSentence)
            }
          />
        </View>

        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Meaning </Text>
          <Text style={styles.guidelines}>
            Define the Kinagan word you have suggested in Filipino.
          </Text>
          <TextInput
            style={styles.description_input}
            multiline={true}
            value={meaning}
            onChangeText={(meaning) => setMeaning(meaning)}
          />
        </View>
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Audio </Text>
          <Text style={styles.guidelines}>
            Upload an audio on how to pronounce the Kinagan word you have
            suggested.
          </Text>
          <TouchableOpacity
            style={styles.audioButton}
            onPress={() => chooseFile()}
          >
            <View>
              {audio ?
                <Text>
                  {audio?.name}
                </Text>
                :
                <MaterialCommunityIcons
                  style={styles.addAudio}
                  name="plus-box"
                  color={"#707070"}
                  size={26}
                />
              }
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => uploadAudio()}>
        <Text style={styles.subtitle}>{loading ? `Sharing...  ${parseInt(loading)}%` : 'Share'}</Text>
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
    fontSize: 18,

    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "90%",
    backgroundColor: "#8E2835",
    //top: 130,
    marginTop: 20,
    marginBottom: 80,
  },
  audioButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
    height: 70,
    borderColor: "#707070",
    paddingTop: 20,
    marginTop: 10,
  },
  guidelines: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#707070",
  },
  addAudio: {
    flex: 1,
  },

  bottom: {
    marginBottom: 20,
  },

  center: {
    justifyContent: "center",
    alignContent: "center",
  },

  paddingLeft: {
    alignContent: "flex-start",
    // padding:15,
    // paddingRight:5,
    marginTop: 20,
    paddingLeft: 20,
  },

  title_text: {
    //alignContent:"flex-start",
    fontWeight: "bold",
    fontSize: 17,
  },
  text_input: {
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
    borderColor: "#707070",
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
    borderColor: "#707070",
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
    borderColor: "#707070",
  },
});
