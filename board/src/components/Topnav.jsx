import { Box,Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Topnav = ({title,onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack maxW="70rem"  h="16" justify="space-between"   mx="auto">
          <Icon as={FaBars} onClick={onOpen}
            display={{
              base:"block",
              lg:"none",
            }}
          />
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
            <MenuButton>
                <Icon as={FaCircleUser} fontSize="24px"/>
            </MenuButton>
            <MenuList>
            
            
            <Link to={"/support"}>
            <MenuItem>
            Support
            
            </MenuItem>
            </Link>
            
            </MenuList>
        </Menu>
        

</HStack>
    </Box>
  )
}

export default Topnav