

import React from 'react' ;

import {
    Card,
    CardContent ,
    Divider ,
    ButtonGroup ,
    Button ,
    Grid,
    useMediaQuery
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

import { walletInfo } from '../../../static/tokensinfo/walletinfo.js' ;

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(3) ,
        border : "1px solid lightgray" ,
        "& th" : {
            fontSize : "0.625rem"
        },
        "& .MuiCardContent-root" : {
            padding : "0px",
        }
    },
    titleContainer : 
    {
        marginTop : "15px" ,
        marginBottom : "15px" ,
        paddingLeft : "20px" ,
        paddingRight : "20px"
    } ,
    titleItem : {
        display : "flex" ,
        alignItems : 'center'
    },
    title : {
        color : "#656D77" ,
        fontSize : "14px"
    },
    action : {
        color : "#656D77" ,
        fontSize : "14px" ,
        display : "flex" ,
        alignItems : "center"
    },
    btnDeposit : {
        backgroundColor : "#f76707 !important"
    },
    btnWithDraw : {
        backgroundColor : "#206bc4 !important"
    } ,
    btnSendTransfer : {
        backgroundColor : "#4299e1 !important"
    }
}));

const WalletManagement = () => {

    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width :730px)");

    return (
        <div className={classes.root}>
            <Card>
                {/* <CardHeader
                    title = {
                        <div className={classes.title}>
                            <input type="checkbox" style={{marginRight : "15px"}}/>
                            Hide zero checkbox
                        </div>
                    }

                    action = {
                        <div className={classes.action}>
                            <div className='input-group' >
                                <label htmlFor='search' style={{marginRight:"10px"}}>Search :</label>
                                <input className='form-control form-control-sm' type='text' id='search' />
                            </div>
                        </div>
                    }
                >

                </CardHeader>
                <Divider /> */}
                <Grid container className={classes.titleContainer}>
                    <Grid item xs={isXs ? 6 : 12} className={classes.titleItem}>
                        <div className={classes.title}>
                            <input type="checkbox" style={{marginRight : "15px"}}/>
                            Hide zero checkbox
                        </div>
                    </Grid>
                    <Grid item xs={3} style={{height : isXs ? "0px" : "15px"}}>

                    </Grid>
                    <Grid item xs={isXs ? 3 : 12} >
                        <div className={classes.action} >
                            <div className='input-group d-flex align-items-center' >
                                <label htmlFor='search' style={{marginRight:"10px"}}>Search :</label>
                                <input className='form-control form-control-sm' type='text' id='search' />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Divider />
                <CardContent>
                    <div className='table-responsive'>
                        <table className='table table-striped'>
                            <tbody>
                                <tr>
                                    <th>
                                        TOKEN
                                    </th>
                                    <th>
                                        WALLET BALANCE
                                    </th>
                                    <th>
                                        CALADEX BALANCE
                                    </th>
                                    <th>
                                        ON ORDERS
                                    </th>
                                    <th>
                                        VALUE IN USD
                                    </th>
                                    <th>
                                        OPERATION
                                    </th>
                                </tr>
                                {
                                    walletInfo.map((element, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <img src={element.Avatar} width="35px" height="35px" alt="something" />&nbsp;{element.Token}
                                                </td>
                                                <td>
                                                    {element.WalletBalance}
                                                </td>
                                                <td>
                                                    {element.CaladexBalance}
                                                </td>
                                                <td>
                                                    {element.Orders}
                                                </td>
                                                <td>
                                                    {element.Eth} ETH / {element.Usd} USD
                                                </td>
                                                <td>
                                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                                        <Button className={classes.btnDeposit}>Deposit</Button>
                                                        <Button className={classes.btnWithDraw}>Withdraw</Button>
                                                        <Button className={classes.btnSendTransfer}>Send/Transfer</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default WalletManagement ;