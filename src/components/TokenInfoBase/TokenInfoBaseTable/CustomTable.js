import * as React from 'react';

import { makeStyles } from '@mui/styles';

import tokensBaseInfo from '../../../static/tokensinfo/baseinfo.json' ;

import TokenListing from '../../Common/TokenListing';

const useStyles = makeStyles((theme) => ({
    root : {
        symbol : {
            fontWeight : "bold"
        },
        "& th" : {
            fontSize : ".625rem" ,
        },
        "& .css-46bh2p-MuiCardContent-root" :{
            padding : "0px !important"
        }
    }
}));

const CustomTable = () => {
    const classes = useStyles() ;

    return (
        <div className={classes.root}>
            <div className='table-responsive'>
                <table className="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <th>TOKEN NAME</th>
                            <th>TOKEN SYMBOL</th>
                            <th>PAIR TYPE</th>
                            <th>TOKEN ADDRESS</th>
                            <th>LOGO URL</th>
                            <th>ACTION</th>
                        </tr>
                        {
                            tokensBaseInfo.map(( element , index ) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {element.Name}
                                        </td>
                                        <td style={{color : "#206BC4"}}>
                                            {element.Symbol}
                                        </td>
                                        <td style={{color : "#206BC4"}}>
                                            {element.Pair}
                                        </td>
                                        <td>
                                            {element.Address}
                                        </td>
                                        <td>
                                            {element.Logo}
                                        </td>
                                        <td>
                                            <button type="button" className='btn btn-sm btn-primary'  data-toggle="modal" data-target="#myModal">
                                                <svg style={{margin: "0px"}} xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <circle cx="12" cy="12" r="2"></circle>
                                                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                                                </svg>
                                            </button>&nbsp;&nbsp;
                                               
                                            <button type="button" className='btn btn-sm btn-success'>
                                                <svg style={{margin: "0px"}} xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                    <line x1="9" y1="7" x2="10" y2="7"></line>
                                                    <line x1="9" y1="13" x2="15" y2="13"></line><line x1="13" y1="17" x2="15" y2="17"></line>
                                                </svg>
                                            </button>
                                            <TokenListing />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CustomTable ;