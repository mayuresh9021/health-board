import { Box, Heading, HStack, Icon, Stack,Text } from '@chakra-ui/react'

import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const navLinks=[
    {
      icon:RxDashboard,
      text:"Dashboard",
      link:"/",
    },
    {
      icon:BsArrowDownUp,
      text:"Transaction",
      link:"/transactions",
    }
  ]
  return (
    <Stack justify="space-between" bg="white" boxShadow={{
      base:"none",
      lg:"lg"
    }}
     w={{
      base:"full",
      lg:"16rem",
    }} 
    height="100vh" 
    
    >
    <Box>
    <Heading fontSize="20px" as="h1" pt="3.5rem">@DOSOMECODING</Heading>
    <Box mt="3" mx="12px">
    {
      navLinks.map((nav)=>(
        <Link to={nav.link}>
        <HStack borderRadius="10px"  key={nav.text} py="3" px="4" 
        _hover={{
          bg:"#F3F3F7",
          color:"#171717",
        }}
        color="#797E82"
        >
          <Icon as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium" color="#797E82">{nav.text}</Text>
        </HStack>
        </Link>
      ))
    }
    </Box>
    
    </Box>



    <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
        
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            _hover={{
              bg:"#F3F3F7",
              color:"#171717",
        }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
          </Link>
      </Box>
   
    </Stack>
    
  )
}

export default Sidenav