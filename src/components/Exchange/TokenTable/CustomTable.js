import * as React from 'react';

import { makeStyles } from '@mui/styles';

import { tokensInfo } from '../../../static/tokensinfo/tokens' ;

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(2) ,
        "& th" : {
            fontSize : "0.625rem"
        },
        "& td" : {
            fontSize : "14px" ,
            fontFamily : "Inter,-apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif"
        }
    } ,
    symbol : {
        fontWeight : "bold"
    }
}));

const CustomTable = () => {
    const classes = useStyles() ;

    return (
        <div className={classes.root}>
            <div className="table-responsive">
                <table className="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <th>PAIR</th>
                            <th>LAST PRICE</th>
                            <th>24H CHANGE</th>
                            <th>24H HIGH</th>
                            <th>24H LOW</th>
                            <th>24H VOLUME</th>
                            <th>24H TOTAL</th>
                        </tr>
                        {
                            tokensInfo.map(( element , index ) => {
                                let img_url = element.Avatar
                                return (
                                    <tr key={index}>
                                        <td>
                                            <svg style={{marginBottom: "5px" , color: "grey"}} xmlns="http://www.w3.org/2000/svg" className="icon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                            </svg>
                                            &nbsp;
                                                <img src={element.Avatar} alt="No image." width="35px" height="35px"/>
                                            &nbsp;
                                            {element.Pair}
                                        </td>
                                        <td style={{color : element.State === "Up" ? "#236ec5" : "#d6393f"}}>
                                            {element.LastPrice}&nbsp;&nbsp;
                                            {element.State === "Up" ? <span className={classes.arrow}>&uarr;</span> : <span className={classes.symbol}>&darr;</span>}
                                        </td>
                                        <td style={{color : element.State === "Up" ? "#236ec5" : "#d6393f"}}>
                                            {element.State === "Up" ? "+ " : "- "}
                                            {element.Change}
                                        </td>
                                        <td>
                                            {element.High}
                                        </td>
                                        <td>
                                            {element.Low}
                                        </td>
                                        <td>
                                            {element.Volume}
                                        </td>
                                        <td>
                                            {element.Total}
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