

import React from 'react' ;

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        "& .btn" : {
            width : "170px" ,
            borderRadius : "0px" ,
        },
        "& .MuiGrid-container" : {
            marginLeft : "20px !important"
        }
    },
}));

const BtnGroup = (props) => {
    
    const classes = useStyles() ;

    const {
        groupID
    } = props ;

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid  item>
                    <button className='btn btn-primary'>All</button>
                </Grid>
                <Grid  item >
                    <button className='btn btn-primary' style={{width:"170px", borderRadius:"0px"}} disabled>ETH</button>
                </Grid>
                <Grid  item >
                    <button className='btn btn-primary' style={{width:"170px", borderRadius:"0px"}} disabled>USDT</button>                                
                </Grid>
            </Grid>
        </div>
    )
}

export default BtnGroup ;