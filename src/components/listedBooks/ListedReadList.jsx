import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from "../Cards/BookCard";

const ListedReadList = ({ sortingType }) => {
    const { storedBooks } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState([]);

    // useEffect(() => {
    //     if (!storedBooks || storedBooks.length === 0) {  
    //         setFilteredReadList([]);
    //         return;
    //     }





    //     let updatedList = [...storedBooks];  // 
    //     if (sortingType === 'pages') {
    //         updatedList.sort((a, b) => b.totalPages - a.totalPages);  // 
    //     } else if (sortingType === 'rating') {
    //         updatedList.sort((a, b) => b.rating - a.rating);  // 
    //     }

    //     setFilteredReadList(updatedList);  // 
    // }, [sortingType, storedBooks]);  // 

    useEffect(() => {
        if (!storedBooks || storedBooks.length === 0) {
            setFilteredReadList([]);
            return;
        }

        console.log("Sample book fields:", storedBooks[0]);

        let updatedList = [...storedBooks];

        if (sortingType === 'pages') {
            updatedList.sort((a, b) => (b.totalPages ?? 0) - (a.totalPages ?? 0));
        } else if (sortingType === 'rating') {
            updatedList.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        }

        setFilteredReadList(updatedList);
    }, [sortingType, storedBooks]);





    if (filteredReadList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Read List Data Found !!</h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filteredReadList.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;