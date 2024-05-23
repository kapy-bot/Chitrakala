import {
  Text,
  Image,
  Box,
  ScrollView,
  Heading,
  HStack,
  Spacer,
  Button,
} from "native-base";
import React, { useState } from "react";
import Ratings from "../Components/Ratings";
import NumericInput from "react-native-numeric-input";
import Colors from "../colors";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg="white">
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={product.image}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading color="black" bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Ratings value={product.rating} text={`${product.numReview} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ?  (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}  
              borderColor="black"
              rounded
              textColor="black"
              iconStyle="black"
              rightButtonBackgroundColor="black"
              leftButtonBackgroundColor="black"
            />
          ) : (
            <Heading bold color="rose.500" italic fontSize={19}>
              Out of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color="black" fontSize={19}>
            €{product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} color="black">
          {product.description}
        </Text>
        <Button onPress={() => navigation.navigate("Cart")} mt={10}>
          ADD TO CART
        </Button>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
