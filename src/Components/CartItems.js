import { Box, Button, Center, HStack, Text, VStack, Image } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import { Entypo } from '@expo/vector-icons';
import Colors from "../colors";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 4)} // Fixed 'date' to 'data', and removed one 'renderItem' prop
    renderItem={renderItem}
    renderHiddenItem={HiddenItem}
    showsVerticalScrollIndicator={false}
  />
);

// Define renderItem function before using it
const renderItem = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg="white"
        shadow={1}
        rounded={5}
        overflow="hidden"
      >
        <Center w="40%" bg="white">
          <Image
            source={data.item.image}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="45%" px={2} space={2}>
          <Text isTruncated color="black" bold fontSize={14}>
            {data.item.name}
          </Text>
          <Text bold color="black">€{data.item.price}</Text>
        </VStack>
        <Center>
        <Button _pressed={{ bg: "black" }}>5</Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

const HiddenItem = () => (
  <Pressable
    w={50}
    h="100%"
    ml="auto"
    justifyContent="center"
    bg={Colors.primary}
    roundedRight={10}
    position="absolute"
    right={0}
  >
    <Center mt={1} px={5} py={0.1} bg="red.500" alignItems="center">
      <Entypo name="trash" size={24}  color="white" style={{ marginTop: 30}} /> {/* Adjust the marginTop value as needed */}
    </Center>
  </Pressable>
);



const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
