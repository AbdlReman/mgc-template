import React from 'react';
import SEO from '../common/seo';
import HomeSix from '../components/homes/home-6';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Gencio - Portfolio / CV"} />
            <HomeSix />
        </Wrapper>
    );
};

export default index;