import './User.css';
const User = ()=>{
    return(
        <div className='user'>
            <h1>Add User</h1>
            <input type='text' placeholder='Enter Name'></input>
            <input type='text' placeholder='Enter Email'></input>
            <input type='password' placeholder='Enter Password'></input>
            <button>Add User</button>
        </div>
    );
}

export default User;