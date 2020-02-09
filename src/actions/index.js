export function selectBook(book) {
    console.log("test test test test", book.title)
    return{
        type:'BOOK_SELECTED',
        payload: book
    }
}