import * as React from 'react';

import HistoryTable from '../HistoryTable' ;

import {makeStyles} from '@mui/styles' ;

import {
    Box ,
    Tab ,
} from '@mui/material' ;

import {
    TabContext ,
    TabList ,
    TabPanel
} from '@mui/lab' ;

const useStyles = makeStyles((theme) => ({
    root : {
        border : "1px solid lightgray"
    } ,
    tabLabel : {
        fontWeight : 'bold !important' ,
    },
}));

const OrdersHistory = () => {
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
                            <Tab className={classes.tabLabel} label="Current Order" value="1" />
                            <Tab className={classes.tabLabel} label="Order History" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <HistoryTable />
                    </TabPanel>
                    <TabPanel value="2">
                        <HistoryTable />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
  );
}

export default OrdersHistory ;