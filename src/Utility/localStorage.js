import { toast } from "react-toastify";

export const saveToLocalStorage =(data) => {
    const savedData = JSON.parse(localStorage.getItem('booklist')) || [];
    const existedData=savedData.find((item)=>item.bookId==data.bookId);
    
    if(!existedData){
        savedData.push(data);
        localStorage.setItem('booklist',JSON.stringify(savedData));
        toast.success("Added in Read List")
    } 
    else{
        toast.warning('Already Save In Read List');
    }
};
export const getFormLocalStorage =()=>{
    const data=JSON.parse(localStorage.getItem("booklist"))||[];
    return data;
};