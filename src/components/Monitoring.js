import axios from 'axios';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
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
  const[reason, setReason] = useState('');
  const[source, setSource] = useState('');

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
    reason,
    source})

  }
  return (
    <div class='grid grid-cols-1 w-4/5 mx-auto bg-white shadow-xl py-10 px-10 rounded uppercase'>
        <Form>

          <Table bordered>
            <thead>
              <tr>
                <th colSpan={4}>
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
              <tr>
                <td>
                  <Form.Field>
                    <label>Reason</label>
                    <input placeholder="reasons" 
                    onChange = {(e) => setReason(e.target.value)} />
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