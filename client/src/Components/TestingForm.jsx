import React, { useState } from 'react';
import Styles from './TestingForm.module.css';
import { Button } from '@chakra-ui/react';

const TestingForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    Mo_No: '',
    dob: '',
    aadhar: '',
    address: '',
    blood: '',
    state: '',
    testing: 'PCR',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

   

    try {
      const response = await fetch('http://localhost:3000/users/testing_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Set success message
        setSubmitMessage('Data submitted successfully');
        // Reset form after successful submission
        setFormData(initialFormData);
        setTimeout(() => {
          setSubmitMessage('');
        }, 3000);
      } else {
        console.error('Error submitting data');
        // Set error message
        setSubmitMessage('Error submitting data');
        setTimeout(() => {
          setSubmitMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      // Set error message
      setSubmitMessage('Error: ' + error.message);

      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }
  };

  return (
    <div>
      {submitMessage.length > 0 && (
        <h1
          style={{
            textAlign: 'center',
            margin: '20px 0px 5px 0px',
            color: 'green',
            fontSize: '20px',
          }}
        >
          Data Successfully submitted
        </h1>
      )}
      <h1
        style={{
          textAlign: 'center',
          margin: '20px 0px 5px 0px',
          color: '#0174BE',
          fontSize: '25px',
        }}
      >
        TestingForm
      </h1>

      <form className={Styles.TestForm}>
        <div className={Styles.FormContainer}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
            />

            <label htmlFor="dob">DOB :</label>
            <input
              onChange={handleChange}
              type="Date"
              id="dob"
              name="dob"
              required
              value={formData.dob}
            />

            <label htmlFor="aadhar">Aadhaar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              maxLength="12"
              onChange={handleChange}
              required
              value={formData.aadhar}
            />

            <label htmlFor="state">State:</label>

            <select
              onChange={handleChange}
              id="state"
              name="state"
              required
              value={formData.state}
            >
              <option value="" disabled selected>
                Select your state
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
            </select>
          </div>

          <div>
            <label htmlFor="Mo_No">Mobile No :</label>
            <input
              onChange={handleChange}
              type="text"
              id="Mo_No"
              name="Mo_No"
              maxLength="10"
              required
              value={formData.Mo_No}
            />

            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
            />

            <label htmlFor="address">Address:</label>
            <input
              onChange={handleChange}
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
            />

            <label htmlFor="blood">Blood Type:</label>
            <select
              onChange={handleChange}
              id="blood"
              name="blood"
              required
              value={formData.blood}
            >
              <option value="" disabled selected>
                Select your blood type
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <h1
          style={{
            textAlign: 'center',
            margin: '20px 0px 0px 0px',
            color: 'black',
          }}
        >
          Testing Information
        </h1>
        <div className={Styles.FormContainer}>
          <div>
            <label htmlFor="testing">Test :</label>
            <select
              onChange={handleChange}
              id="testing"
              name="testing"
              required
              value={formData.testing}
            >
              <option value="" disabled selected>
                Select test type
              </option>
              <option value="PCR">PCR</option>
              <option value="Rapid Antigen">Rapid Antigen</option>
            </select>
          </div>
          <div>
            <label htmlFor="testDate">Date:</label>
            <input
              onChange={handleChange}
              type="date"
              id="testDate"
              name="testDate"
              required
            />
          </div>
        </div>
        <div className={Styles.submitbutton}>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default TestingForm;
