import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import Ratings from "./Ratings";
import Message from "./Notifications/Message";
import Colors from "../colors";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading color="black" bold fontSize={20} mb={2}>
        REVIEWS
      </Heading>
      <Message
        color="black"
        bg="white"
        size={18}
        bold
        children={"This is a excellent product."}
      />

      <Box p={3} bg="white" mt={2} rounded={5}>
        <Heading fontSize={15} color="black">
          User1
        </Heading>
        <Ratings value={4} />
        <Text fontSize={12} my={2} color="black" mb={10}>
          Jan 12 2024
        </Text>
        <Message
          color="black"
          bg="gray.200"
          size={18}
          children={
            "lorem15jhsakjdheaikuwhfiuehdfjkchaweuidiuaewhfdkjasiwhfcia<ezfk egwdhzgdef bhwieuzdiuahd ueziudhd guzegdna dgtiwaezhdkeb hhgiwezdiukj"
          }
        />
      </Box>
      <Box mt={6}>
        <Heading color="black" fontSize={20} bold mb={4}>
          REVIEW THE PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg="gray.200"
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: "green.500",
                endIcon: <CheckIcon size={2} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Write a Comment-
              </FormControl.Label>
              <TextArea
                h={20}
                w="full"
                placeholder="This product is good..."
                borderWidth={0}
                bg="gray.200"
                py={3}
                _focus={
                    {
                        bg: "gray.200"
                    }
                }
              />
            </FormControl>
          </FormControl>
          <Button >Submit</Button>
          <Message
          color="black"
          bg="white"
          size={18}
          children={
            "Please Login to review the product."
          }
        />
        </VStack>
      </Box>
    </Box>
  );
}
