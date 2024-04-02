import { useEffect, useState } from "react";

const useHook = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        (
            async () => {
                const response = await fetch('/bookData.json');
                const data = await response.json()
                // console.log(data)
                setData(data);
            }
        )()
    }
    ,[])
    return {data};
};

export default useHook;