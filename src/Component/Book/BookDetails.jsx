import { useParams } from "react-router-dom";
import useHook from "../../Hooks/useHook";
import Detail from "./Detail";

const BookDetails = () => {
    const {bookId}=useParams();
    const {data}=useHook();
    const sBook=data.filter((book)=>{
        return book.bookId===Number(bookId);
    })
    console.log(sBook);
    return (
        <div>
            {
                sBook.map((book,ind)=><Detail
                key={ind}
                 book={book}>

                </Detail>)
            }
            
            
        </div>
    );
};

export default BookDetails;