

import React from 'react' ;

import {stakingInfo} from '../../../static/tokensinfo/stakinginfo.js' ;

import { makeStyles } from '@mui/styles';

import {
    Button
} from '@mui/material' ;

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(4) + " !important" ,
        "& button" : {
            color : "white" ,
            width : "130px" ,
            fontWeight : "bold"
        },
        "& th" : {
            fontSize : "0.625rem" ,
            color : "#656D77"
        },
        "& td" : {
            fontSize : "14px" ,
            fontFamily : "Inter,-apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif"
        }
    },
    actionBtn : {
        backgroundColor : "#f59f00 !important"
    }
})) ;

const StakingInfoList = () => {

    const classes = useStyles() ;

    return (
        <div className={classes.root}>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>
                                COIN
                            </th>
                            <th>
                                PRODUCT
                            </th>
                            <th>
                                EST.APY
                            </th>
                            <th>
                                DURATION
                            </th>
                            <th>
                                STATE
                            </th>
                        </tr>
                        {
                            stakingInfo.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={element.Avatar} alt="no image." width="35px" height="35px"/>
                                            &nbsp;
                                            {element.Coin}
                                        </td>
                                        <td className={element.Product === "Staking" ? "text-danger" : ""}>
                                            {element.Product}
                                        </td>
                                        <td className={element.Est === "--" ? "text-primary" : "text-success"}>
                                            {element.Est}
                                        </td>
                                        <td>
                                            {element.Duration}
                                        </td>
                                        <td>
                                            <Button variant='contained' className={classes.actionBtn}>{element.Action}</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StakingInfoList ;