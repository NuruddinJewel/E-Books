const getAllReadListfromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    if (allReadList) return JSON.parse(allReadList);
    return [];
}

const addReadListtoLocalDB = (book) => {
    const allBooks = getAllReadListfromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}


const getAllWishListfromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if (allWishList) return JSON.parse(allWishList);
    return [];
}

const addWishListtoLocalDB = (book) => {
    const allBooks = getAllWishListfromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}

export {
    getAllReadListfromLocalDB,
    addReadListtoLocalDB,
    getAllWishListfromLocalDB,
    addWishListtoLocalDB
}
