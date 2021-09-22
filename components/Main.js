import React, { Component } from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchUserPosts,
  fetchAllUserPosts,
} from "../redux/actions/index";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};

// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);

import CourseScreen from "./main/Course";
import DictionaryScreen from "./main/Dictionary";
import CommunityScreen from "./main/Community";
// import { FirstScreenNavigator } from "../CustomNavigation";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserPosts();
    this.props.fetchAllUserPosts();
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Course"
        labeled={false}
        color="white"
        activeColor="#8E2835"
        inactiveColor="#dadada"
      >
        <Tab.Screen
          name="Course"
          component={CourseScreen}
          options={{
            tabBarColor: "white",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="home-variant-outline" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Dictionary"
          component={DictionaryScreen}
          options={{
            tabBarColor: "white",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="book-open-variant" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Community");
            },
          })}
          options={{
            tabBarColor: "white",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="plus-box-multiple" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={CourseScreen}
          options={{
            tabBarColor: "white",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="cog" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchUserPosts, fetchAllUserPosts },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Main);
