import { useState } from  'react';

export default function App() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[errors,setErrors] = useState("")

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!name.trim()){
            validationErrors.name = "name is required"
        }
        if(!email.trim()){
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(email)){
            validationErrors.email = "email format worng"
        }

        if (!password.trim()){
            validationErrors.password = "password is mandatory"
        }else if (password.length < 3){
            validationErrors.password = "minimum length is 3"
        }

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        }
        
        
    }
    return (
        <>
       <h1>Form:</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" 
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    
                    />
                {errors.name && <div class="error">{errors.name}</div>}
            </label>
            <br />
            <label>
                E-mail: 
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                      />
                {errors.email && <div class="error">{errors.email}</div>}
            </label>
            <br />
            <label>
                Password: 
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                {errors.password && <div class="error">{errors.password}</div>}
            </label><br/><br/>
                <label>
                <button type="submit" >Submit</button>
                
                
                </label>
            </form>
        </>
                
)
        }

