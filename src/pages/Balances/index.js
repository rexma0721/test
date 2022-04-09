

import React from 'react' ;

import { makeStyles } from '@mui/styles';

import { 
    Grid ,
    useMediaQuery
} from '@mui/material';

import AddressWidget from '../../components/Balances/AddressWidget';
import EmptyWidget from '../../components/Balances/EmptyWidget';
import WalletManagement from '../../components/Balances/WalletManagement' ;


const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : theme.spacing(4),
        marginLeft : "7%",
        marginRight : "7%" , 
    },
}));

const Balances = () => {

    const classes = useStyles() ;

    const isXs = useMediaQuery("(min-width: 1285px)") ;

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item sm={isXs ? 8 : 12} xs={12}>
                        <AddressWidget />
                    </Grid>
                    <Grid item sm={isXs ? 4 : 12} xs={12}>
                        <EmptyWidget />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={12} xs={12}>
                        <WalletManagement />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Balances ;