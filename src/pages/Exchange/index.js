

import React from 'react' ;

import FruitBar from '../../components/Common/FruitBar';

import TradingWidget from '../../components/Exchange/TradingWidget';
import TokenPriceTable from '../../components/Exchange/TokenPriceTable';
import TradeHistoryTable from '../../components/Exchange/TradeHistoryTable' ;
import TokenPriceBar from '../../components/Exchange/TokenPriceBar' ;
import TokenExchangeWiget from '../../components/Exchange/TokenExchangeWidget' ;
import OrderCrpyto from '../../components/Exchange/OrderCrypto' ;
import Table1 from '../../components/Exchange/Table1' ;
import Table2 from '../../components/Exchange/Table2' ;

import {
    Grid ,
    useMediaQuery ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : theme.spacing(1) + " !important" ,
        paddingRight : theme.spacing(1) + " !important" ,
    }
}));

const Exchange = () => {
    
    const isXs = useMediaQuery("(min-width : 1320px)") ;
    const isXsContainer = useMediaQuery("(min-width : 1000px)") ;

    const classes = useStyles() ;

    return (
        <>
            <FruitBar />

            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} sm={isXsContainer ? 4 : 12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TokenPriceTable />
                        </Grid>
                        <Grid item xs={12}>
                            <TradeHistoryTable />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={isXsContainer ? 8 : 12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TokenPriceBar />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={isXs ? 8 : 12 }>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <TradingWidget />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TokenExchangeWiget />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={isXs ? 4 : 12}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Table1 />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Table2 />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <OrderCrpyto />
                </Grid>
            </Grid>
        </>
    )
}

export default Exchange ;