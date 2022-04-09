import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom' ;

import { makeStyles } from '@mui/styles';
// import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu' ;
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';

import {
    AppBar ,
    Toolbar ,
    IconButton ,
    Typography ,
    Button ,
    Hidden,
    Drawer ,
    List , 
    ListItem,
    Divider,
    Grid ,
    useMediaQuery ,
} from '@mui/material' ;

import LogoImage from "../../../assets/logo.png";

import { useWeb3React } from "@web3-react/core";
// import { ethers } from 'ethers';

// import { GREET_ADDR , ERC20_ADDR , injected , BLOCK_CONFIRMATION_THRESHOLD } from '../../../constants';
import {   injected  } from '../../../constants';

import TokenListing from '../../Common/TokenListing';
// import GREET_ABI from '../../constants/abis/greeter.json';
// import ERC20_ABI from '../../constants/abis/erc20.json' ;

// const useGreetContract = () => {
//   const { library, active } = useWeb3React();

//   return useMemo(() => {
//       if (!active) {
//         return null;
//       }
//       return new ethers.Contract(GREET_ADDR, GREET_ABI, library.getSigner());
//   }, [library, active]);
// }

// const useERC20Contract = () => {
//   const { library , active } = useWeb3React() ;

//   return useMemo(() => {
//       if(!active) {
//           return null ;
//       }

//       return new ethers.Contract(ERC20_ADDR , ERC20_ABI , library.getSigner()) ;
//   })
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow : "none !important" ,
    paddingTop : "0px !important" ,
    marginTop : "1px !important" ,
    "& .MuiAppBar-root" : {
      boxShadow : "none !important"
    },
    "& .MuiDrawer-paper": {
      width : "100% !important",
      marginTop: "60px !important" ,
      backgroundColor : theme.palette.primary.main + " !important"
    } 
  },
  appbar : {
    zIndex: theme.zIndex.drawer + 1 ,
  },
  toolbar: {
    justifyContent : "space-between" ,
    alignItems: 'flex-end',
    paddingTop: "0px !important",
    paddingLeft : "5.578px !important" ,
    backgroundColor : theme.palette.background.default,
    minHeight : "61px !important" ,
  },
  logo : {
    height : 30,
  },
  itemGroup : {
    display : "inline-flex",
  },
  itemActive : {
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid ' + theme.palette.primary.main,
    paddingTop : "5px !important" ,
  },
  itemInActive : {
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid white',
    paddingTop : "5px !important" ,
  },
  item: {
    flexGrow: 1,
    color : theme.palette.primary.main ,
    cursor : "pointer" ,
    paddingLeft : theme.spacing(2) ,
    paddingRight : theme.spacing(2) ,
    display : "flex" ,
    alignItems : "flex-end" ,
    fontSize : 14 ,
    textDecoration : 'none' ,
    fontFamily : "Montserrat, sans-serif" ,
    '&:hover' : {
      textDecoration : "none",
      color : "red",
    } ,
    '&:focus' : {
      textDecoration : "none",
      color : theme.palette.primary.main,
    } ,
  },
  partContainer : {
    display : "flex" ,
    alignItems : "center",
    justifyContent : "center" ,
  } ,
  notificationButton : {
    color : theme.palette.primary.main ,
    cursor : "pointer" ,
  } ,
  drawerItem: {
    color : theme.palette.background.default,
    cursor : "pointer" ,
    padding : "0px" ,
    textDecoration : 'none' ,
    fontWeight: 'bold' ,
    fontSize : "20px" ,
    height : "430px !important" ,
    '&:hover' : {
      textDecoration : "none",
      color : "white",
    } ,
  },
  btnWalletPanel : {
    display : "flex" ,
    justifyContent : "flex-end" ,
    alignItems : "center" ,
  } ,

}));
const Header = () => {

  // const { active, account, chainId, library, activate } = useWeb3React();
  const {  activate } = useWeb3React();
  // const [ethBalance , setEthBalance] = useState(0.0) ;

  const connectToWallet = () => {
    const ethereum = window.ethereum;

    if (!ethereum || typeof ethereum.isMetaMask === "undefined"){
        alert("MetaMask is not installed. Please install MetaMask and try again.");
        return;
    } else {
        console.log("here") ;
        alert("Your DApp is connected with MetaMask Wallet.") ;
        activate(injected);
    }
}

  const classes = useStyles();

  // const theme = useTheme() ;

  const isDrawerWalletBtn = useMediaQuery("(min-width:1265px)") ;
  const isXs = useMediaQuery("(min-width : 1316px)") ;

  const menuItems = [
      {
          name: "Exchange",
          link: '/exchange',
          index : 1 ,
      },
      {
          name: "Token Listing",
          link: '/token-listing',
          index : 2 ,
      },
      {
          name: "Token Info Base",
          link: '/token-info-base',
          index : 3 ,
      },
      {
          name: "Earn/Staking",
          link: '/earn-staking',
          index : 4 ,
      },
      {
        name: "Balances",
        link: '/balances',
        index : 5 ,
      },
      {
        name: "Orders",
        link: '/orders',
        index : 6 ,
      },
  ];

  const [isMobileDrawerOpen , setIsMobileDrawerOpen] = useState(false) ;
  const [itemIndex , setItemIndex] = useState(0) ;

  const handleMobileDrawerOpen =  () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen) ;
  }

  useEffect(() => {
    if(isMobileDrawerOpen) {
      document.body.style.overflow = "hidden" ;
    } else {
      document.body.style.overflow = "visible" ;
    }
  } , [isMobileDrawerOpen]) ;

  const goToCalhex = () => {
    window.location.href = "https://calahex.com" ;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={isXs ? 7: 5} >
              <Grid container style={{display:"flex" , alignItems : "center"}} >
                
                {/* Logo Image */}
                <Grid item xs={3}>
                  <Link to="/" onClick={() => setItemIndex(0)} className={classes.item}>
                    <img  src={LogoImage} 
                          alt='Main Logo'
                          className={classes.logo} />

                  </Link>
                </Grid>
              
              <Grid item xs={9} className={classes.itemGroup}>
                
                {/* Menu Bar */}
                <Hidden mdDown mdUp={isXs ? false : true}>
                  {/* {
                    menuItems.map((element, index) => {
                      if(element.name === "Token Listing"){
                        return(
                          <>
                            <Typography noWrap className={ itemIndex === element.index ? classes.itemActive : classes.itemInActive}>
                                <Link className={classes.item}
                                    to={element.link}
                                    onClick={() => setItemIndex(1)}
                                >
                                  {element.name}
                                </Link>
                            </Typography>
                          </>
                        )
                      }
                    })
                  } */}
                  <Typography noWrap className={ itemIndex === 1 ? classes.itemActive : classes.itemInActive}>
                      <Link className={classes.item}
                          to="/exchange"
                          onClick={() => setItemIndex(1)}
                      >
                        Exchange
                      </Link>
                  </Typography>
                  <div  className={itemIndex === 2 ? classes.itemActive : classes.itemInActive} >
                      <span  className={classes.item} data-toggle="modal" data-target="#myModal">
                        Token Listing
                      </span>
                      <TokenListing />
                  </div>
                  <Typography  noWrap className={ itemIndex === 3 ? classes.itemActive : classes.itemInActive}>
                      <Link className={classes.item}
                          to="/token-info-base"
                          onClick={() => setItemIndex(3)}
                      >
                        Token Info Base
                      </Link>
                  </Typography>
                  <Typography noWrap className={ itemIndex === 4 ? classes.itemActive : classes.itemInActive}>
                      <Link className={classes.item}
                          to="earn-staking"
                          onClick={() => setItemIndex(4)}
                      >
                        Earn Staking
                      </Link>
                  </Typography>
                  <Typography  className={itemIndex === 5 ? classes.itemActive : classes.itemInActive}  onClick={() => goToCalhex()} noWrap >
                      <span className={classes.item} onClick={() => setItemIndex(5)}>
                        Calahex
                      </span>
                  </Typography>
                </Hidden>
              </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={0.5}>

            </Grid>

            <Grid item xs={ isXs ? 4.5 : 6} className={classes.btnWalletPanel}>
                  <Hidden mdDown mdUp={isDrawerWalletBtn ? false : true}>
                
                    <Link to={"/balances"}>
                      <button className={ itemIndex === 6 ? "btn btn-primary" : "btn btn-outline-secondary"  } style={{border:"1px solid lightgray" }} onClick={() => setItemIndex(6)}>
                        Balances
                      </button>
                    </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 
                    <Link to={"/orders"}>
                      <button className={ itemIndex === 7 ? "btn btn-primary" : "btn btn-outline-secondary"  } style={{border:"1px solid lightgray" }} onClick={() => setItemIndex(7)}>
                        Orders
                      </button>
                    </Link>&nbsp;&nbsp;
               
                </Hidden>
                <NotificationsIcon className={classes.notificationButton} fontSize='16px' />
                &nbsp;&nbsp;
                <Hidden mdDown mdUp={isDrawerWalletBtn ? false : true}>
                  <Button className={classes.btn} 
                          variant="contained" edge="end" 
                          onClick={() => connectToWallet()}
                          style={{ width : isDrawerWalletBtn ? "auto !important" : "0px !important"}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                    </svg>
                    &nbsp;&nbsp;Wallet Connect
                  </Button>
                </Hidden>
              
            </Grid>

            {/* <Grid item xs={0.3} className={classes.partContainer}>
              <NotificationsNoneIcon className={classes.notificationButton} />
            </Grid> */}

            <Grid item xs={0.5} className={classes.partContainer} >
              {/* <Hidden mdDown mdUp={isDrawerWalletBtn ? false : true}>
                <Button className={classes.btn} 
                        variant="contained" edge="end" 
                        onClick={() => connectToWallet()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                  </svg>
                  &nbsp;&nbsp;Wallet Connect
                </Button>
              </Hidden> */}

              <Hidden mdUp={isXs ? true : false}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleMobileDrawerOpen}
                >
                  
                  <MenuIcon />
                  
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="right"
        open={isMobileDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List  className={classes.drawer}>
          <ListItem style={{display:"flex" , justifyContent: "flex-end" }}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleMobileDrawerOpen}
                >
                  <CloseIcon style={{color : "white"}}/>
                </IconButton>
          </ListItem>
          <Divider />
          { !isXs ? menuItems.map( element => {
                    if( element.name === "Token Listing" )
                      return (
                        <div key={element.name}>
                          <ListItem button data-toggle="modal" data-target="#myModal">
                                <span   style={{color : "white"}}>
                                  Token Listing
                                </span>
                              <TokenListing />
                          </ListItem>
                          <Divider />
                        </div>
                      )
                    else 
                      return(
                        <div key={element.name}>
                          <Link className={classes.drawerItem}
                            to={element.link}
                          >
                            <ListItem button onClick={handleMobileDrawerOpen} style={{height : "50px"}}>
                              <Typography noWrap>
                                
                                  {element.name}
                                
                              </Typography>
                            </ListItem>
                            </Link>
                          <Divider />
                        </div>
                      )
                  }) : (
                    <>
                    </>
                  )
          }
          <ListItem onClick={handleMobileDrawerOpen}>
            <Button size="large" variant="contained" style={{color:"white" , border:"1px solid white" , borderRadius : "30px"}} onClick={() => connectToWallet()}>Wallet Connect</Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header ;