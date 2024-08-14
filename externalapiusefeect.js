import { useState,useEffect,  } from  'react';

export default function App() {
const [api,setApi] = useState([])
useEffect(()=>{
       const data = async () =>{
           const mydata=await fetch('https://jsonplaceholder.typicode.com/posts')
           const res = await mydata.json()
           setApi(res);
       }
    data();
},[]);
       return (
        <>
    <h3>data</h3>
            <ul>
        { api.map(data=> (
            <li >{data.id}  {data.title}</li>
        ))}
            </ul>
        </>
                
)
}

