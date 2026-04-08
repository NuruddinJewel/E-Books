// // import React, { use } from 'react';
// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// // const booksPromise = fetch('/booksData.json').then(res => res.json());

// const BookDetails = () => {
//     const { bookId: bookParamsId } = useParams()
//     console.log(typeof bookParamsId, 'bookId')


//     // const books = use(booksPromise)
//     // console.log(books, 'books')
//     const books = useLoaderData();
//     console.log(books, "books");
//     const expectedBook = books.find(book => book.bookId === Number(bookParamsId))
//     // console.log(expectedBook, "expectedBook");
//     const { bookId, bookName, author, image, review, totalpages, rating, category, tags, publisher, yearofPublishing } = expectedBook;
//     return (
//         <div className="card lg:card-side bg-base-100 shadow-sm">
//             <figure>
//                 <img
//                     src={image}
//                     alt="Album"
//                     className='h-100' />
//             </figure>
//             <div className="card-body space-y-3">
//                 <h2 className="card-title text-2xl">{bookName}</h2>
//                 <h2 className="card-title">By: {author}</h2>
//                 <p className='py-2 border-y-2'>{category}</p>
//                 <p>Review: {review}</p>
//                 {
//                     <div className='flex items-center gap-2'>
//                         {tags.map((tag) => (
//                             <div key={`${bookId}-${tag}`} className="badge badge-success opacity-100 font-semibold text-md">{tag}</div>
//                         ))}
//                     </div>
//                 }
//                 <p>Click the button to listen on Spotiwhy app.</p>
//                 <div className="card-actions  border-t space-y-3">
//                     <div className='flex justify-between items-center gap-2'>
//                         <span>Number of pages:{totalpages} </span>

//                     </div>
//                     <div className='flex justify-between items-center gap-2'>
//                         <span>Publisher:{publisher} </span>

//                     </div>
//                     <div className='flex justify-between items-center gap-2'>
//                         <span>Year of Publishing:{yearofPublishing} </span>

//                     </div>
//                     <div className='flex justify-between items-center gap-2'>
//                         <span>Rating:{rating} </span>

//                     </div>
//                     <div className='flex items-cneter gap-2'>
//                         <button className="btn btn-primary">Read</button>
//                         <button className="btn btn-primary">Wishlist</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookDetails;

// BookDetails.jsx
import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    const books = useLoaderData();

    const { handleMarkAsRead, handleWishList } = useContext(BookContext);


    const expectedBook = books.find(book => book.bookId === Number(bookParamsId));

    if (!expectedBook) {
        return <p className='text-center text-red-500'>Book not found!</p>;
    }

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto">
            <figure>
                <img src={image} alt={bookName} className='h-160 flex-1 bg-gray-100' />
            </figure>
            <div className="card-body space-y-3 flex-1">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-2 border-y-2'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex items-center gap-2'>
                    {tags.map((tag) => (
                        <div key={`${bookId}-${tag}`} className="badge badge-success opacity-100 font-semibold text-md">{tag}</div>
                    ))}
                </div>
                <div className="border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number of pages: {totalPages}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: {rating}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="btn btn-primary" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                        <button className="btn btn-secondary" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;