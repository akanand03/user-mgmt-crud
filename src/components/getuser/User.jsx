import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from 'react-router-dom'

const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchData();

  }, [])

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/${userId}`);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
      toast.success("User deleted successfully", { position: 'top-right' });
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  }

  return (
    <div className='userContainer'>
      <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Phone Numbers</th>
              <th>User Address</th>
              <th>Hobbies</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.fname} {user.lname}</td>
                  <td>{user.email}</td>
                  <td>{(user.phoneNumbers || []).join(', ')}</td>
                  <td>{<td>{user.address}</td>}</td>
                  <td>{(user.hobbies || []).join(', ')}</td>
                  <td>{(user.skills || []).join(', ')}</td>
                  <td className='actionButtons'>
                    <button onClick={() => deleteUser(user._id)} className="deleteButton"><i className="fas fa-trash-alt"></i> Delete</button>
                    {/* Added a span with margin-right for spacing */}
                    <span style={{ marginRight: '8px' }}></span>
                    <Link to={`/edit/${user._id}`} className="editButton"><i className="fas fa-edit"></i> Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User;
