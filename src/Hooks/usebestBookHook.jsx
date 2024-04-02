import { useEffect, useState } from "react";

const useBestBookHook = () => {
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        (
            async () => {
                const response = await fetch('/bestBook.json');
                const data = await response.json()
                 console.log(data)
                setData(data);
            }
        )()
    }
    ,[])
    return {data};
};

export default useBestBookHook;