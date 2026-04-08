// BookContext.jsx
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    // Mark As Read
    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.warn("This book is already marked as read!");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`);
        }
    };

    // Wish List
    const handleWishList = (currentBook) => {
        const isAlreadyRead = storedBooks.find((book) => book.bookId === currentBook.bookId);
        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);

        if (isAlreadyRead) {
            toast.warn("This book is already marked as read!");
        } else if (isExistBook) {
            toast.warn("This book is already in your Wish List!");
        } else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Wish List`);
        }
    };

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
