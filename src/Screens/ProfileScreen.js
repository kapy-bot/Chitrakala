import { Center, Image, Heading, Text } from 'native-base'
import React from 'react'
import Tabs from '../Components/Profile/Tabs'


function ProfileScreen() {
  return (
       <>
        <Center bg="gray.500" pt={10} pb={10}>
      <Image source={require("../../assets/profile.png")}
      alt='profle'
      w={24}
      h={24}
      resizeMode='cover'
      mt={10}
      />
      <Heading  mt={5} bold fontSize={15} isTruncated my={2} color="white" >ADMIN</Heading>
      <Text italic fontSize={10} color="white">
        Joined Dec 12 2024
      </Text>
    </Center>
    <Tabs/>
       </>
    
  )
}

export default ProfileScreen
