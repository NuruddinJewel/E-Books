import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Allbooks from './Allbooks';
import { BookContext } from '../../Context/BookContext';

const Homepage = () => {
    // const bookContext = useContext(BookContext)
    // console.log(bookContext, "bookContext");
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