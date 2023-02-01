import React from 'react';
import { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }
    
      const isFormFilled = () => {
        const { name, email, password } = formData;
        if(!name || !email || !password ){
          return false;
        }
        return true;
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormFilled()) {
          console.log('Form is filled, proceed with submission');
          //submit form data
        } else {
          console.log('Form is not filled');
          //show error message
        }
      }                  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit" disabled={!isFormFilled()}>Submit</button>
    </form>
  );
}

export default ContactForm;