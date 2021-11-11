import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";

import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Audio } from "expo-av";
import { Value } from "react-native-reanimated";
import { Sound } from "expo-av/build/Audio";
var head = require("../../assets/learning.svg");

function Dictionary({ dictionaryAll, navigation }) {
  const [playing, setPlaying] = useState(false);
  const [datalist, setDatalist] = useState(dictionaryAll);

  useEffect(() => {
    setDatalist(dictionaryAll);
  }, [dictionaryAll]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("dictionaryAll")
        .where("status", "==", "1")
        .get()
        .then((snapshot) => {
          console.log(snapshot, "-=-=-=-=-=-=-=-=");
          let dictionaryAll = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          setDatalist(dictionaryAll);
        });
    });

    return unsubscribe;
  }, [navigation]);

  const SoundObject = useRef(new Audio.Sound());

  console.log(dictionaryAll);
  const downloadAudio = async (uri) => {
    // let SoundObject = new Audio.Sound();
    try {
      if (playing) await SoundObject.current.stopAsync();
    } catch (error) {}
    try {
      await SoundObject.current.loadAsync({ uri: uri });
      // let sound = await SoundObject.getStatusAsync();
      // if (sound.isLoaded) {
      // await SoundObject.stopAsync();
      await SoundObject.current.playAsync();
      setPlaying(true);
      // }
    } catch (error) {
      console.log(error);
      await SoundObject.current.unloadAsync(); // Unload any Sound loaded
      SoundObject.current.setOnPlaybackStatusUpdate(null); // Unset all playback status loaded
    }
  };

  return (
    <NavigationContainer independent={true}>
      <View style={styles.headLine}>
        <View style={styles.title}>
          <Text style={styles.textHead}> Kaag</Text>
          <Text style={styles.textSubHead}> Dictionary</Text>
          <TextInput
            style={styles.input}
            placeholder="Search for words..."
          ></TextInput>
        </View>
      </View>
      <FlatList
        nestedScrollEnabled
        numColumns={1}
        horizontal={false}
        data={datalist}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.Kagan}
              onPress={() => downloadAudio(item.downloadURL)}
            >
              <View>
                <Text style={styles.textVocab}> {item.kagan} </Text>
                <Text style={styles.textVocabSubSub}>/{item.filipino}/</Text>
                <Text style={styles.textVocabSub}>{item.meaning}</Text>
              </View>

              <View style={styles.audioButton}>
                <TouchableOpacity
                  style={styles.audioButton}
                  onPress={() => downloadAudio(item.downloadURL)}
                >
                  <MaterialCommunityIcons
                    name="volume-high"
                    color={"#707070"}
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </NavigationContainer>
  );
}

const mapStateToProps = (store) => ({
  dictionaryAll: store.userState.dictionaryAll,
});

export default connect(mapStateToProps, null)(Dictionary);

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    position: "absolute",
    //padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 170,
    backgroundColor: "#8E2835",
  },
  headline: {
    width: "78%",
    height: 200,
    backgroundColor: "#dadada",
    top: 70,
    left: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    top: 40,
    bottom: 40,
    left: 5,
  },
  subtitle: {
    top: 65,
    left: -30,
  },
  audioButton: {
    position: "relative",
    flex: 1,
    alignSelf: "flex-end",
    bottom: 10,
  },
  textHead: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    marginLeft: 11,
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 15,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    marginLeft: 12,
  },
  headLine: {
    flexDirection: "column",
    width: "100%",
    height: 200,
    backgroundColor: "#8E2835",
    padding: 10,
  },
  textHeadline: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  searchBar: {
    top: 85,
    left: -120,
    width: "100%",
  },
  Kagan: {
    flex: 1,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 20,
    padding: 10,
    //backgroundColor:"#fafafa",
    flexDirection: "row",
  },
  grammar: {
    top: 70,
    left: 40,
  },
  pronun: {
    top: 100,
    left: 40,
  },
  textKagan: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  button: {
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 150,
    top: -120,
    backgroundColor: "#8E2835",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonVocab: {
    alignSelf: "center",
    //elevation: 2,
    width: "90%",
    //backgroundColor: "#dadada",
    top: -70,
    left: -40,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
  },
  buttonGrammar: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "90%",
    backgroundColor: "#dadada",
    top: -30,
    left: -40,
    height: 105,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  buttonPronun: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "90%",
    backgroundColor: "#dadada",
    top: -40,
    left: -40,
    height: 105,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  Vocab: {
    top: 0,
    left: -20,
  },
  VocabSubSub: {
    top: 5,
    left: -10,
  },
  VocabSub: {
    top: 5,
    left: -10,
  },
  textVocab: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "black",
    //left: -6,
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
  },
  textVocabSubSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#8E2835",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 45,
    width: "90%",
    backgroundColor: "white",
    margin: 12,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
