import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
export default function ValidationFrom() {
    const initialFormData = {
        name: '',
        email: '',
        phonenumber: '',
      };
      
    const[formData,setFormData]=useState(initialFormData);
    const[errors,setError]=useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    const validatePhone = (phonenumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phonenumber);
      };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {name,email,phonenumber}=formData;
        const newErrors={};

        if(!name.trim()){
            newErrors.name="name is required"
        }

        if(!email.trim()){
            newErrors.email="email is required";
        }
        if (!phonenumber.trim()) {
            newErrors.phonenumber = 'Phone number is required';
          } else if (!validatePhone(phonenumber)) {
            newErrors.phonenumber = 'Phone number must be 10 digits';
          }
          setError(newErrors);
        };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input placeholder="Enter name"  name="name" type="text" value={formData.name} onChange={handleChange} />
                    {errors.name && <span style={{ color: 'red' }}>{errors.email}</span>}

                </div>
                <div>
                    <label>Email:</label>
                    <input placeholder="Enter email" name="email" type="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                </div>
                <div>
                    <label>phone no:</label>
                    <input placeholder="Enter phonenumber"  name="phonenumber" type="number" value={formData.phonenumber}  onChange={handleChange} />
                    {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber}</span>}

                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>

        </div>
    )
}
