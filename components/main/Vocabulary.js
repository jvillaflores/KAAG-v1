import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const Vocabulary = ({ route }) => {
  return (
    <View>
      <View style={styles.Kagan}>
        <Text style={styles.textKagan}> Courses </Text>
      </View>

      <View style={styles.Kagan}>
        <Pressable
          style={styles.buttonVocab}
          onPress={() => navigation.navigate("MainContribution")}
        >
          <Text style={styles.textVocab}>
            <Image
              style={{ width: 50, height: 50, left: -20, top: 25 }}
              source={require("../../assets/Learning-cuate.png")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Lesson 1</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 15 words - 20 minutes</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.grammar}>
        <Pressable style={styles.buttonGrammar}>
          <Text style={styles.textGrammar}>
            <Image
              style={{ width: 50, height: 50, left: -20, top: 25 }}
              source={require("../../assets/Learning-cuate.png")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Lesson 2</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 12 words - 16 minutes</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.pronun}>
        <Pressable style={styles.buttonPronun}>
          <Text style={styles.textPronun}>
            <Image
              style={{ width: 50, height: 50, left: -20, top: 25 }}
              source={require("../../assets/Learning-cuate.png")}
            />
          </Text>
          <View style={styles.Vocab}>
            <Text style={styles.textVocab}> Lesson 3</Text>
          </View>
          <View style={styles.VocabSub}>
            <Text style={styles.textVocabSub}> 10 words - 15 minutes</Text>
          </View>
        </Pressable>

        <View style={styles.shit}>
          <Pressable style={styles.buttonPronun}>
            <Text style={styles.textPronun}>
              <Image
                style={{ width: 50, height: 50, left: -20, top: 25 }}
                source={require("../../assets/Learning-cuate.png")}
              />
            </Text>
            <View style={styles.Vocab}>
              <Text style={styles.textVocab}> Lesson 4</Text>
            </View>
            <View style={styles.VocabSub}>
              <Text style={styles.textVocabSub}> 11 words - 15 minutes</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.shit1}>
          <Pressable style={styles.buttonPronun}>
            <Text style={styles.textPronun}>
              <Image
                style={{ width: 50, height: 50, left: -20, top: 25 }}
                source={require("../../assets/Learning-cuate.png")}
              />
            </Text>
            <View style={styles.Vocab}>
              <Text style={styles.textVocab}> Lesson 5</Text>
            </View>
            <View style={styles.VocabSub}>
              <Text style={styles.textVocabSub}> 11 words - 15 minutes</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Vocabulary;

const styles = StyleSheet.create({
  header: {
    top: 40,
    left: 30,
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
  },
  Kagan: {
    top: 20,
    left: 40,
  },
  grammar: {
    top: 10,
    left: 40,
  },
  pronun: {
    top: 40,
    left: 40,
  },
  shit: {
    top: 30,
  },
  shit1: {
    top: 60,
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
    height: 80,
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
    height: 80,
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
    height: 80,
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
