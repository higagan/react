import { useState } from  'react';

export default function App() {
    const [todo,setTodo] = useState([]);
    const [inputVal,setInputVal] = useState('');
    

const handleAdd = () => {
     console.log("hello")
     if (inputVal.trim()){
         setTodo([...todo,inputVal])
         setInputVal('') 
     }
}
    const handleDelete = (index) => {
        const newData = todo.filter((_,i) => i !=index  )
        setTodo(newData)
    }
    return (
        <>
        <h1>ToDo:</h1>
 <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Add a new todo"
            />
            
            <button onClick={handleAdd}>Add</button>
         
                {todo.map((task, index) => (
    <h2 key={index}>{task}  <button onClick={()=>handleDelete(index)}>Delete</button></h2> 
           
))}
            </>
)
        }
