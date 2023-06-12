import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css'

function App() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = (formData) => {
    // Perform validation and registration logic here
    // If registration is successful, setRegistrationSuccess(true)
    // Otherwise, handle the error

    // For simplicity, let's assume registration is successful if all fields are non-empty
    if (formData.firstName && formData.lastName && formData.email) {
      setRegistrationSuccess(true);
    } else {
      // Handle the error here
      console.log('Validation failed');
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <RegistrationForm onRegistration={handleRegistration} />
      {registrationSuccess && <p>Registration successful!</p>}
    </div>
  );
}

export default App;
