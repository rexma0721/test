


import React from 'react' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        
    }
}));

const CustomDatePicker = () => {

    const classes = useStyles() ;
    return ( 
        <div className={classes.root}>
            <input type="date" className="form-control form-control-sm" defaultValue={new Date().toISOString().substring(0,10)} />
        </div>
    )
}

export default CustomDatePicker ;