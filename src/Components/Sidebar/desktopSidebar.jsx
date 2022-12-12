import { 
    Flex,
    Image,
    Tabs,
    TabList,
    Tab,
} from "@chakra-ui/react";
import React from "react";
import icon from "../../Images/App Icon.svg"
import HomeIcon from "../../Images/Icons/Home Icon.svg"


class SidebarDesktop extends React.Component {

    constructor() {
        super()
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
                <Tabs w={"100%"} orientation="vertical" variant={"unstyled"} >
                    <TabList>
                        <Tab><Image src={HomeIcon} backgroundColor="transparent" /></Tab>
                        <Tab>ffghfg</Tab>
                        <Tab>fghsf</Tab>
                    </TabList>
                </Tabs>
            </Flex>
        )
    }
}


export default SidebarDesktop