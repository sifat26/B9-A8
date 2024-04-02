import { toast } from "react-toastify";
import { getFormLocalStorage } from "./localStorage";

export const saveToLocalStorage2 = (data) => {
  const savedData = JSON.parse(localStorage.getItem("wishList")) || [];
  const existedData = savedData.find((item) => item.bookId == data.bookId);
  const readData = getFormLocalStorage();
  const existedData2 = readData.find((item) => item.bookId == data.bookId);

  if (!existedData && !existedData2) {
    savedData.push(data);
    localStorage.setItem("wishList", JSON.stringify(savedData));
    toast.success("Added wishList");
  } else {
    if (!existedData) {
      toast.warning("Already Save in Read List");
    } else   {
      toast.warning("Already Save in Wish List");
    }
  }
};
export const getFormLocalStorage2 = () => {
  const data = JSON.parse(localStorage.getItem("wishList")) || [];
  return data;
};
