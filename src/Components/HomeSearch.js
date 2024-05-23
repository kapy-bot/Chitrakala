import React from "react";
import { Text, Box, HStack, Input, Pressable, Badge } from "native-base";
import { Feather } from "@expo/vector-icons";
import Colors from "../colors";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const navigation = useNavigation();
  return (
    <HStack space={3} w="full" px={6} py={8} alignItems={"center"} safeAreaTop>
      <Input
        placeholder="Artistic, Homie, Canvas..."
        w="70%"
        variant="underlined"
        style={{ backgroundColor: "white" }} // Set background color to white
        type="search"
        color="black"
        pl={2}
        borderWidth={0}
        borderBottomColor="black"
        /><AntDesign name="search1" size={24} color="black" />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <Feather name="shopping-cart" size={28} color="black" />
        <Badge
          bg={Colors.red}
          borderRadius="full"
          px={1}
          position="absolute"
          top={-25}
          right={-1}
        >
          <Text color="black" fontSize="sm">
            6
          </Text>
        </Badge>
      </Pressable>
    </HStack>
  );
}
