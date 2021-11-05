import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase/app";
require("firebase/auth");

const onLogout = () => {
  firebase.auth().signOut();
};

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.userInfoSelection}>
          <Avatar.Image source={require("../../assets/jam.jpeg")} size={80} />

          <View style={{ marginLeft: 20 }}>
            {/* <Title> dapat yung username ang ma change </Title> */}
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Jan Villaflores
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("MyContribution")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#777777" size={25} />
            <Text style={styles.menuItemText}>My Contributions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("Validate")}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#777777" size={25} />
            <Text style={styles.menuItemText}> Check Submissions</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => onLogout()}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#777777" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
  },
  userInfoSelection: {
    // paddingHorizontal: 30,
    // marginBottom: 25,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  menuWrapper: {
    marginTop: 10,
  },

  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
