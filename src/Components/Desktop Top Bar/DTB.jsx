import React from 'react';
import SearchBar from '../Searchbar/searchbar'
import TopInfoBar from '../Top Info Bar/infobar'
import {
    Flex,
} from "@chakra-ui/react"

class DesktopTopBar extends React.Component {
    render() {
        return (
            <Flex
            w={'calc(100% - 64px)'}
            h={'68px'}
            position="absolute"
            right="0px">
                <SearchBar />
                <TopInfoBar />
            </Flex>
        )
    }
}

export default DesktopTopBar;