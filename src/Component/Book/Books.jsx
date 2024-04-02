import useHook from "../../Hooks/useHook";
import Book from "./Book";


const Books = () => {
    const {data}=useHook();
    // console.log(data);
    return (
        <div className="my-20">
            <h2 className="text-neutral-900 text-4xl font-bold text-center mb-9">Books</h2>
            <div className="grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((book, index) => 
                <Book 
                key={index}
                book={book} ></Book>
                    
                )
            }

            </div>
            

            
        </div>
    );
};

export default Books;