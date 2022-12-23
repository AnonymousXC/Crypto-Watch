import {
    Flex,
    Image,
    useColorModeValue,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TriangleRight } from '@styled-icons/octicons/TriangleRight'



function CoinCard({coinName, icon}) {

    const BG = useColorModeValue('#fff', '#171822')
    const borderColor = useColorModeValue('#DCDCDC', '#303241')
    const fontColor = useColorModeValue('#312A64', '#fff')
    const $Color = useColorModeValue('#9B96B6', '#303241')
    const [ price, setPrice ] = useState('Loading')
    const [ pcpercent, setpcpercent ] = useState(0)

    useEffect(() => {

        let coin;
        if(coinName === 'Bitcoin')
            coin = '90'
        else if(coinName === 'ETH')
            coin = '80'
        else if(coinName === 'BNB')
            coin = '2710'
        else
            coin = '1'

        setInterval(() => {
            getCoinPrice(coin)
            .then(data => {
                setPrice(Number(data.price_usd).toFixed(2))
                setpcpercent(data.percent_change_24h)
            })
        }, 3000)
        
    }, [coinName])

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
            h={'24px'}>
                <Image src={icon} w={'24px'} mr={'8px'} />
                {coinName} (24h)
                <Flex 
                alignItems={'flex-start'}
                color={pcpercent > 0 ? '#22D49F' : '#FF5B6D'}>
                    <TriangleRight width={'20px'} className='triangle-svg' /> 
                    <Text fontSize={'10px'} className='ppcpercent-text'>{pcpercent > 0 ? '+' + pcpercent : pcpercent}</Text>
                </Flex>
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
    const quered = await fetch(`https://api.coinlore.net/api/ticker/?id=${coin}`)
    const data = await quered.json()
    return data[0];
}

export default CoinCard;