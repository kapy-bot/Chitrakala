import { useNavigation } from "@react-navigation/native";
import { Button, Center, HStack, Modal, Text, VStack, View } from "native-base";
import React, { useState } from "react";

const OrderInfos = [
    {
        title:"Products",
        price:123.67,
        color:"black"
    },
    {
        title:"Shipping",
        price:12.45,
        color:"black"
    },
    {
        title:"Tax",
        price:3.67,
        color:"black"
    },
    {
        title:"Total Amount",
        price:150.67,
        color:"red.500"
    },
]

const PlaceOrderModel = () => {
  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Button  onPress={() => setShowModel(true)} mt={5}>
        SHOW TOTAL
      </Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
                {OrderInfos.map((input, index) =>(
                    <HStack key={index} alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">{input.title}</Text>
                    <Text bold color={input.color === "red.500" ? "red.500" : "black"} fontSize={15}>€{input.price}</Text>
                  </HStack>
                ))}
              
            </VStack>
          </Modal.Body>
          <Modal.Footer>  
            <Button onPressIn={()=> navigation.navigate("order")} flex={1} onPress={() => setShowModel(false)} >PLACE ORDER</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
