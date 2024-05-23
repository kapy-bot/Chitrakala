import { Box, Button, Center, HStack, ScrollView, Text, View } from "native-base";
import React from "react";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeArea bg="white">
      {/*Header */}
      <Center w="full" py={5}>
        <Text color="black" fontSize={25} bold>
          Cart
        </Text>
      </Center>
      {/* If cart is empty */}
      {/*<CartEmpty/>*/}
      {/* If cart is not empty */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />

        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg="white"
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text color="black">Total amount</Text>
            <Button px={10} h={45} rounded={50} bold>
              €784
            </Button>
          </HStack>
        </Center>

        <Center px={5}>
          <Button onPress={() => navigation.navigate("Shipping")} px={20} mt={10}>Checkout</Button>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
