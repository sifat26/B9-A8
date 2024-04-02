/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Book = ({ book }) => {
//   console.log(book);
  const { image, tags, category, rating, bookName, author,bookId } = book;
  return (
    <NavLink to={`/bookDetails/${bookId}`}>
      <div className="border p-6 rounded-2xl space-y-4 flex flex-col">
        <div className="lg:px-20 px-16 py-8 bg-[#F3F3F3] rounded-2xl">
          <img
            src={image}
            alt=""
            className="h-[450px] lg:h-[250px] w-full rounded-md"
          />
        </div>
        <div className="flex gap-3 ">
          {tags.map((tag, ind) => (
            <h2
              className="text-[#23BE0A] px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl"
              key={ind}
            >
              {tag}
            </h2>
          ))}
        </div>
        <div className="text-neutral-900 text-2xl font-bold flex-grow">{bookName}</div>
        <div className="text-neutral-900 text-opacity-80 text-base font-medium ">
          By : {author}
        </div>
        <hr className="border border-[#13131326] border-dashed " />
        <div className="flex justify-between ">
          <h4>{category}</h4>
          <div className="flex gap-2  items-center ">
            <p>{rating}</p>
            <FaRegStar />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
