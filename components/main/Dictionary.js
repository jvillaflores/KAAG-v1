import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";

var head = require("../../assets/learning.svg");

export default function Dictionary({ navigation }) {
  return (
    <View>
      <View style={styles.headLine}>
        <View style={styles.title}>
          <Text style={styles.textHead}> Kaag</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.textSubHead}> Dictionary</Text>
        </View>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="   Search for words" />
        </View>
      </View>
      <View style={styles.Kagan}>
        <Pressable
          style={styles.buttonVocab}
          onPress={() => navigation.navigate("Word")}
        >
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Aimbabaki</Text>
          </View>
          <View style={styles.VocabSubSub}>
            <Text style={styles.textVocabSubSub}>/aim.ba.ba.'ki/</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum, odio a ultricies varius,
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.grammar}>
        <Pressable style={styles.buttonGrammar}>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Ainarayawan</Text>
          </View>
          <View style={styles.VocabSubSub}>
            <Text style={styles.textVocabSubSub}>/ai.na.ra.'ya.wan/</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum,
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.pronun}>
        <Pressable style={styles.buttonPronun}>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Aigpakarakuaoan</Text>
          </View>
          <View style={styles.VocabSubSub}>
            <Text style={styles.textVocabSubSub}>/aig.pa.ka.ra.ku.'a.qan/</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              bibendum, odio a ultricies varius,
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    left: 25,
  },
  subtitle: {
    top: 65,
    left: -30,
  },

  textHead: {
    flexDirection: "row",
    fontSize: 20,
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
    height: 170,
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
    width: "90%",
    backgroundColor: "#dadada",
    top: -70,
    left: -40,
    height: 105,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
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
});
