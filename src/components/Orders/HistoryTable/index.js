

import React from 'react' ;

import {
    Grid, useMediaQuery ,
}   from '@mui/material' ;

import FindInPageIcon from '@mui/icons-material/FindInPage';

import CustomDatePicker from '../CustomDatePicker';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
       "& table" : {
            marginTop : theme.spacing(3) ,
       },
        "& th" : {
            fontSize : "0.625rem"
        },
        "& .MuiGrid-container" : {
            display : "flex" ,
            alignItems : "center" 
        },
    } ,
    customLabel : {
        color  : "#206bc4" ,
        fontSize : "14px" ,
        fontFamily : "Inter,-apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif"
    }
}));
const HistoryTable = () => {

    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width : 800px)") ;
    
    return (
        <div className={classes.root}>
            
            <Grid container>
                <Grid item xs={!isXs ? 12 : 5.5} >
                    <Grid container>
                        <Grid xs={2} className={classes.customLabel}>
                            Time
                        </Grid>
                        <Grid xs={4.5} >
                            <CustomDatePicker />
                        </Grid>
                        <Grid xs={1} style={{display:"flex" , justifyContent : "center"}}>
                            -
                        </Grid>
                        <Grid xs={4.5} >
                            <CustomDatePicker />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={!isXs ? 12 : 0.5} style={{marginTop : isXs ? "0px" : "15px"}}>

                </Grid>

                <Grid item xs={!isXs ? 12 : 2.5} style={{display:"flex" , justifyContent : "center"}}>
                    <Grid container>
                        <Grid xs={2} className={classes.customLabel} style={{textAlign : isXs ? "right" : "left"}}>
                            Pair
                        </Grid>
                        <Grid xs={4.5}>
                            <input type="text" className='form-control form-control-sm'  placeholder='Basic Coin'/>
                        </Grid>
                        <Grid xs={1} style={{display:"flex" , justifyContent : "center"}}>
                            /
                        </Grid>
                        <Grid xs={4.5}>
                            <input type="text" className='form-control form-control-sm' placeholder='USDT'/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={!isXs ? 12 : 3.5} style={{marginTop : isXs ? "0px" : "15px"}}>
                    <Grid container>
                        <Grid xs={2} className={classes.customLabel} style={{textAlign : isXs ? "right" : "left"}}>
                            Side
                        </Grid>
                        <Grid item xs={4.5} style={{textAlign : isXs ? "center" : "left"}} className={classes.customLabel} >
                            <select className="form-control form-control-sm ml-1">
                                <option>ALL</option>
                            </select>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={4.5}>
                            <button type='button' className='btn btn-primary btn-sm'>Search</button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
{/*             
            <Grid container>
                
                <Grid item sm={1} className={classes.customLabel}>
                    Time
                </Grid>
                <Grid item sm={2} style={{marginRight : "8px"}}>
                    <CustomDatePicker />
                </Grid>
                    -
                <Grid item sm={2} style={{marginLeft : "8px"}}>
                    <CustomDatePicker />
                </Grid>
                <Grid item sm={1} style={{textAlign:"right"}} className={classes.customLabel}>
                    Pair
                </Grid>
                <Grid item sm={1} style={{marginRight:"8px"}}>
                    <input type="text" className='form-control form-control-sm'  placeholder='Basic Coin'/>
                </Grid>
                /
                <Grid item sm={1} style={{marginLeft:"8px"}}>
                    <input type="text" className='form-control form-control-sm' placeholder='USDT'/>
                </Grid>
                <Grid item sm={1} style={{textAlign:"right"}} className={classes.customLabel}>
                    Side
                </Grid>
                <Grid item sm={1} style={{marginRight : "10px"}}>
                    <select className="form-control form-control-sm ml-1">
                        <option>ALL</option>
                    </select>
                </Grid>
                <Grid item sum={1}>
                    <button type='button' className='btn btn-primary btn-sm'>Search</button>
                </Grid>
            </Grid> */}
            <div className='table-responsive' >
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>
                                TIME
                            </th>
                            <th>
                                PAIR
                            </th>
                            <th>
                                SIDE
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                AMOUNT
                            </th>
                            <th>
                                VOLUME
                            </th>
                            <th>
                                PROGRESS
                            </th>
                            <th>
                                STATUS
                            </th>
                            <th>
                                OPERATION
                            </th>
                        </tr>
                        <tr>
                            <td colSpan={9} style={{textAlign:"center"}}>
                                <FindInPageIcon />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9} style={{textAlign : "center"}}>
                                No Data
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistoryTable ;