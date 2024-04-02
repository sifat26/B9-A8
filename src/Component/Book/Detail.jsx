/* eslint-disable react/prop-types */
import { saveToLocalStorage } from "../../Utility/localStorage";
import { saveToLocalStorage2 } from "../../Utility/wishList";

const Detail = ({ book }) => {
  // console.log(book);
  const { image, tags, category, rating,publisher, totalPages,bookName, author, yearOfPublishing,review } = book;
  const handleRead = () => {
    // console.log("Read");
    saveToLocalStorage(book);
  };
  const handleWish = () => {
    saveToLocalStorage2(book);
  };
  return (
    <div className="lg:grid lg:grid-cols-3  gap-12 my-10 flex flex-col">
      <div className="">
        <img
          src={image}
          alt=""
          className=" w-full h-full object-cover rounded-lg p-4 shadow-lg bg-[#F3F3F3]"
        />
      </div>
      <div className="flex flex-col col-span-2  justify-around space-y-6">
        <h3 className="text-neutral-900 text-4xl font-bold">{bookName}</h3>
        <p className="text-neutral-900 text-opacity-80 text-xl">By: {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p>
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div>
          <div className="flex gap-3 items-center">
            <div>
              <p className="text-neutral-900 text-base font-bold">Tag</p>
            </div>
            {tags.map((tag, ind) => (
              <h2
                className="text-[#23BE0A] px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl"
                key={ind}
              >
                #{tag}
              </h2>
            ))}
          </div>
        </div>
        <hr />
        <div className="mt-4 grid grid-cols-3">
          <div className="space-y-3 text-[#131313B2]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="col-span-2 space-y-3">
            <p className="text-[#131313] font-semibold">{totalPages}</p>
            <p className="text-[#131313] font-semibold">
              {publisher}
            </p>
            <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
            <p className="text-[#131313] font-semibold">{rating}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleRead}
            className="px-6 py-2 rounded-lg border border-neutral-900 border-opacity-30"
          >
            Read
          </button>
          <button onClick={handleWish} className="bg-[#50B1C9] btn text-white">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
