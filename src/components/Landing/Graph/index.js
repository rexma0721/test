

import React, { useEffect , useState } from 'react' ;

// import ReactApexChart from 'react-apexcharts' ;

import {
    Card ,
    CardContent,
    Grid ,
    useMediaQuery ,
} from '@mui/material' ;

import { MiniChart } from 'react-ts-tradingview-widgets' ;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   root : {
        marginTop : theme.spacing(4) + " !important" ,
        paddingLeft : "5% !important" ,
        paddingRight : "5% !important" ,
        // "& .MuiGrid-item" : {
        //     paddingLeft : "10px" ,
        //     paddingRight : "10px" ,
        // }
   } ,
}));

const Graph = () => {

    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width : 1000px)") ;

    return (
        <>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={0.5} style={{height : isXs ? "15px" : "0px"}}>

                    </Grid>
                    <Grid item xs={12} sm={isXs ? 3.3 : 12} >
                        <MiniChart symbol='BTCUSDT' height={250} width="100%"/>
                    </Grid>
                    <Grid item xs={0.5} style={{height : !isXs ? "15px" : "0px"}}>
                        
                    </Grid>
                    <Grid item xs={12} sm={isXs ? 3.3 : 12} >
                        <MiniChart symbol='BTCUSDT' height={250} width="100%"/>
                    </Grid>
                    <Grid item xs={0.5} style={{height : !isXs ? "15px" : "0px"}}>
                        
                    </Grid>
                    <Grid item xs={12} sm={isXs ? 3.3 : 12} >
                        <MiniChart symbol='BTCUSDT' height={250} width="100%"/> 
                    </Grid>
                    <Grid item xs={0.5}>
                        
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Graph ;