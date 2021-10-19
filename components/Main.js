import React, { Component } from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchUserPosts,
  fetchAllUserPosts,
  fetchDictionary,
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
import ContributeDictionary from "./main/ContributeDictionary";
// import { FirstScreenNavigator } from "../CustomNavigation";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserPosts();
    this.props.fetchAllUserPosts();
    this.props.fetchDictionary();
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Course"
        labeled={false}
        activeColor="#8E2835"
        inactiveColor="#B2B2B2"
        barStyle={{ backgroundColor: "#f2f2f2" }}
      >
        <Tab.Screen
          name="Course"
          component={CourseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Dictionary"
          component={DictionaryScreen}
          //navigation = {this.props.navigation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open-page-variant"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          //navigation = {this.props.navigation}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Community");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ContributeDictionary"
          component={ContributeDictionary}
          //navigation = {this.props.navigation}
          //to pass along the props inside it and make it easier the logic from the profile screen perspective
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("ContributeDictionary");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="upload" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={CourseScreen}
          //navigation = {this.props.navigation}
          //to pass along the props inside it and make it easier the logic from the profile screen perspective
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Settings");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
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
    { fetchUser, fetchUserPosts, fetchAllUserPosts, fetchDictionary },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Main);
