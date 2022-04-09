

import React from 'react' ;

import Title from '../../components/Common/Title' ;
import Graph from '../../components/Landing/Graph' ;
import TokenTable from '../../components/Exchange/TokenTable' ;
import FruitBar from '../../components/Common/FruitBar';

const Landing = () => {

    return (
        <>
            <Title 
                bigTitle={"Tokenize The World With Caladex"}
                mediumTitle={"The ETH Based Decentralized Exchange"}
                smallTitle={"Guaranteed Assets / Open & Transparent / Stake & Earn"}
                isVisibleTradeButton = {true}
            />

            <FruitBar />

            <Graph />

            <TokenTable />
        </>
        
    )
}

export default Landing ;