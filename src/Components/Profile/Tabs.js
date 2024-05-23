import { Text, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: "white" }}
      activeColor="white"
      inactiveColor="gray"
      renderLabel={({ route, color }) => (
        <Text  style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );
  return (
    <TabView 
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width:layout.width}}
    renderTabBar={renderTabsBar}
    />
  )
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default Tabs;
