#FormValidation.js
import React, { useState } from 'react'
import './FormValidation.css'

function FormValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password:'',
        confirmPassword:'',
    })


    const [errors,setErrors] = useState({});
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);


        if(Object.keys(newErrors).length===0)
        {
            //Form Submit
            alert("Form Submitted Successfully!!!");
        }
        else
        {
            alert("Form Submission Failed due to Unresolved Errors!!!");
        }  
    }


    const validateForm = (data) =>{
        const errors ={};
        if(!data.username.trim()){
            errors.username ="Username is Required";
        }
        else if(data.username.length < 4){
            errors.username ="Username must be Atleast 4 Characters";
        }
        if(!data.email.trim()){
            errors.email ="Email is Required";
        }
        else if(!/\S+@\S+\.\S+/.test(data.email)){
            errors.email ="Invalid Email Id!";
        }
        if(!data.password.trim()){
            errors.password ="Password is Required";
        }
        else if(data.password.length < 8){
            errors.password ="Username must be Atleast 8 Characters";
        }
        if(data.confirmPassword !== data.password){
            errors.confirmPassword="Passwords do not match!";
        }
        return errors;
    }


  return (
   
    <form onSubmit={handleSubmit}>
        <h1><i>Form Validation</i></h1>
        <div>
            <label>Username :</label>
            <br></br>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username &&(
                <span className='error-message'>{errors.username}</span>
            )}
        </div>
        <div>
            <label>Email :</label>
            <br></br>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email &&(
                <span className='error-message'>{errors.email}</span>
            )}
        </div>
        <div>
            <label>Password :</label>
            <br></br>
            <input type="text" name="password" value={formData.password} onChange={handleChange} />
            {errors.password &&(
                <span className='error-message'>{errors.password}</span>
            )}
        </div>
        <div>
            <label>Confirm Password :</label>
            <br></br>
            <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword &&(
                <span className='error-message'>{errors.confirmPassword}</span>
            )}
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>

  )
}

export default FormValidation;


//FormValidation.css

/* Basic Styling */
form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

div {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #555;
  display: block;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  padding-right: 0px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}

input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Error Styling */
.error-message {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 5px;
}

.error-message::before {
  content: "⚠️ ";
  font-weight: bold;
}

