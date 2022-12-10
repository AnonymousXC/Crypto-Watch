import { 
    Flex,
    Image
} from "@chakra-ui/react";
import React from "react";
import icon from "../../Images/App Icon.svg"


class SidebarDesktop extends React.Component {
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
            </Flex>
        )
    }
}


export default SidebarDesktop