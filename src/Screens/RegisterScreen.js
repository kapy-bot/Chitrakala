import { Box, Button, Heading, Input, Text, VStack, View } from "native-base";
import React from "react";
import Colors from "../colors";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";

function RegisterScreen({ navigation }) {
  return (
    <Box flex={1} bg="white">
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        alignItems="center"
      >
        <Heading style={{ color: "black" }}>SIGN UP</Heading>
        {/*USERNAME */}
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color="black" />
            }
            variant="underlined"
            placeholder="Username"
            w="70%"
            pl={2}
            color="black"
            borderWidth={0}
            borderBottomColor={Colors.underline}
          />
          {/*email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color="black" />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color="black"
            borderWidth={0}
            borderBottomColor={Colors.underline}
          />
        </VStack>

        {/*password */}
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={<Ionicons name="eye" size={20} color="black" />}
            variant="underlined"
            placeholder="password"
            w="70%"
            type="password"
            pl={2}
            color="black"
            borderWidth={0}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          my={30}
          w="40%"
          rounded={50}
          colorScheme="gray"
          onPress={() => navigation.navigate("Bottom")}
        >
          Sign up
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          {({ pressed }) => (
            <Text color="black">
              Already have an account?{" "}
              <Text fontWeight="bold" color="black" opacity={pressed ? 0.5 : 1}>
                Login
              </Text>
            </Text>
          )}
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
