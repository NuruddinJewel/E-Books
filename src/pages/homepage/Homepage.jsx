import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Allbooks from './Allbooks';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Suspense fallback={<p>Loading...</p>}>
                <Allbooks />
            </Suspense>
        </div>
    );
};

export default Homepage;