import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumbers: [""],
    hobbies: [""],
    user_Address: "",
    skills: [""]
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handlePhoneNumberChange = (index, event) => {
    const newPhoneNumbers = [...user.phoneNumbers];
    newPhoneNumbers[index] = event.target.value;
    setUser({ ...user, phoneNumbers: newPhoneNumbers });
  };

  const handleHobbyChange = (index, event) => {
    const newHobbies = [...user.hobbies];
    newHobbies[index] = event.target.value;
    setUser({ ...user, hobbies: newHobbies });
  };

  const handleSkillChange = (index, event) => {
    const newSkills = [...user.skills];
    newSkills[index] = event.target.value;
    setUser({ ...user, skills: newSkills });
  };

  const addPhoneNumber = () => {
    setUser({ ...user, phoneNumbers: [...user.phoneNumbers, ""] });
  };

  const addHobby = () => {
    setUser({ ...user, hobbies: [...user.hobbies, ""] });
  };

  const addSkill = () => {
    setUser({ ...user, skills: [...user.skills, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/update/${id}`, user);
      toast.success("User updated successfully", { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const hobbyOptions = 
  ["Reading", 
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
   ["Web Development",
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
      <Link to={"/"}>Back</Link>
      <h3>Update user</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First Name' value={user.fname} disabled />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last Name' value={user.lname} disabled />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' value={user.email} disabled />
        </div>
        <div className="inputGroup">
          <h4>Phone Numbers</h4>
          {user.phoneNumbers.map((phoneNumber, index) => (
            <div key={index}>
              <input type="text" onChange={event => handlePhoneNumberChange(index, event)} name={`phoneNumber${index}`} autoComplete='off' placeholder={`Phone Number ${index + 1}`} value={phoneNumber} />
            </div>
          ))}
          <button type="button" onClick={addPhoneNumber}>Add Phone Number</button>
        </div>
        <div className="inputGroup">
          <h4>Hobbies</h4>
          {user.hobbies.map((hobby, index) => (
            <div key={index}>
              <select onChange={event => handleHobbyChange(index, event)} name={`hobby${index}`} value={hobby} >
                {hobbyOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={addHobby}>Add Hobby</button>
        </div>
        <div className="inputGroup">
          <h4>Skills</h4>
          {user.skills.map((skill, index) => (
            <div key={index}>
              <select onChange={event => handleSkillChange(index, event)} name={`skill${index}`} value={skill} >
                {skillOptions.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          <button type="button" onClick={addSkill}>Add Skill</button>
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" autoComplete='off' placeholder='Address' value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
