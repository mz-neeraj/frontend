import { useState } from 'react';
import './User.css';
const User = ()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    function addUser(){
        console.log(name,email,password);
    }
    return(
        <div className='user'>
            <h1>Add User</h1>
            <input  type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name'></input>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email'></input>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'></input>
            <button onClick={addUser}>Add User</button>
        </div>
    );
}

export default User;