import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstname}, form submitted!`);
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="form-title">React Form</h1>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstname" placeholder="Enter First Name" value={formData.firstname} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastname" placeholder="Enter Last Name" value={formData.lastname} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-group">
            <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} /> Other</label>
          </div>
        </div>

        <div className="form-group">
          <label>About</label>
          <textarea name="about" placeholder="Write something about yourself..." value={formData.about} onChange={handleChange}></textarea>
        </div>

        <div className="form-buttons">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
