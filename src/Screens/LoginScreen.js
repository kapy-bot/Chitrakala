import { Box, Button, Heading, Input, Text, VStack, View } from "native-base";
import React from "react";
import Colors from "../colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function LoginScreen({ navigation }) {
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
        <Heading style={{ color: "black" }}>LOGIN</Heading>
        {/*EMAIL */}
        <VStack space={5} pt="6">
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
          <Pressable onPress={() => console.log("Forgot Password pressed")}>
            <Text fontSize={14} color="black">
              Forgot Password?{" "}
              <Text fontWeight="bold" color="black" onPress={()=> navigation.navigate("Register")} >
                Click to change password
              </Text>
            </Text>
          </Pressable>
        </VStack>
        
        <Button
         my={35} 
         w="45%"
          rounded={50} 
          colorScheme="gray"
          onPress={()=> navigation.navigate("Bottom")}
          >
          Login
        </Button>
        <Pressable mt={4} onPress={()=> navigation.navigate("Register")}>
          {({ pressed }) => (
            <Text color="black">
              Don't have an account?{" "}
              <Text fontWeight="bold" color="black" opacity={pressed ? 0.5 : 1}>
                Sign up
              </Text>
            </Text>
          )}
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
