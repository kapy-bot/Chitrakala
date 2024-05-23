import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import React from "react";



const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation()
  return (
    <>
      <Box flex={1} safeAreaTop bg="black" py={9}>
        <Center pb={18}>
          <Text color="white" fontSize={20} bold>
            DELIVERY ADDRESS
          </Text>
        </Center>
        <Box h="full" bg="warmGray.50" px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={2} mt={5}>
              {ShippingInputs.map((input, index) => (
                <FormControl key={index}>
                  <FormControl.Label
                    _text={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {input.label}
                  </FormControl.Label>
                  <Input
                    bg="warmGray.300"
                    py={3}
                    type={input.type}
                    color="black"
                    _focus={{
                      bg: "warmGray.300",
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                  />
                </FormControl>
              ))}
              <Button onPress={() => navigation.navigate("Checkout")} mt={5}>ADD ADDRESS</Button>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
}

export default ShippingScreen;
