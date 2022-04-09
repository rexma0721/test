
import React from 'react' ;

import Title from '../../components/Common/Title';
import StakingTable from '../../components/EarnStaking/StakingTable' ;
import { TickerTape } from 'react-ts-tradingview-widgets';

const EarnStaking = () => {

    return (
        <>
            <Title 
                bigTitle = {"Caladex Earn/Staking"}
                mediumTitle = {"Caladex Staking, dedicated to increasing user staking income"}
                smallTitle = {"Simple & Secure. Search popular coins and start earning."}
                isVisibleTradeButton = {false}
            />
            
            <TickerTape />

            <StakingTable />
        </>
    )
}

export default EarnStaking ;