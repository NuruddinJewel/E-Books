import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from "../Cards/BookCard";

const ListedWishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    const [filteredWishList, setFilteredWishList] = useState([]);

    useEffect(() => {
        if (!wishList || wishList.length === 0) {
            setFilteredWishList([]);
            return;
        }

        let updatedList = [...wishList];

        if (sortingType === 'pages') {
            updatedList.sort((a, b) => (b.totalPages ?? 0) - (a.totalPages ?? 0));
        } else if (sortingType === 'rating') {
            updatedList.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        }

        setFilteredWishList(updatedList);
    }, [sortingType, wishList]);

    if (filteredWishList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Wish List Data Found !!</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filteredWishList.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedWishList;