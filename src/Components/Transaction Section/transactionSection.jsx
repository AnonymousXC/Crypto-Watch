import {
    Flex,
    Heading,
    Button,
    useColorModeValue
} from '@chakra-ui/react'



const TransactionSection = () => {

    const color = useColorModeValue('#312A64', '#fff')

    return (
        <Flex
        w={'calc(100% - 68px)'}
        height={'calc(100vh - 540px)'}
        maxWidth={'1000px'}
        position={'absolute'}
        top={'536px'}
        pt={'6px'}
        left={'68px'}
        pl={'16px'}
        direction={'column'}>
            <Flex w={'100%'}
            color={color}
            justifyContent={'space-between'}>
                <Heading fontFamily={'Poppins'} fontWeight={'400'} fontSize={'24px'}>Biggest transactions of the month</Heading>
                <Button variant={'unstyled'} fontWeight={'400'}>See all ></Button>
            </Flex>
        </Flex>
    )
}


export default TransactionSection;