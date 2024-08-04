import './Users.css';
function Users()
{
    return(
        <div className='users'>
            <h1>Search Users</h1>
            <input type='text' placeholder='Enter Name'></input>
            <input type='text' placeholder='Enter Email'></input>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th><th>Name</th><th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}
export default Users;