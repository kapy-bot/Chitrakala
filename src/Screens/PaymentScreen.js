import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Image,
  Input,
  Button,
  HStack,
  Spacer,
} from "native-base";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/klarna.png"),
    alt: "klarna",
    icon: "fontawesome",
  },
  {
    image: require("../../assets/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];

function PaymentScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg="black" py={9}>
      <Center pb={18}>
        <Text color="white" fontSize={20} bold>
          MODE OF PAYMENT
        </Text>
      </Center>
      <Box h="full" bg="warmGray.50" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={2} mt={5}>
            {paymentMethods.map((input, index) => (
              <HStack
                key={index}
                alignItems="center"
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={input.image} // Adjusted source path
                    alt={input.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {input.icon === "Ionicons" ? (
                  <Ionicons name="checkmark-circle" size={24} color="black" />
                ) : (
                  <FontAwesome name="circle-thin" size={24} color="black" />
                )}
              </HStack>
            ))}

            <Button onPress={() => navigation.navigate("Placeorder")} mt={5}>ADD ADDRESS</Button>
            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
