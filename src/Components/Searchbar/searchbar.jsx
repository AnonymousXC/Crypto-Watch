import React from 'react'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import {
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
} from "@chakra-ui/react"

class SearchBar extends React.Component {
    render() {
        return (
            <Stack 
            mt={'16px'} mx={'16px'} 
            maxW={"50%"} minW={"40%"}
            height='40px'
            backgroundColor='#171822'>
                <InputGroup>
                    <InputLeftElement children={<SearchOutline color='#A6A9B3' size={'27px'} />}/>
                    <Input 
                    color={"var(--tri-text-color)"} 
                    fontSize="16px"
                    variant={"outline"}
                    borderColor='#303241'
                    placeholder="Search market" />
                </InputGroup>
            </Stack>
        )
    }
}


export default SearchBar;