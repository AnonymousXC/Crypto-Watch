import { extendTheme } from "@chakra-ui/react";


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const extendedTheme = extendTheme(config)

export default extendedTheme;