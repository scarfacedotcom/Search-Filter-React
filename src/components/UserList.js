
import User from './User'
import './UserList.css'

export default function UserList({ users }) {
  return (
    <div>
      <div className="user-list">
        <h2>Users that are Registered for GTP Class</h2>
        <table>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Country</th>
                <th>Student</th>
                <th>Favorite Programming Language</th>
                
              </tr>
        </table>
          {users.map(user => (
              <User user={user}/>
          ))}
          {users.length === 0 && <span className='display'> No Records to display </span>}
      </div>
    </div>
  )
}
