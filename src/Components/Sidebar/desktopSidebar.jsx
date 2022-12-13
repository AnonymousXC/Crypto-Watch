import { 
    Flex,
    Image,
    Tabs,
    TabList,
    Tab,
} from "@chakra-ui/react";
import React from "react";
import "../../Css/DesktopSidebar.css"
import icon from "../../Images/App Icon.svg"
import { Home } from "@styled-icons/fluentui-system-filled/Home"
import { BrokenImage } from "@styled-icons/material-rounded/BrokenImage"


class SidebarDesktop extends React.Component {

    constructor() {
        super()
        this.router = "use"
    }

    render() {
        return (
            <Flex
            w={"64px"}
            h={"100vh"}
            backgroundColor="var(--side-bottom-bar-bg)"
            position={"fixed"}
            direction="column"
            alignItems={"center"}>
                <Image src={icon} w={"36px"} pt={2} />
                <Tabs w={"100%"} orientation="vertical" variant={"unstyled"} color="#BCBCBC" mt={"20vh"}>
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
            </Flex>
        )
    }
}


export default SidebarDesktop