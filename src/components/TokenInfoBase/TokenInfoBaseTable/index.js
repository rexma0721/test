import * as React from 'react';

import CustomTable from './CustomTable';
import TokenSearch from '../../Common/TokenSearch';

import {makeStyles} from '@mui/styles' ;

import {
    Box ,
    Tab ,
    Grid
} from '@mui/material' ;

import {
    TabContext ,
    TabList ,
    TabPanel
} from '@mui/lab' ;

const useStyles = makeStyles((theme) => ({
    root : {
        border : "1px solid lightgray" ,
    } ,
    tabLabel : {
        fontWeight : 'bold !important' ,
    },
    "& .css-46bh2p-MuiCardContent-root" :{
        padding : "0px !important"
    }
}));

const TokenInfoBaseTable = () => {
  const [value, setValue] = React.useState('1');
  const classes = useStyles() ;

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
                        <Grid container spacing={3}>
                            <Grid  item>
                               <button className='btn btn-primary' style={{width:"170px" , borderRadius:"0px"}}>All</button>
                            </Grid>
                            <Grid  item >
                               <button className='btn btn-primary' style={{width:"170px", borderRadius:"0px"}} disabled>ETH</button>
                            </Grid>
                            <Grid  item >
                                <button className='btn btn-primary' style={{width:"170px", borderRadius:"0px"}} disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={3}>
                            <Grid  item>
                            <button className='btn btn-success' style={{width:"170px" , borderRadius:"0px"}}>All</button>
                            </Grid>
                            <Grid  item >
                            <button className='btn btn-success' style={{width:"170px", borderRadius:"0px"}} disabled>ETH</button>
                            </Grid>
                            <Grid  item >
                                <button className='btn btn-success' style={{width:"170px", borderRadius:"0px"}} disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                    <TabPanel value="3">
                        <Grid container spacing={3}>
                            <Grid  item>
                               <button className='btn btn-secondary' style={{width:"170px" , borderRadius:"0px"}}>All</button>
                            </Grid>
                            <Grid  item >
                               <button className='btn btn-secondary' style={{width:"170px", borderRadius:"0px"}} disabled>ETH</button>
                            </Grid>
                            <Grid  item >
                                <button className='btn btn-secondary' style={{width:"170px", borderRadius:"0px"}} disabled>USDT</button>                                
                            </Grid>
                        </Grid>
                        <CustomTable />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
        
  );
}

export default TokenInfoBaseTable ;