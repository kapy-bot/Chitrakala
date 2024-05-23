import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Orderinfo from "../Components/Orderinfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import OrderModel from "../Components/OrderModal";


function OrderScreen() {
  return (
    <Box bg="black" flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          
          <Orderinfo
            title="ORDER INFO"
            success
            subTitle="Shipping; Saxony"
            text="pay Methode: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={30} color="white" />}
          />
          <Orderinfo
            title="DELIVERY TO:"
            danger      
            subTitle="ADDRESS:"
            text="XYZ str 55, Halle, 106108"
            icon={<Ionicons name="location-sharp" size={30} color="white" />}
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading color="white" bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
        <OrderItem />
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
