import React from "react";
import { Box, Button, Heading, Text, VStack, Image } from "native-base"; // Import Image component
import Colors from "../colors";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";

function NotVerifyScreen() {
  // Dummy data for carousel/slider images
  const carouselImages = [
    { id: 1, image: require("../../assets/image1cover.png"), },
    { id: 2, image: require("../../assets/image2cover.png"),  },
    { id: 3, image: require("../../assets/image3cover.png"), },
  ];

  const { width: deviceWidth } = Dimensions.get("window");

  return (
    <Box flex={1} bg={Colors.black}>
      {/* Carousel/Slider */}
      <Box flex={1}>
        <Swiper autoplay={true}>
          {carouselImages.map(({ id, image, description }) => (
            <Box key={id} alignItems="center" justifyContent="center">
              <Image source={image} alt={`Image ${id}`} w={deviceWidth} h={500}resizeMode="contain" />
              <Text color="white" textAlign="center" fontSize="sm" mt={2}>{description}</Text> 
            </Box>
          ))}
        </Swiper>
        <Text color="white" textAlign="center" fontSize="xl" mt={8}>expolore your love for paintings</Text>
      </Box>
      
      {/* Signup/Login Buttons */}
      <Box flex={3/4} justifyContent="flex-end" px={4} pb={8}>
        <VStack space={4} alignItems="center">
          {/* Signup Button */}
          <Button w="100%" colorScheme="gray" onPress={() => console.log("Signup button pressed")}>
            Sign up
          </Button>
          {/* Login Button */}
          <Button w="100%" colorScheme="gray" onPress={() => console.log("Login button pressed")}>
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default NotVerifyScreen;
