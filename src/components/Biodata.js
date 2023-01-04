import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-date-picker';

export default function Biodata() {

  //Only allow numbers to pass through
  const numbersRegex = /^\d+$/;

  const handleNumbersKeyPress = (e) => {
    const value = e.target.value + e.key;
    if (!numbersRegex.test(value)) {
      e.preventDefault();
    }
  }

  //Only allow letters to pass through
  const lettersRegex = /^[a-zA-Z]+$/;

  const handleLettersKeyPress = (e) => {
    const value = e.target.value + e.key;
    if (!lettersRegex.test(value)) {
      e.preventDefault();
    }
  }

  //Only allow text and " @"
  const nameRegex = /^[a-zA-Z @]+$/;

  const handleNameKeyPress = (e) => {
    const value = e.target.value + e.key;
    if (!nameRegex.test(value)) {
      e.preventDefault();
    }
  }

  //Only allows numbers and letters to go through
  const numLetRegex = /^[a-zA-Z0-9]+$/;

  const handleNumLetKeyPress = (e) => {
    const value = e.target.value + e.key;
    if (!numLetRegex.test(value)) {
      e.preventDefault();
    }
  }

  //Only allow numbers and "." to go through
  const cgpaRegex = /^[0-9.]+$/;

  const handleCgpaKeyPress = (e) => {
    const value = e.target.value + e.key;
    if (!cgpaRegex.test(value)) {
      e.preventDefault();
    }
  }

  //Date of Birth function
  const handleDateChange = (date) => {
    setDob(date);
  }

  //This is the checkbox for both permanent address and contact address
  const [isPermanentChecked, setIsPermanentChecked] = useState(false);
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  function handlePermanentCheckboxChange(event) {
    setIsPermanentChecked(event.target.checked);
    setAddresstwo(livingAddress);
  }

  function handleOtherCheckboxChange(event) {
    setIsOtherChecked(event.target.checked);
    setContactAddress(livingAddress);
  }

  //Student's Detail 
  const[fullName, setName] = useState('');
  const[registrationNumber, setRegNo] = useState('');
  const[icNumber, setIc] = useState('');
  const[livingAddress, setAddress] = useState('');
  const[permanentAddress, setAddresstwo] = useState('');
  const[faculty, setFaculty] = useState('');
  const[course, setCourse] = useState('');
  const[year, setYear] = useState('');
  const[cgpa, setCgpa] = useState('');
  const[dob, setDob] = useState('');
  const[religion, setReligion] = useState(''); 
  const[country, setCountry] = useState('');
  const[race, setRace] = useState('');
  const[siblings, setSiblings] = useState('');
  const[birthOrder, setBirthOrder] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[family, setFamily] = useState('');
  const[peers, setPeers] = useState('');
  const[socialMedia, setSocialMedia] = useState('');
  const[gaming, setGaming] = useState('');
  const[youtube, setYoutube] = useState('');
  const[browsing, setBrowsing] = useState('');
  const[others, setOthers] = useState('');
  const[personalInterest, setPersonalInterest] = useState('');

  //Emergency Details
  const[contactPerson, setContactPerson] = useState('');
  const[relationship, setRelationship] = useState('');
  const[phoneNumber, setPhoneNumber] = useState('');
  const[contactAddress, setContactAddress] = useState('');
  const[contactReligion, setContactReligion] = useState('');
  const[contactCountry, setContactCountry] = useState('');
  const[contactRace, setContactRace] = useState('');
  const[occupation, setOccupation] = useState('');

  //Sends data to Google Sheet
  const onSubmit = () => {
    axios.post('https://sheet.best/api/sheets/91c63158-bf1d-4835-a713-e965251e231a',
    {fullName,
    registrationNumber,
    icNumber,
    livingAddress,
    permanentAddress,
    faculty,
    course, 
    year,
    cgpa,
    dob,
    religion,
    country,  
    race,
    siblings,
    birthOrder,
    mobileNumber,
    family,
    peers,
    socialMedia,
    gaming,
    youtube,
    browsing,
    others,
    personalInterest})

    axios.post('https://sheet.best/api/sheets/91c63158-bf1d-4835-a713-e965251e231a/tabs/emergencyContactPerson',
    {registrationNumber,
    contactPerson,
    relationship,
    phoneNumber,
    contactAddress,
    contactReligion,
    contactCountry,
    contactRace,
    occupation})

  }
  return (
    <div class='grid grid-cols-1 w-4/5 mx-auto bg-white shadow-xl py-10 px-10 rounded uppercase'>
        <Form>

          <Table>
            <thead>
              <tr style={{textAlign: 'left'}}>
                <th colSpan={4}>
                Personal Biodata
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <Form.Field>
                    <label>Please complete all the information below. All of the information will be kept confidential and will be used for counselling matters only.</label>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <Form.Field>
                    <label>Student's Details</label>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <Form.Field>
                    <label>Full Name</label>
                    <textarea 
                    style={{height: '20px'}}
                    placeholder='Full Name' 
                    onChange = {(e) => setName(e.target.value)}
                    onKeyPress={handleNameKeyPress}
                    required>
                    </textarea>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>IC No.</label>
                    <input placeholder='00123456' 
                    onChange = {(e) => setIc(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                  <Form.Field>  
                    <label>Registration Number</label>               
                    <input placeholder='22B1234' 
                    onChange = {(e) => setRegNo(e.target.value)} 
                    onKeyPress={handleNumLetKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Field>
                    <label>Client's Living Address</label>
                    <textarea
                    style={{height: '20px'}}
                    placeholder="Client's Living Address" 
                    id="living-address"
                    value={livingAddress}
                    onChange={event => setAddress(event.target.value)}
                    required>
                    </textarea>
                  </Form.Field>
                </td>
                <td colSpan={2}>
                  <Form.Field>
                    <label>Permanent Address 
                    <input
                      type="checkbox"
                      id="permanent-checkbox"
                      checked={isPermanentChecked}
                      onChange={handlePermanentCheckboxChange}
                    /> Tick if same as Living Address
                    </label>
                    <textarea
                    style={{height: '20px'}}
                    placeholder="Permanent Address" 
                    id="permanent-address"
                    value={permanentAddress}
                    onChange={event => setAddresstwo(event.target.value)}
                    disabled={isPermanentChecked}
                    required>
                    </textarea>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Faculty</label>
                    <input placeholder="FOS/SBE/IHS" 
                    onChange = {(e) => setFaculty(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Program/Course</label>
                    <input placeholder="Mathematics" 
                    onChange = {(e) => setCourse(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Year</label>
                    <input placeholder="Third" 
                    onChange = {(e) => setYear(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Current CGPA</label>
                    <input placeholder="2.15" 
                    onChange = {(e) => setCgpa(e.target.value)} 
                    onKeyPress={handleCgpaKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Date of Birth</label>
                    <DatePicker
                      onChange={handleDateChange}
                      value={dob}
                      required
                      format="dd/MM/yy"
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Religion</label>
                    <input placeholder="Muslim" 
                    onChange = {(e) => setReligion(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Country</label>
                    <input placeholder="Brunei" 
                    onChange = {(e) => setCountry(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Race</label>
                    <input placeholder="Malay" 
                    onChange = {(e) => setRace(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>No of Siblings</label>
                    <input placeholder="3" 
                    onChange = {(e) => setSiblings(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Birth Order</label>
                    <input placeholder="Birth Order" 
                    onChange = {(e) => setBirthOrder(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Mobile Phone Number</label>
                    <input placeholder="+673 7123456" 
                    onChange = {(e) => setMobileNumber(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <Form.Field>
                    <label>Social Life (How frequent you interact with others)</label>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Family</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <select 
                    onChange = {(e) => setFamily(e.target.value)}
                    required>
                      <option value="" disabled selected>Please select</option>
                      <option value="preferNotToSay">Prefer not to say</option>
                      <option value="never">Never</option>
                      <option value="seldom">Seldom</option>
                      <option value="occasionally">Occasionally</option>
                      <option value="active">Active</option>
                    </select>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Peers</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <select 
                    onChange = {(e) => setPeers(e.target.value)}
                    required>
                      <option value="" disabled selected>Please select</option>
                      <option value="preferNotToSay">Prefer not to say</option>
                      <option value="never">Never</option>
                      <option value="seldom">Seldom</option>
                      <option value="occasionally">Occasionally</option>
                      <option value="active">Active</option>
                    </select>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <Form.Field>
                    <label>Estimation of how many hours in a day you spend online on:</label>
                  </Form.Field>
                </td>               
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Social Media</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                      <input placeholder="hours/day" 
                    onChange = {(e) => setSocialMedia(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Youtube</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                      <input placeholder="hours/day" 
                    onChange = {(e) => setYoutube(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Gaming</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                      <input placeholder="hours/day" 
                    onChange = {(e) => setGaming(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Browsing</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                      <input placeholder="hours/day" 
                    onChange = {(e) => setBrowsing(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>

                </td>
                <td>

                </td>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Others</label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                      <input placeholder="hours/day" 
                    onChange = {(e) => setOthers(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Personal Interest:</label>
                  </Form.Field>
                </td>
                <td colSpan={3}>
                  <Form.Field>
                    <textarea placeholder="Please briefly describe yourself to help us to help you with some information beneficial such as your hobby, your future plan and any information about you" 
                    onChange = {(e) => setPersonalInterest(e.target.value)} 
                    required/>
                  </Form.Field>
                </td>
              </tr>

              <tr>
              <td colSpan={4}>
                  <Form.Field>
                    <label>Emergency Contact Person</label>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <Form.Field>
                    <label>Full Name</label>
                    <textarea 
                    style={{height: '20px'}}
                    placeholder='Full Name' 
                    onChange = {(e) => setContactPerson(e.target.value)}
                    onKeyPress={handleNameKeyPress}
                    required>
                    </textarea>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Relationship</label>
                    <input placeholder='Mother' 
                    onChange = {(e) => setRelationship(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                  <Form.Field>  
                    <label>Mobile Phone Number</label>               
                    <input placeholder='+673 7123456' 
                    onChange = {(e) => setPhoneNumber(e.target.value)} 
                    onKeyPress={handleNumbersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label style={{textAlign: "center"}}>Full address</label>
                    <br />
                    <label>
                    <input
                      type="checkbox"
                      id="other-checkbox"
                      checked={isOtherChecked}
                      onChange={handleOtherCheckboxChange}
                    /> Tick if same as Living Address
                    </label>
                  </Form.Field>
                </td>
                <td colSpan={3}>
                  <Form.Field>
                    <textarea style={{height: '20px'}}
                    id="other-address"
                    value={contactAddress}
                    onChange={event => setContactAddress(event.target.value)}
                    disabled={isOtherChecked} 
                    required/>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Religion</label>
                    <input placeholder="Muslim" 
                    onChange = {(e) => setContactReligion(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Country</label>
                    <input placeholder="Brunei" 
                    onChange = {(e) => setContactCountry(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Race</label>
                    <input placeholder="Malay" 
                    onChange = {(e) => setContactRace(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Occupation</label>
                    <input placeholder="Teacher" 
                    onChange = {(e) => setOccupation(e.target.value)} 
                    onKeyPress={handleLettersKeyPress}
                    required/>
                  </Form.Field>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button type='submit' onClick = {onSubmit}>Submit</Button>
      </Form>
    </div>
  )
}