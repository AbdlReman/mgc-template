import BreadcrumbArea from '@/src/common/breadcrumb-area';
import Footer from '@/src/layout/footers/footer';
import Header from '@/src/layout/headers/header';
import React from 'react';
import CheckoutArea from './checkout-area';

const Checkout = () => {
    return (
        <>
           <Header /> 
           <BreadcrumbArea acive_menu="Terms"  title="Terms & Conditions" />
            <CheckoutArea />
           <Footer tp_border={true} />
        </>
    );
};

export default Checkout;