

import React from 'react' ;

import {
    Card ,
    CardContent,
    Grid ,
} from '@mui/material' ;


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fruit : {
       borderRadius : "0px !important",
       "& .MuiCardContent-root" :{
        paddingTop : '1rem !important' ,
        paddingBottom : '1rem !important' ,
       }
    } ,
    fruitContent : {
        textAlign : "center" ,
        borderRadius : "0px" ,
        backgroundColor  : theme.palette.primary.main ,
    },
    fruitItem : {
        fontSize : "14px" ,
        fontFamily : "Inter,-apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif" ,
        fontWeight : "490" ,
        color : "white" ,
        cursor : "pointer" ,
        display : "flex" ,
        justifyContent : "center" ,
        alignItems : "center" ,
    },
}));
const FruitBar = () => {

    const classes = useStyles() ;

    return (
        <>
            <Card className={classes.fruit}>
                <CardContent className={classes.fruitContent}>
                    <Grid container>
                        <Grid item xs={12} sm={4} className={classes.fruitItem}>
                            Fruit Token(FRUIT) Trading Competition
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.fruitItem}>
                            NEW LISTING: Fruit Token(FRUIT)
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.fruitItem}>
                            NEW LISTING: Exenox Mobile(EXNX)
                        </Grid>
                        <Grid item xs={12} sm={2} className={classes.fruitItem}>
                            More
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
        
    )
}

export default FruitBar ;