import React, { use } from 'react';
import BookCard from '../../components/Cards/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const Allbooks = () => {
    const books = use(booksPromise);

    return (
        <div className='my-8 container mx-auto'>
            <h2 className='font-bold text-2xl text-center mb-6'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {books.map(book => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Allbooks;