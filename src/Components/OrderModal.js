import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";

const OrderInfos = [
  {
    title: "Products",
    price: 123.67,
    color: "black",
  },
  {
    title: "Shipping",
    price: 12.45,
    color: "black",
  },
  {
    title: "Tax",
    price: 3.67,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 150.67,
    color: "red.500",
  },
];

const OrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Button onPress={() => setShowModel(true)} mt={5}>
        SHOW Payments and Total
      </Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((input, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{input.title}</Text>
                  <Text
                    bold
                    color={input.color === "red.500" ? "red.500" : "black"}
                    fontSize={15}
                  >
                    €{input.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              h={45}
              rounded={5}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w={1500}
                h={34}
              />
            </Pressable>
            <Button mt={4} w="full" onPress={() =>{ navigation.navigate("Home"); setShowModel(false)}}>
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
