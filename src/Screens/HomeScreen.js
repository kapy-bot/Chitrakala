import { Text, Center,Image, HStack, Box } from "native-base";
import React from "react";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";

function HomeScreen() {
  return (
    <Box flex={1} bg="white">
      <Center flex={0.3}>
      <HStack space={5} alignItems="center">
        <Image
          source={require("../../assets/apple-icon.png")}
          alt="Logo"
          w={10} // Adjust the width as needed
          h={10} // Adjust the height as needed
        />
        <Text italic fontSize={25}>
          An artistic love
        </Text>
      </HStack>
    </Center>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
