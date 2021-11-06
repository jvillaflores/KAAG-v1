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
  Dimensions,
  SafeAreaView,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const listTab = [
    {
      status: "All",
    },
    {
      status: "Confirmed",
    },
    {
      status: "Pending",
    },
    {
      status: "Declined",
    },
  ];
  
  const data = [
    //from database which consists of words from contribution
    {
      name: "Chris James Buot",
      reason: "I have learned to be one",
      status: "Confirmed",
    },
    {
      name: "Jan Millena Villaflores",
      reason: "I have learned to be one",
      status: "Confirmed",
    },
    {
      name: "Kent Romans Bandong",
      reason: "I have learned to be one",
      status: "Pending",
    },
    {
      name: "Laimee Antonette Pisao",
      reason: "I have learned to be one",
      status: "Pending",
    },
    {
      name: "Somi Doumma",
      reason: "I have learned to be one",
      status: "Pending",
    },
    {
        name: "Joshua Hong",
        reason: "I have learned to be one",
        status: "Pending",
    }
    
  ];
  
  function Applications({ dictionaryAll, navigation }) {
    const [status, setStatus] = useState("All");
    const [datalist, setDatalist] = useState(data);
  
    const setStatusFilter = (status) => {
      if (status !== "All") {
        //purple and green
        setDatalist([...data.filter((e) => e.status === status)]);
      } else {
        setDatalist(data);
      }
      setStatus(status);
    };
  
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          onPress={() => navigation.navigate("ConfrimationScreen")}
        >
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.itemBody}>
              <Text style={styles.itemsName}> {item.name}</Text>
            </View>
            <View style={styles.itemBody}>
              <Text> {item.reason}</Text>
            </View>
          </View>
  
          <View style={styles.buttonContainer}>
            <View
              style={[
                styles.itemStatus,
                {
                  backgroundColor:
                    item.status === "Pending"
                      ? "#FFEFC5"
                      : "#B5F5D1" 
                },
              ]}
            >
              <Text
                style={[
                  styles.statusFont,
                  {
                    color:
                      item.status === "Pending"
                        ? "#CEA032"
                        : "#63C579" 
                  },
                ]}
              >
                {" "}
                {item.status}
              </Text>
            </View>
            <View style={[styles.arrowRight]}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="#8E2835"
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    };
  
    const separator = () => {
      return <View style={{ height: 1, backgroundColor: "#E6E5E5" }} />;
    };
  
    return (
      <SafeAreaView style={styles.container}>
         <View>
             <Text style = {styles.textHead}>List of applications</Text>

         </View>
        <FlatList
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
        />
      </SafeAreaView>
    );
  }
  const mapStateToProps = (store) => ({
    dictionaryAll: store.userState.dictionaryAll,
  });
  
  export default connect(mapStateToProps, null)(Applications);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20,
      justifyContent: "center",
      paddingVertical: 20,
    },
    listTab: {
      alignSelf: "center",
      marginBottom: 20,
      flexDirection: "row",
      paddingHorizontal: 2,
      backgroundColor: "#ebebeb",
      borderRadius: 10,
    },
  
    btnTab: {
      width: Dimensions.get("window").width / 4.5,
      flexDirection: "row",
      borderWidth: 0.5,
      borderColor: "#ebebeb",
      padding: 10,
      justifyContent: "center",
    },
    textTab: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#000000",
      //lineHeight: 1,
    },
    brnTabActive: {
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    textTabActive: {
      color: "#8E2835",
      fontWeight: "bold",
      fontSize: 13,
    },
    itemContainer: {
      flexDirection: "row",
      paddingVertical: 15,
    },
    itemLogo: {
      padding: 10,
    },
    itemImage: {
      width: 50,
      height: 50,
    },
  
    itemBody: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: "center",
    },
  
    itemsName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    itemStatus: {
      backgroundColor: "#69C080",
      paddingHorizontal: 17,
      height: 30,
      justifyContent: "center",
      right: 14,
      borderRadius: 5,
    },
    headLine: {
      flexDirection: "column",
      width: "100%",
      padding: 30,
      top: -20,
      height: 150,
      backgroundColor: "#8E2835",
      alignItems: "flex-start",
      justifyContent: "center",
      position: "relative",
    },
    textHead: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#8E2835",
      paddingVertical:15,
    },
    
    statusFont: {
      fontWeight: "bold",
    },
    arrowRight: {
      backgroundColor: "#ebebeb",
      paddingHorizontal: 5,
      width: 30,
      height: 30,
      justifyContent: "center",
      right: 2,
      borderRadius: 5,
      margin: 10,
    },
    buttonContainer: {
      alignItems: "flex-end",
      alignSelf: "center",
    },
  

});
