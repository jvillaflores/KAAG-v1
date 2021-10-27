import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Audio } from "expo-av";
import { connect } from "react-redux";

var head = require("../../assets/learning.svg");

const Word = ({ dictionaryAll,route }) => {
  console.log(dictionaryAll);
  return (
    <FlatList
        nestedScrollEnabled
        numColumns={1}
        horizontal={false}
        data={dictionaryAll}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
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
            
            <TouchableOpacity onPress={()=>navigation.navigate("Word")}>
              <Text>Hey</Text>
              <Text> {item.kagan} </Text>
              <Text>{item.filipino}/</Text>
              <Text>{item.meaning}</Text>
              <View>
                <TouchableOpacity
                  style={styles.audioButton}
                  onPress={() => downloadAudio()}
                >
                  <MaterialCommunityIcons
                    style={styles.addAudio}
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
    // <View
    //   data={dictionaryAll}>
    //   <View style={styles.headLine}>
    //     <View style={styles.header_line}>
    //       <Text style={styles.textHead}> AiMBABAKi</Text>
    //       <Text style={styles.textSubHead}> /aim.ba.ba.'ki/</Text>
    //     </View>


    //     <Pressable
    //       style={styles.buttonAudio}
    //       onPress={() => navigation.navigate("Vocabulary")}
    //     >
    //       <View>
    //         <MaterialCommunityIcons
    //           name="volume-high"
    //           size={26}
    //           color="white"
    //         />
    //       </View>
    //     </Pressable>
    //   </View>

    //   <View style={styles.Kagan}>
    //         <Text style={styles.textVocab}> Adjective</Text>
    //         <Text style={styles.textVocabSubSub}>
    //           1. feeling or showing pleasure or contentment.
    //         </Text>
    //         <Text style={styles.textVocabSub}>
    //           "Melissa came in looking happy and excited"
    //         </Text>
    //   </View>
    // </View>
  );
};

export default Word;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#8E2835",
  },
  headline: {
    width: "78%",
    height: 170,
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
    left: 110,
  },
  subtitle: {
    top: 65,
    left: -20,
  },

  textHead: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    position:"relative",
    alignSelf: "center",
    color: "white",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    letterSpacing: 0.25,
    color: "white",
  },
  headLine: {
    flexDirection: "column",
    //width: "100%",
    padding: 30,
    top: -20,
    height: 150,
    backgroundColor: "#8E2835",
    alignItems:"center",
    justifyContent: "center",

  },
   header_line: {
    flexDirection: "column",
    //padding: 30,
    //top: 20,
    //height: 150,
    alignItems:"center",
    //justifyContent: "center",

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
    justifyContent:"flex-start",
    top: 20,
    left: 40,
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
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "100%",
    backgroundColor: "#dadada",
    top: -90,
    left: -40,
    height: 105,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },

  buttonAudio: {
    alignSelf: "center",
    padding: 8,
    margin: 10,
    // justifyContent: "center",
    // paddingVertical: 12,
    // paddingHorizontal: 32,
     borderRadius: 7,
    // elevation: 3,
    // width: 60,
     backgroundColor: "#79222D",
    // top: 40,
    // left: -100,
    // height: 50,
    // borderColor: "black",
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
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    marginTop: 5,
    letterSpacing: 0.25,
    color: "#8E2835",
    paddingLeft: 15,
  },
  textVocabSubSub: {
    fontSize: 13,
    letterSpacing: 0.25,
    color: "#000000",
    marginTop:5,
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
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
