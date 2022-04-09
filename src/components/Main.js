

import React from 'react' ;

import Header from './Layouts/Header';
import Footer from './Layouts/Footer' ;

import Routing from './Routes';

const Main = () => {
    return (
        <>
            <Header />
            <Routing />
            <Footer />
        </>
    )
}
export default Main ;