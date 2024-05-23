import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import React, { useRef, useState } from "react";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "NEW PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1); // State to track active input field

  const handleInputFocus = (index) => {
    // Scroll to the end of the screen when typing begins
    scrollViewRef.current.scrollToEnd({ animated: true });
    setActiveIndex(index); // Set the active input field index
  };

  return (
    <Box h="full" bg="white" px={5}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef} // Ref for the ScrollView
      >
        <VStack space={4} mt={2} pb={10}>
          {Inputs.map((input, index) => (
            <FormControl key={index}>
              {/* Added key prop */}
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {input.label} {/* Dynamically render label */}
              </FormControl.Label>
              <Input
                borderWidth={activeIndex === index ? 2 : 0.2} // Adjusted border width based on active state
                borderColor={activeIndex === index ? "gray.800" : "gray.300"} // Adjusted border color based on active state
                bg={activeIndex === index ? "gray.200" : "gray.100"} // Adjusted background color based on active state
                color="black"
                py={2}
                type={input.type}
                fontSize={17}
                _focus={{ borderColor: "gray.800", bg: "gray.200" }} // Adjusted focus styles
                onFocus={() => handleInputFocus(index)} // Handle input focus event
              />
            </FormControl>
          ))}
          <Button>UPDATE PROFILE</Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
