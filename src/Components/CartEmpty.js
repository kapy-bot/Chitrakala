import { View, Text, Box, Center, Button } from 'native-base'
import React from 'react'
import {FontAwesome} from "@expo/vector-icons";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
        <Center h="90%">
            <Center w={200} h={200} bg="white" rounded="full">
                <FontAwesome name="shopping-basket" size={64} color="black"/>
            </Center>
            <Text color="white" bold mt={5}>
                Cart is Empty.
            </Text>
            <Button mt={10} px={10} py={2}>Start shopping</Button>
        </Center>
    </Box>
  )
}

export default CartEmpty
