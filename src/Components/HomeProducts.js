import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  ScrollView,
  Flex,
  Image,
  Pressable,
  Heading,
} from "native-base";
import products from "../data/Products";
import Ratings from "./Ratings";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts() {
  const navigation = useNavigation();

  return (
    <ScrollView flex={1} color="white" showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={2}
      >
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="48%"
            bg="white"
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={product.image}
              alt={product.name}
              w={200}
              h={120}
              resizeMode="contain"
            />
            <Box px={3} pt={1}>
              <Heading size="sm" bold>
                {product.name}
              </Heading>
              <Text fontSize={15} bold color="black" mt={1} isTruncated w="full">
                €{product.price}
              </Text>
              <Ratings value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}