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

import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

var head = require("../../assets/learning.svg");

function MyContributions({ dictionary, navigation }) {
  return (
    <NavigationContainer independent ={true}>
      <View style={styles.headLine}>
        <View style={styles.title}>
          <Text style={styles.textHead}> My Contributions</Text>
          <Text style={styles.textSubHead}> Dictionary</Text>
          
        </View>
      </View>
        <FlatList
            nestedScrollEnabled
            numColumns={1}
            horizontal={false}
            data={dictionary}
            style={{ flex: 1 }}
            renderItem={({ item }) => (

              
              <View style={styles.Kagan}>
                <Pressable
                  style={styles.buttonVocab}
                  onPress={() => navigation.navigate("Word")}>

                  <Text style={styles.textVocab}> {item.word} </Text>
                  <Text style={styles.textVocabSubSub}>/{item.english}/</Text>
                  <Text style={styles.textVocabSub}>{item.english}</Text>
                  
                </Pressable>

                <Pressable
                  style={styles.buttonVocab}
                  onPress={() => navigation.navigate("Word")}>
                    
                  <Text style={styles.textVocab}> {item.word} </Text>
                  <Text style={styles.textVocabSubSub}>/{item.english}/</Text>
                  <Text style={styles.textVocabSub}>{item.english}</Text>
                  
                </Pressable>

                <Pressable
                  style={styles.buttonVocab}
                  onPress={() => navigation.navigate("Word")}>
                    
                  <Text style={styles.textVocab}> Aigpakarakuaoa </Text>
                  <Text style={styles.textVocabSubSub}>/aig.pa.ka.ra.ku.'a.qan/</Text>
                  <Text style={styles.textVocabSub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      bibendum, odio a ultricies varius, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      bibendum, odio a ultricies varius, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      bibendum, odio a ultricies varius, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      bibendum, odio a ultricies varius,</Text>
                  
                </Pressable>
                
        
              </View>
              
            )}
          />
    </NavigationContainer>
  
  );
}
const mapStateToProps = (store) => ({
  dictionary: store.userState.dictionary,
});

export default connect(mapStateToProps, null)(MyContributions);

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
    alignItems:"flex-start",
    margin: 20,
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
    //height: 200,
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
    top: 70,
    left: 40,
    padding: 10,
    paddingTop: 20,
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
    padding:20,
    paddingTop: 10,
    paddingBottom:10,
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
    letterSpacing: 0.30,
    color: "black",
    left:-6,
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    textAlign:"justify"

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
