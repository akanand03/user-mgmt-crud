import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import "./add.css";

const Add = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumbers: [""],
    hobbies: ["Please select the hobby"], // Changed from skills to hobbies
    address: "", // Adding address field
    skills: ["Please select the skill"] // Adding skills field
  });
  const [hobbySelected, setHobbySelected] = useState(false); // State to track hobby selection
  const [skillSelected, setSkillSelected] = useState(false); // State to track skill selection
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...user[field]];
    newArray[index] = value;
    setUser({ ...user, [field]: newArray });
  };

  const handleAddField = (field) => {
    setUser({ ...user, [field]: [...user[field], ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hobbySelected || !skillSelected) {
      toast.error("Please select at least one hobby and skill");
      return;
    }
    try {
      await axios.post("http://localhost:8000/api/create", user);
      toast.success("User added successfully", { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const hobbyOptions = 
  ["Please select the hobby",
    "Reading", 
  "Painting", 
  "Cooking", 
  "Gardening", 
  "Playing an Instrument", 
  "Photography",
  "Hiking",
  "Traveling",
  "Writing",
  "Sculpting",
  "Calligraphy"];
  
  const skillOptions =
   ["Please select the skill",
    "Web Development",
   "Big Data Analytics",
   "Data Visualization",
    "Graphic Design",
    "Project Management",
     "Mobile App Development",
      "UI/UX Design",
       "Database Management",
       "Cloud Computing",];

  return (
    <div className='addUser'>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First Name' value={user.fname} onChange={handleChange} />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last Name' value={user.lname} onChange={handleChange} />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' value={user.email} onChange={handleChange} />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" autoComplete='off' placeholder='Address' value={user.address} onChange={handleChange} />
        </div>

        <div className="inputGroup">
          <h4>Phone Numbers</h4>
          {user.phoneNumbers.map((phoneNumber, index) => (
            <div key={index}>
              <input type="text" onChange={e => handleArrayChange('phoneNumbers', index, e.target.value)} autoComplete='off' placeholder={`Phone Number ${index + 1}`} value={phoneNumber} />
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('phoneNumbers')}>Add Phone Number</button>
        </div>
        <div className="inputGroup">
          <h4>Hobbies</h4>
          {user.hobbies.map((hobby, index) => (
            <div key={index}>
              <select onChange={e => { handleArrayChange('hobbies', index, e.target.value); setHobbySelected(true); }} value={hobby}>
                {hobbyOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          {!hobbySelected && <p>Please select at least one hobby</p>}
          <button type="button" onClick={() => { handleAddField('hobbies'); setHobbySelected(false); }}>Add Hobby</button>
        </div>
        <div className="inputGroup">
          <h4>Skills</h4>
          {user.skills.map((skill, index) => (
            <div key={index}>
              <select onChange={e => { handleArrayChange('skills', index, e.target.value); setSkillSelected(true); }} value={skill}>
                {skillOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          {!skillSelected && <p>Please select at least one skill</p>}
          <button type="button" onClick={() => { handleAddField('skills'); setSkillSelected(false); }}>Add Skill</button>
        </div>
        <div className="inputGroup">
          <button type="submit" disabled={!hobbySelected || !skillSelected}>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;