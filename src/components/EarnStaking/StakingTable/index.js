import * as React from 'react';

import {
    Card ,
    CardContent ,
    CardHeader ,
    Divider ,
    Grid, 
    useMediaQuery,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

// import { withStyles } from '@mui/styles';

import StakingInfoList from './StakingInfoList';

// const CustomCardHeader = withStyles(theme => ({
//     root : {
//         padding : "0px !important" ,
//         border : "1px solid red" ,
//         height : "30px"
//     }
// }))(CardHeader);

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(8) ,
        boxShadow: "3px -4px 7px 0px lightblue !important",
        border : "1px solid lightblue" ,
        marginLeft :  "7% !important" ,
        marginRight : "7% !important" ,
        "& .MuiCardContent-root" : {
            padding : "0px" ,
            marginTop : "24px" ,
        },
        "& .MuiCardHeader-title" : {
            fontSize : "14px !important" ,
            color : "#232E3C" ,
            width : "100px",
            height : "36px !important" ,
            display : "flex" ,
            alignItems : "center" ,
            paddingLeft : theme.spacing(2),
            borderBottom : "1px solid #206bc4"
        } ,
        "& .MuiCardHeader-action" : {
            fontSize : "14px !important" ,
            color : "#232E3C" ,
            margin : "0px" ,
        } ,
        "& .MuiCardHeader-root" : {
            padding : "0px !important" ,
            height : "36px"
        },
        "& input" : {
        }
    } ,
    tableContainer : {
        marginTop : theme.spacing(3) ,
    },
    tableHeader : {
        backgroundColor : theme.palette.primary.main ,
        "& th" : {
            color : "white !important",
            fontWeight : "bold !important" ,
            textAlign : "center"
        }
    } ,
    tableBody : {
        "& td,th" : {
            textAlign : "center"
        }
    },
    btnGroup : {
        textAlign : "center" ,
        "& button" : {
            paddingLeft : "25px !important" ,
            paddingRight : "25px !important" ,
            fontWeight : "bold"
        },
        "& .btn-outline-warning" : {
            borderRadius : "10rem"
        },
        "& .btn-outline-warning:hover" : {
            color : "white"
        },
        "& .btn-warning" : {
            borderRadius : "10rem" ,
            color : "white"
        },
        "& .btn-warning:hover" : {
            color : "white"
        }
    }
}));

const StakingTable = () => {
    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width : 990px)") ;

    return (
        <Card className={classes.root}>
            <CardHeader
                title = "Guaranteed"
                action = {
                    <div className='input-group'>
                        <label className='input-group-prepend'>
                            <span className='input-group-text'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="10" cy="10" r="7"></circle>
                                    <line x1="21" y1="21" x2="15" y2="15"></line>
                                </svg>
                            </span>
                        </label>
                        <input type="text" className="form-control" placeholder='Search for more tokens.'/>
                    </div>
                }
            >
            </CardHeader>
            <Divider />
            <CardContent>
                <Grid container spacing={2} className={classes.btnGroup}>
                    <Grid item xs={12} sm={isXs ? 3 : 12}>
                        <button className='btn btn-warning'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                                <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                                <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                            </svg>
                            &nbsp;&nbsp;Popular Coins
                        </button>
                    </Grid>
                    <Grid item xs={12} sm={isXs ? 3 : 12}>
                        <button className='btn btn-outline-warning'  >Best for Beginners</button>
                    </Grid>
                    <Grid item xs={12} sm={isXs ? 3 : 12}>
                        <button className='btn btn-outline-warning'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="9" y1="12" x2="15" y2="12"></line>
                                <line x1="12" y1="9" x2="12" y2="15"></line>
                                <path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5"></path>
                            </svg>
                            &nbsp;&nbsp;New Listing
                        </button>
                    </Grid>
                </Grid>
                <StakingInfoList />
            </CardContent>
        </Card>
       
    );
}

export default StakingTable ;