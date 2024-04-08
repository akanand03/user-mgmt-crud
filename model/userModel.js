import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumbers: {
        type: [String], // Array of strings
        required: true,
        unique:true
    },
    hobbies: { // Changed from skills to hobbies
        type: [String], // Array of strings
        required: true
    },
    address: { // Adding address field
        type: String,
        required: true
    },
    
    skills: { // Adding skills field
        type: [String], // Array of strings
        required: true
    }
});

export default mongoose.model("User", userSchema);
