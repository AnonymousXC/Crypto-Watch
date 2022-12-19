import {
    Flex,
    Image,
    useColorModeValue,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'



function CoinCard({coinName, icon}) {

    const BG = useColorModeValue('#fff', '#171822')
    const borderColor = useColorModeValue('#DCDCDC', '#303241')
    const fontColor = useColorModeValue('#312A64', '#fff')
    const $Color = useColorModeValue('#9B96B6', '#303241')
    const [ price, setPrice ] = useState('Loading')

    useEffect(() => {

        let coin;
        if(coinName === 'BNB')
            coin = 'binance-coin'
        else if(coinName === 'Sushi')
            coin = 'waves'
        else
            coin = coinName.toLowerCase()

        setInterval(() => {
            getCoinPrice(coin)
            .then(data => {
                setPrice(Number(data.rateUsd).toFixed(2))
            })
        }, 3000)
        
    }, [])

    return (
        <Flex 
        w={'240px'}
        rounded={'12px'}
        border={'1px solid'}
        borderColor={borderColor}
        direction={'column'}
        bgColor={BG}
        color={fontColor}
        fontWeight={'300'}>
            <Flex
            mt={'16px'}
            ml={'12px'}
            h={'24px'}
            gap={'8px'}>
                <Image src={icon} w={'24px'} />
                {coinName} (24h)
            </Flex>
            <Flex
            mt={'8px'}
            ml={'12px'}>
                <Text color={$Color} fontSize='24px' fontWeight='600'>$</Text>
                <Text fontSize='24px' fontWeight='600'>{price}</Text>
            </Flex>
        </Flex>
    )
}


async function getCoinPrice(coin) {
    const quered = await fetch(`https://api.coincap.io/v2/rates/${coin}`)
    const data = await quered.json()
    return data.data;
}

export default CoinCard;