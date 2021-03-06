import React, { Component } from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchAllUser,
  fetchUserPosts,
  fetchAllUserPosts,
  fetchFilteredDictionary,
  fetchValidatedDictionary,
} from "../redux/actions/index";
import { NavigationContainer } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "./main/EditProfileScreen";
const ProfileStack = createStackNavigator();

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};
// import { LogBox } from "react-native";
// import _ from "lodash";

// LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
// LogBox.ignoreAllLogs(); // ignore all logs
// const _console = _.clone(console);
// console.warn = (message) => {
//   if (message.indexOf("Setting a timer") <= -1) {
//     _console.warn(message);
//   }
// };
import CourseScreen from "./main/Course";
import DictionaryScreen from "./main/Dictionary";
import CommunityScreen from "./main/Community";
import ContributeDictionary from "./main/ContributeDictionary";
import ProfileScreen from "./main/Settings";
// import { FirstScreenNavigator } from "../CustomNavigation";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAllUser();
    this.props.fetchUserPosts();
    this.props.fetchAllUserPosts();
    this.props.fetchFilteredDictionary();
    this.props.fetchValidatedDictionary();
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
          component={ProfileStackScreen}
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
const ProfileStackScreen = ({ navigation }) => {
  // const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          //backgroundColor: colors.background,
          //shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        //headerTintColor: colors.text,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f2f2f2",
            elevation: 0,
            borderBottomWidth: 0,
          },

          title: "",
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#f2f2f2"
                color="#777777"
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "Edit Profile",
          headerStyle: {
            backgroundColor: "#f2f2f2",
            elevation: 0,
            borderBottomWidth: 0,
          },
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUser,
      fetchUserPosts,
      fetchAllUserPosts,
      fetchFilteredDictionary,
      fetchAllUser,
      fetchValidatedDictionary,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Main);
