import useBestBookHook from "../Hooks/usebestBookHook";
import BestBook from "./BestBook";

const BestBooks = () => {
  const { data } = useBestBookHook();
  console.log(data);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl">Best Book</h2>
      <div className="bg-[#1313130D] p-8 rounded-lg my-4 text-lg">
        <p>Welcome to our Best Book section, where we showcase the most captivating reads that have captured the hearts and minds of readers worldwide. Each month, we carefully select a standout title that has garnered exceptional praise for its compelling narrative, unforgettable characters, and thought-provoking themes. Our featured book represents the pinnacle of literary excellence, offering readers an immersive journey into worlds both familiar and fantastical. Whether you're seeking gripping suspense, heartwarming romance, or profound insights into the human condition, our Best Book is sure to captivate and inspire. Join us as we celebrate the power of storytelling and the magic of a truly exceptional read.</p>
      </div>
      {data.map((book, index) => (
        <BestBook key={index} book={book}></BestBook>
      ))}
    </div>
  );
};

export default BestBooks;
