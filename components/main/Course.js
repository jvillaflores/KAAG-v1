import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import * as Svg from 'react-native-svg';


export default function Course({ navigation }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHead}>Hello, Kent! </Text>
        <Text style={styles.textSubHead}>New user </Text>
      </View>

      <View style={styles.headline}>
        <View style={styles.headLine}>
          <Text style={styles.textHeadline}>
            What do you want to learn today?
          </Text>
          <Image
            source={require("../../assets/learning.svg")}
            style={{ width: 140, height: 140, left: 120 }}
          />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Vocabulary")}
          >
            <Text style={styles.text}>Get Started</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.Kagan}>
        <Text style={styles.textKagan}> Kagan Course </Text>
      </View>

      <View style={styles.Kagan}>
        <Pressable
          style={styles.buttonVocab}
          onPress={() => navigation.navigate("Vocabulary")}
        >
          <Text style={styles.textVocab}>
            <Image
              style={{ width: 35, height: 35, left: -10, top: 25 }}
              source={require("../../assets/Vocabulary.svg")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Vocabulary</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 70 words to study</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.grammar}>
        <Pressable
          style={styles.buttonGrammar}
          onPress={() => navigation.navigate("Grammar")}
        >
          <Text style={styles.textGrammar}>
            <Image
              style={{ width: 35, height: 35, left: -10, top: 25 }}
              source={require("../../assets/Grammar.svg")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Grammar</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 7 topics to study</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.pronun}>
        <Pressable style={styles.buttonPronun}>
          <Text style={styles.textPronun}>
            <Image
              style={{ width: 35, height: 35, left: -10, top: 25 }}
              source={require("../../assets/Pronounciation.svg")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Pronunciation</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 70 words to study</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 40,
    left: 30,
  },
  headline: {
    width: "78%",
    height: 200,
    backgroundColor: "#dadada",
    alignItems:"center",
    top: 70,
    left: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textHead: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  headLine: {
    top: 15,
    left: 10,
  },
  textHeadline: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    alignItems:"center",
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
    width: "78%",
    backgroundColor: "#dadada",
    top: 20,
    left: -40,
    height: 60,
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
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 60,
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
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 60,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  Vocab: {
    top: -20,
    left: 40,
  },
  VocabSub: {
    top: -22,
    left: 40,
  },
  textVocab: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
