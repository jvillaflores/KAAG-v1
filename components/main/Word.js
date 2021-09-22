import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

var head = require("../../assets/learning.svg");

const Word = ({ route }) => {
  return (
    <View>
      <View style={styles.headLine}>
        <View style={styles.title}>
          <Text style={styles.textHead}> AiMBABAKi</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.textSubHead}> /aim.ba.ba.'ki/</Text>
        </View>
        <Pressable
          style={styles.buttonAudio}
          onPress={() => navigation.navigate("Vocabulary")}
        >
          <View style={styles.Icon}>
            <MaterialCommunityIcons
              name="volume-high"
              size={26}
              color="white"
              style={{ left: -10 }}
            />
          </View>
        </Pressable>
      </View>

      <View style={styles.Kagan}>
        <Pressable style={styles.buttonVocab}>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Adjective</Text>
          </View>
          <View style={styles.VocabSubSub}>
            <Text style={styles.textVocabSubSub}>
              1. feeling or showing pleasure or contentment.
            </Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}>
              "Melissa came in looking happy and excited"
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
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
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 15,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  headLine: {
    flexDirection: "row",
    width: "100%",
    top: -25,
    height: 150,
    backgroundColor: "#8E2835",
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
    top: 90,
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
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    width: 60,
    backgroundColor: "#79222D",
    top: 40,
    left: -100,
    height: 50,
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
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
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
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  Icon: {
    left: -10,
  },
});
