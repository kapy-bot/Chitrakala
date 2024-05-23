import { View, Text, FlatList, Box, HStack, Center, Image, VStack, Button } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import products from "../data/Products"
 
const OrderItem = () => {
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      data={products.slice(0,3)}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => (
          <Pressable>
              <Box mb={3}>
                <HStack alignItems="center"
                bg="white"
                shadow={1}
                rounded={10}
                overflow="hidden">
                  <Center w="25%" bg="blue.590">
                      <Image source={item.image} alt={item.name} w="full" h={24} resizeMode="contain" />
                  </Center>
                  <VStack w="60%" px={2}>
                    <Text isTruncated color="black" bold fontSize={14}>
                        {item.name}
                    </Text>
                    <Text color="black" bold mt={2}>
                        €{item.price}
                    </Text>
                  </VStack>
                  <Center>
                    <Button>5</Button>
                  </Center>
                </HStack>
              </Box>
          </Pressable>
      )}
    />
  )
}

export default OrderItem
