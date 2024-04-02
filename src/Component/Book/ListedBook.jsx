import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";
import { getFormLocalStorage } from "../../Utility/localStorage";
import { getFormLocalStorage2 } from "../../Utility/wishList";
const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  


  const [wList,setWlist]=useState([]);
  const [sdata,setSdata]=useState([]);
  
  useEffect(()=>{
    setSdata(getFormLocalStorage("booklist"));
    setWlist(getFormLocalStorage2("wishList"));
  },[])
  
  const handleSort=(e)=>{
    if(e.target.value ==='all')
    {
      setSdata(getFormLocalStorage("booklist"));
      setWlist(getFormLocalStorage2("wishList"));

    }
    if(e.target.value ==='rating'){
     const readSort=sdata.sort((b,a)=>a.rating-b.rating);
     setSdata([...readSort]);
     const wishSort=wList.sort((b,a)=>a.rating-b.rating);
     setWlist([...wishSort]);
    }
    else if(e.target.value ==='numberOfPage'){
     const readSort=sdata.sort((b,a)=>a.totalPages-b.totalPages);
     setSdata([...readSort]);
     const wishSort=wList.sort((b,a)=>a.totalPages-b.totalPages);
     setWlist([...wishSort]);
   
    }
    else if(e.target.value ==='publishedYear'){
     const readSort=sdata.sort((b,a)=>a.yearOfPublishing-b.yearOfPublishing);
     setSdata([...readSort]);
     const wishSort=wList.sort((b,a)=>a.yearOfPublishing-b.yearOfPublishing);
     setWlist([...wishSort]);
    }

    }

  
  return (
    <div>
      <div className="bg-neutral-900 bg-opacity-5 rounded-2xl text-3xl bg-[#1313130D] py-8 font-semibold md:font-bold  w-full text-center my-9">
        <h2>Books</h2>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <select 
        onChange={handleSort}
         name="option" id="" className="text-white bg-[#23BE0A] rounded-lg outline-none p-3 ">
          <option value="all">Short By</option>
          <option value="rating">Rating</option>
          <option 
          value="numberOfPage">Number of Pages</option>
          <option value="publishedYear">Published Year</option>
        </select>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          {sdata.map((book, index) => (
            <ReadList key={index} book={book}></ReadList>
          ))}
        </TabPanel>
        <TabPanel>
          {wList.map((book, index) => (
            <WishList key={index} book={book}></WishList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
