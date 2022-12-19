import React from 'react'
import { FavoriteBorder } from '@styled-icons/material-rounded/FavoriteBorder'
import { Bell } from '@styled-icons/boxicons-regular/Bell'
import {
    Flex,
    Button,
    Text,
    Avatar,
    useColorModeValue,
} from "@chakra-ui/react"

function TopInfoBar() {

    const btnBG = useColorModeValue('#fff', '#171822')
    const btnBorderColor = useColorModeValue('#DADADC', '#303241')

    return (
        <Flex 
        gap={'4px'}
        height={"40px"}
        mt={'16px'}
        pr={'16px'}>
            <Button 
            variant={'unstyled'}
            backgroundColor={btnBG}
            border={'1px solid'}
            borderColor={btnBorderColor}
            className='top-bar-btn'
            color={'#A6A9B3'}
            rounded={'12px'}
            w='40px'
            h='40px'>
                <FavoriteBorder size={'23px'}/>
            </Button>
            <Button 
            variant={'unstyled'}
            backgroundColor={btnBG}
            border={'1px solid'}
            borderColor={btnBorderColor}
            className='top-bar-btn'
            color={'#A6A9B3'}
            rounded={'12px'}
            w='40px'
            h='40px'>
                <Bell size={'23px'}/>
            </Button>
            <Button 
            variant={'unstyled'}
            backgroundColor={btnBG}
            border={'1px solid'}
            borderColor={btnBorderColor}
            className='top-bar-btn'
            color={'#A6A9B3'}
            rounded={'12px'}
            w='175px'
            h='40px'
            display={'flex'}
            justifyContent='space-around'>
                <Text pl={2} fontSize='16px' fontWeight={'400'} color='#666873'>0x3a....oeQb</Text>
                <Avatar name="asd" size={'sm'} />
            </Button>
        </Flex>
    )
}


export default TopInfoBar;