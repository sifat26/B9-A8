/* eslint-disable react/prop-types */
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";



const BestBook = ({book}) => {
    const {
        bookNames,
        author,
        bookId,
        image,
        totalPages,
        tags,
        yearOfPublishing,
        publisher,
        category,
        rating,
      } = book;
    
    return (
      <div className="my-5">
      <div className="flex flex-col lg:flex-row p-6 rounded-2xl border border-neutral-900 border-opacity-20 gap-6">
        <div className="p-10 bg-neutral-900 bg-opacity-5 rounded-2xl text-center ">
          <img src={image} alt="" className="lg:h-[172px] lg:w-[130px]  " />
        </div>
        <div className="space-y-4">
          <h2 className="text-neutral-900 text-2xl font-bold">{bookNames}</h2>
          <p className="text-neutral-900 text-opacity-80 text-base font-medium">By : {author}</p>
          <div className="space-y-4">
            <div className="flex  gap-3 items-center ">
              
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="flex flex-row items-center gap-3">
                <div>
                <p className="text-neutral-900 text-base font-bold">Tag</p>
              </div>
                  {tags.map((tag, ind) => (
                <h2
                  className="text-[#23BE0A] px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl font-medium"
                  key={ind}
                >
                  #{tag}
                </h2>
              ))}
                </div>
                
              
              <div className="flex items-center gap-2">
                <SlLocationPin/>
              <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
              </div>

            </div>
              <div className="flex gap-6 text-neutral-900 text-opacity-60">
                <div className="flex gap-2 items-center">
                <GoPeople />
                    <p>Publisher : {publisher}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <MdOutlineContactPage/>
                    <p>Page {totalPages}</p>

                </div>
                
              </div>
          </div>
          <hr/>
          <div className="flex gap-3 lg:flex-row flex-col ">
            <p className="px-5 py-2.5 bg-blue-500 bg-opacity-20 rounded-3xl text-blue-500">Category: {category}</p>
            <p className="px-5 py-2.5 text-amber-400 bg-amber-400 bg-opacity-20 rounded-3xl">Rating: {rating}</p>
            
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default BestBook;