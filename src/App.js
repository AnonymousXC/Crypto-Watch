import React from 'react';
import './App.css';
import { useEffect } from 'react';
import SidebarDesktop from './Components/Sidebar/desktopSidebar';
import DesktopTopBar from './Components/Desktop Top Bar/DTB';
import CardCoin from './Components/Crypto Card/coinCard.jsx';
import NFTSection from './Components/NFT Section/nftSection';
import TransactionSection from './Components/Transaction Section/transactionSection';
import {
  Flex,
} from '@chakra-ui/react';

// ICON Imports
import BTC from './Images/BTC.svg';
import ETH from './Images/ETH.svg';
import Sushi from './Images/SushiSwap.svg';
import BNB from './Images/BNB.svg';


function App() {
  
  useEffect(() => {
    document.title = 'Crypto Watch'
  }, [])

  return (
    <>
      <SidebarDesktop />
      <DesktopTopBar />
      <Flex
      position='absolute'
      top={'60px'}
      left={'64px'}
      m={'16px'}
      gap={'8px'}
      w={'calc(100% - 64px)'}
      h={'120px'}>
        <CardCoin coinName='Bitcoin' icon={BTC} />
        <CardCoin coinName='ETH' icon={ETH} />
        <CardCoin coinName='BNB' icon={BNB} />
        <CardCoin coinName='Sushi' icon={Sushi} />
      </Flex>
      <NFTSection />
      <TransactionSection />
    </>
  );
}

export default App;
