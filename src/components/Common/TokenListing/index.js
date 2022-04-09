

import React from 'react' ;

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root : {
        color : "black !important" , 
      
        "& .form-group" : {
            fontSize : "14px"
        } ,
        "& .modal" : {
            backdropFilter : "blur(4px)" ,
        },
        "& .modal-dialog"  : {
            width: "60%" ,
            margin: "auto" ,
            marginTop : theme.spacing(3) ,
            maxWidth: "60%"
        },
        "& .modal-dialog-centered" : {
            display: "flex" ,
            justifyContent: "center" ,
            alignItems: "center"
        },
        "& .btn-default" : {
            color : theme.palette.primary.main ,
        },
        "& .btn-default:hover" : {
            color : theme.palette.primary.main ,
            textDecoration : "underline" ,
        }
    } ,
}));
const TokenListing = () => {

    const classes = useStyles() ;
    
    return (
        <div className={classes.root}>
            <div className="modal fade" id="myModal" >
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content" style={{ borderRadius : "0px"}}>
                    
                        <div className="modal-header">
                            <span className="modal-title">Token Listing</span>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <div className="modal-body">
                            <div className='form-group'>
                                <label htmlFor = "name" >Base Token Name</label>
                                <input type="text" id="name" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="id" >Base Token ID</label>
                                <input type="text" id="id" className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="symbol" >Base Token Symbol</label>
                                <input type="text" id="symbol" className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="decimal" >Decimal</label>
                                <input type="text" id="decimal" className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="pair">Pair Type</label>
                                <input type="text" id="pair" className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="url" >Logo URL </label>
                                <input type="text" id="url" className='form-control'/>
                            </div>
                        </div>
                        
                        <div className="modal-footer" style={{display:"flex" , justifyContent:"space-between"}}>
                            <button className='btn btn-default' data-dismiss="modal" >Cancel</button>
                            <button className='btn btn-primary btn-md' >+&nbsp;&nbsp;&nbsp;Save Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenListing ;