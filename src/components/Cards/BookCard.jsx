import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm" >
            <figure className='p-6'>
                <img src={book.image} alt={book.bookName} className='rounded-xl h-75 w-60' />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    {book.tags.map((tag) => (
                        <div key={`${book.bookId}-${tag}`} className="badge badge-success opacity-100 font-semibold text-md">{tag}</div>
                    ))}
                </div>
                <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                <p className='font-semibold text-lg'>{book.author}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex gap-2 items-center">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;