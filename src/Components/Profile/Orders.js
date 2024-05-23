import { Box, Button, HStack, ScrollView, Text, View } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'

const Orders = () => {
  return (
   <Box h="full" bg="black" pt={5}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable>
        <HStack space={4}
        justifyContent="space-between"
        alignItems="center"
        bg="coolGray.300"
        py={3}
        px={5}>
            <Text fontSize={15} color="gray" isTruncated>
                09128309174623490842
            </Text>
            <Text bold  fontSize={10} color="black" isTruncated>
                PAID
            </Text>
            <Text  italic fontSize={10} color="black" isTruncated>
               Dec 12 2024
            </Text>
            <Button px={6} py={1.5} rounded={50}>€468</Button>
        </HStack>
      </Pressable>
      <Pressable>
        <HStack space={4}
        justifyContent="space-between"
        alignItems="center"
        bg="coolGray.300"
        py={3}
        px={3}>
            <Text fontSize={15} color="gray" isTruncated>
                09128309174623490842
            </Text>
            <Text bold  fontSize={10} color="black" isTruncated>
               NOT PAID
            </Text>
            <Text  italic fontSize={10} color="black" isTruncated>
               jan 12 2024
            </Text>
            <Button px={6} py={1.5}  rounded={50}>€48</Button>
        </HStack>
      </Pressable>
    </ScrollView> 
   </Box>
  )
}

export default Orders
