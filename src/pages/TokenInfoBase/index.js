
import React from 'react' ;


import { makeStyles } from '@mui/styles';
import TokenInfoBaseTable from '../../components/TokenInfoBase/TokenInfoBaseTable';

import { 
    CardContent  ,
    Card
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(10) ,
        marginBottom : "40vh" ,
        boxShadow: "3px -4px 7px 0px lightblue !important",
        border : "1px solid lightblue" ,
        marginLeft : theme.spacing(2) + " !important" ,
        marginRight : theme.spacing(2) + " !important"
    }
}));
const TokenInfoBase = () => {

    const classes = useStyles() ;

    return (
        <Card className={classes.root}>
            <CardContent>
                <TokenInfoBaseTable />
            </CardContent>
        </Card>
    )
}

export default TokenInfoBase ;