import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Table from 'react-bootstrap/Table';
import * as React from 'react';


export default function Monitor() {

  const[gender, setGender] = useState('');
  const[nationality, setNationality] = useState('');
  const[ageGroup, setAgeGroup] = useState('');
  const[religion, setReligion] = useState('');
  const[education, setEducation] = useState('');
  const[year, setYear] = useState('');
  const[programme, setProgramme] = useState('');
  const[faculty, setFaculty] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const[source, setSource] = useState('');

  const maxOptions = 3;

  async function handleChange(event) {
    const options = [...selectedOptions];

    if (event.target.checked) {
      // Check if we have reached the maximum number of options
      if (options.length >= maxOptions) {
        // If we have, don't allow the checkbox to be checked
        event.target.checked = false;
        return;
      }
      // If we haven't, add the value to the list of selected options
      options.push(event.target.value);
    } else {
      // If the checkbox is being unchecked, remove the value from the list of selected options
      options.splice(options.indexOf(event.target.value), 1);
    }

    setSelectedOptions(options);
  }

  const onSubmit = () => {
    axios.post('https://sheet.best/api/sheets/91c63158-bf1d-4835-a713-e965251e231a/tabs/monitoring',
    {gender,
    nationality,
    ageGroup,
    religion,
    education,
    year,
    programme,
    faculty,
    option1: selectedOptions[0], // send the first option to the "option1" cell
    option2: selectedOptions[1], // send the second option to the "option2" cell,
    option3: selectedOptions[2], // send the second option to the "option3" cell,
    source})
  }

  return (
    <div class='grid grid-cols-1 w-4/5 mx-auto bg-white shadow-xl py-10 px-10 rounded uppercase'>
        <Form>

          <Table bordered>
            <thead>
              <tr>
                <th colSpan={2}>
                Monitoring
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <Form.Field>
                        <label>Gender</label>
                        <select 
                        onChange = {(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </Form.Field>
                </td>
                <td>
                    <Form.Field>
                        <label>Age Group</label>
                        <select 
                        onChange = {(e) => setAgeGroup(e.target.value)}>
                        <option value="15-19">15-19</option>
                        <option value="20-24">20-24</option>
                        <option value="25-29">25-29</option>
                        <option value="30-34">30-34</option>
                        <option value="35-39">35-39</option>
                        <option value="40-44">40-44</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>  
                    <label>Nationality</label>               
                    <select 
                    onChange = {(e) => setNationality(e.target.value)}>
                    <option value="bruneian">Bruneian</option>
                    <option value="international">International</option>
                    </select>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Religion</label>
                    <select 
                    onChange = {(e) => setReligion(e.target.value)}>
                    <option value="islam">Islam</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="christianity">Christianity</option>
                    <option value="athiest">Athiest</option>
                    <option value="others">Others</option>
                    </select>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Education</label>
                    <select 
                    onChange = {(e) => setEducation(e.target.value)}>
                    <option value="unibridge">Unibridge</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate (MSc,MA)</option>
                    <option value="phd">PhD</option>
                    </select>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Year</label>
                    <select 
                    onChange = {(e) => setYear(e.target.value)}>
                    <option value="year1">Year 1</option>
                    <option value="year2">Year 2</option>
                    <option value="year3">Year 3</option>
                    <option value="year4ormore">Year 4 or more</option>
                    </select>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Field>
                    <label>Programme</label>
                    <input placeholder="Programme" 
                    onChange = {(e) => setProgramme(e.target.value)} />
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Field>
                    <label>Faculty</label>
                    <select 
                    onChange = {(e) => setFaculty(e.target.value)}>
                    <option value="shbie">Sultan Hassanal Bolkiah Institute of Education (SHBIE)</option>
                    <option value="ubdsbe">School of Business and Economics (UBDSBE)</option>
                    <option value="fos">Faculty of Science (FOS)</option>
                    <option value="ihs">PAPRSB Institute of Health Science (IHS)</option>
                    <option value="fass">Faculty of Arts and Social Sciences (FASS)</option>
                    <option value="fit">Faculty of Integrated Technologies (FIT)</option>
                    <option value="ips">Institute of Policy Studies (IPS)</option>
                    <option value="apb">Academy of Brunei Studies (APB)</option>
                    <option value="soascis">Sultan Omar 'Ali Saifuddien Centre for Islamic Studies (SOASCIS)</option>
                    <option value="ias">Institute of Asian Studies (IAS)</option>
                    <option value="sds">School of DIgital Science (SDS)</option>
                    <option value="others">Other FICO:</option>
                    </select>
                  </Form.Field>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Form.Field>
                    <label>Reason</label>  
                  </Form.Field>
                </td>
              </tr>

              <tr>
                <td>
                  <Form.Field>
                    <label>
                      <input
                        type="checkbox"
                        value="academic"
                        checked={selectedOptions.indexOf("academic") > -1}
                        onChange={handleChange}
                      />
                      Academic
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="anxiety"
                        checked={selectedOptions.indexOf("anxiety") > -1}
                        onChange={handleChange}
                      />
                      Anxiety
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="stress"
                        checked={selectedOptions.indexOf("stress") > -1}
                        onChange={handleChange}
                      />
                      Stress
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="depression"
                        checked={selectedOptions.indexOf("depression") > -1}
                        onChange={handleChange}
                      />
                      Depression
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="relationship"
                        checked={selectedOptions.indexOf("relationship") > -1}
                        onChange={handleChange}
                      />
                      Relationship
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="bereavement"
                        checked={selectedOptions.indexOf("bereavement") > -1}
                        onChange={handleChange}
                      />
                      Bereavement
                    </label>
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>
                      <input
                        type="checkbox"
                        value="abuse"
                        checked={selectedOptions.indexOf("abuse") > -1}
                        onChange={handleChange}
                      />
                      Abuse
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="financial"
                        checked={selectedOptions.indexOf("financial") > -1}
                        onChange={handleChange}
                      />
                      Financial
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="addiction"
                        checked={selectedOptions.indexOf("addiction") > -1}
                        onChange={handleChange}
                      />
                      Addiction
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="trauma"
                        checked={selectedOptions.indexOf("trauma") > -1}
                        onChange={handleChange}
                      />
                      Trauma
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="lowSelfEsteem"
                        checked={selectedOptions.indexOf("lowSelfEsteem") > -1}
                        onChange={handleChange}
                      />
                      Low Self Esteem
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="other"
                        checked={selectedOptions.indexOf("other") > -1}
                        onChange={handleChange}
                      />
                      Other
                    </label>
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Source of Referral</label>
                    <select 
                    onChange = {(e) => setSource(e.target.value)}>
                    <option value="faculty">Faculty</option>
                    <option value="relativeorfriend">Relative/Friend</option>
                    <option value="self">Self</option>
                    <option value="other">Other</option>
                    </select>
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