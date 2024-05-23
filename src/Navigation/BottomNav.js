import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Text } from "native-base";
import React from "react";
import StackNav from "../Navigation/StackNav";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreens";
import {
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    _pressed={{ bg: "black" }}
    rounded="full"
    bg="white"
    top={-2}
    shadow={5}
  >
    {children}
  </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/*home */}
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color="white" />
              ) : (
                <AntDesign name="home" size={24} color="white" />
              )}
            </Center>
          ),
        }}
      />
      {/*cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color="white"
                />
              )}
            </Center>
          ),
        }}
      />
      {/*profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color="white" />
              ) : (
                <AntDesign name="user" size={24} color="white" />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: "black",
    height: 50,
    // paddingTop: 5,
  },
});

export default BottomNav;
