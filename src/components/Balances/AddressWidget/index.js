

import React from 'react' ;

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { 
    Card ,
    CardContent,
    Grid ,
    FormLabel ,
    useMediaQuery ,
    Button
} from '@mui/material';

import {
    MDBContainer ,
    MDBInputGroup,
} from "mdbreact";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { makeStyles } from '@mui/styles';

const BootstrapTooltip = styled( ({ className, ...props }) => (

    <Tooltip {...props} arrow classes={{ popper: className }} />
    ) ) ( ({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        },
    }));

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiPaper-root" : {
            border : "1px solid lightgray" ,
        } ,
        "& .MuiGrid-root" :{
            textAlign : "center"
        }
    },
    sendBtn : {
        backgroundColor : "#206bc4 !important" ,
    },
    receiveBtn : {
        backgroundColor : "#f76707 !important"
    },
    toolTip : {
        color : "white" ,
        position : "absolute",
        right : "0px" ,
        padding : "5px" ,
        opacity : "0"
    },
}));


const AddressWidget = () => {

    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width : 645px)") ;

    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={1}>
                            <FormLabel>
                                <AccountCircleOutlinedIcon />
                            </FormLabel>
                        </Grid>
                        <Grid item xs={isXs ? 6 : 11} >
                            <MDBContainer>
                                <MDBInputGroup
                                    containerClassName="mb-3"
                                    append={
                                        <BootstrapTooltip title="Copy" placement="right">
                                            <span className='input-group-text'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                                                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                                                </svg>
                                            </span>
                                        </BootstrapTooltip>
                                    }
                                    inputs={
                                        <input type="text" className="form-control"  id="address" />
                                    }
                                />
                            </MDBContainer>
                        </Grid>
                        <Grid item xs={isXs ? 4 : 12} >
                            <Grid container>
                                <Grid item xs={6}>
                                    <Button variant="contained" className={classes.sendBtn}>Send</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" className={classes.receiveBtn}>Receive</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={1} className={classes.btnContainer}>
                        </Grid> */}
                        <Grid item xs={1}>

                        </Grid>
                        {/* <Grid item sm={isXs ? 3 : 9.5} xs={9.5} className={classes.btnContainer} style={{textAlign : isXs ? "" : "right"}}>
                            <Button variant="contained" className={classes.sendBtn}>Send</Button>
                        
                            <Button variant="contained" className={classes.receiveBtn}>Receive</Button>
                        </Grid> */}
                    </Grid>

                    <Grid container style={{marginTop : isXs ? "0px" : "15px"}}>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={6} style={{textAlign : "left"}}>
                            <MDBContainer>
                                <span className="text-muted" style={{fontSize:"0.83333rem" , fontWeight:"bold"}}>
                                    Estimated Value
                                </span>
                            </MDBContainer>
                        </Grid>
                        <Grid item xs={5}>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddressWidget ;