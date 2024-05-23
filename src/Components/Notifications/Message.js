import { Box, Center, Heading, Text } from "native-base";
import React from "react";
import Colors from "../../colors";

const Message = ({ bg, color, children, size, bold }) => {
  return (
    <Center bg={bg} p={2}rounded={5}>
      <Text color={color} fontSize={size} bold>
        {children}
      </Text>
    </Center>
  );
};

export default Message;
