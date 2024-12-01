import BreadcrumbArea from '@/src/common/breadcrumb-area';
import Footer from '@/src/layout/footers/footer';
import Header from '@/src/layout/headers/header';
import React from 'react';
import Archivements from './archivements';
import TeamDetailsArea from './team-details-area';
import TeamProgress from './team-progress';

const TeamDetails = () => {
    return (
        <>
        <Header />
        <BreadcrumbArea acive_menu="team-details"  title="Team Details" />
        <TeamDetailsArea />
        <TeamProgress />
        <Archivements />
        <Footer />


            
        </>
    );
};

export default TeamDetails;