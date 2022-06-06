import React, { useEffect, useState } from 'react'
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  const handleChange = value => {
    setSearchText(value)
  }

  const filterUsers = users.filter(user => {
    return Object.keys(user).some(key => {
      return user[key].toString().toLowerCase().includes(searchText);
    })
  });
 

  return (
    <div className="App">
      <input 
      type="text" 
      placeholder='Search...' 
      value = {searchText}
      onChange={e => handleChange(e.target.value)}
      />
      <UserList users={filterUsers}/>
    </div>
  );
}

export default App;
