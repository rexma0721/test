import * as React from 'react';

import CustomTable from './CustomTable';
import TokenSearch from '../../Common/TokenSearch';

import {makeStyles} from '@mui/styles' ;

import {
    Box ,
    Tab ,
    Grid ,
    useMediaQuery
} from '@mui/material' ;

import {
    TabContext ,
    TabList ,
    TabPanel
} from '@mui/lab' ;

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(5) ,
        marginLeft : "5% !important" ,
        marginRight : "5% !important" ,
        border : "1px solid lightgray" ,
        "& .MuiTabPanel-root" :{
            padding : "0px",
        },
        "& .MuiGrid-container" : {
            marginTop : "0px" ,
            marginLeft : theme.spacing(2)
        },
        "& .btn" : {
            width : "170px" ,
            borderRadius : "0px" ,
        }
    } ,
    tabLabel : {
        fontWeight : 'bold !important' ,
    },
    btnGroup : {
        marginTop : "20px !important" ,
        marginLeft : "5px !important"
    }
}));

const TokenTable = () => {
  const [value, setValue] = React.useState('1');
  const classes = useStyles() ;

  const isXs = useMediaQuery("(min-width : 640px)") ;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className={classes.root}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab className={classes.tabLabel} label="Favourite" value="1" />
                            <Tab className={classes.tabLabel} label="Top Volume" value="2" />
                            <Tab className={classes.tabLabel} label="Top Gainers" value="3" />
                            <TokenSearch />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Grid container className={classes.btnGroup} spacing={"10px"}>
                            <Grid  item xs={isXs ? "auto" : 12}>
                               <button className='btn btn-primary' >All</button>
                            </Grid>
                            <Grid  item xs={isXs ? "auto" : 12}>
                               <button className='btn btn-primary' disabled>ETH</button>
                            </Grid>
                            <Grid  item xs={isXs ? "auto" : 12}>
                                <button className='btn btn-primary' disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container className={classes.btnGroup} spacing={"10px"}>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                               <button className='btn btn-success' >All</button>
                            </Grid>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                               <button className='btn btn-success'  disabled>ETH</button>
                            </Grid>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                                <button className='btn btn-success' disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                    <TabPanel value="3">
                        <Grid container className={classes.btnGroup} spacing={"10px"}>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                               <button className='btn btn-secondary' >All</button>
                            </Grid>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                               <button className='btn btn-secondary'  disabled>ETH</button>
                            </Grid>
                            <Grid  item xs={!isXs ? 12 : "auto"}>
                                <button className='btn btn-secondary' disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
        
  );
}

export default TokenTable ;