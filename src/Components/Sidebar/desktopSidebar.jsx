import { 
    Flex,
    Image,
    Tabs,
    TabList,
    Tab,
    Button,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "../../Css/DesktopSidebar.css"
import icon from "../../Images/App Icon.svg"
import { Home } from "@styled-icons/fluentui-system-filled/Home"
import { BrokenImage } from "@styled-icons/material-rounded/BrokenImage"
import { DarkTheme } from '@styled-icons/fluentui-system-regular/DarkTheme'

function SidebarDesktop() {

    const { colorMode ,toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#fff', '#12131C')
    const fg = useColorModeValue('#12131c', '#fff')

    return (
        <Flex
        w={"64px"}
        h={"100vh"}
        backgroundColor={bg}
        position={"fixed"}
        direction="column"
        alignItems={"center"}>
            <Image src={icon} w={"36px"} pt={2} />
            <Tabs w={"100%"} orientation="vertical" variant={"unstyled"} mt={"20vh"}>
                <TabList width={"100%"}>
                    <Tab className="sidebar-tabs"
                    onClick={(e) => {

                    }}><Home /></Tab>
                    <Tab className="sidebar-tabs"><BrokenImage /></Tab>
                    <Tab className="sidebar-tabs"><BrokenImage /></Tab>
                    <Tab className="sidebar-tabs"><BrokenImage /></Tab>
                    <Tab className="sidebar-tabs"><BrokenImage /></Tab>
                </TabList>
            </Tabs>
            <Button variant='unstyled' w={'20px'} h='20px' color={fg} position={'absolute'} bottom='35px'
            onClick={() => {
                toggleColorMode()
            }}>
                <DarkTheme />
            </Button>
        </Flex>
    )
}


export default SidebarDesktop