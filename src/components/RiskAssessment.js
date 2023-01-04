import axios from 'axios';
import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table';

export default function Risk() {
  const[q1, setQ1] = useState('');
  const[q2, setQ2] = useState('');
  const[q3, setQ3] = useState('');
  const[q4, setQ4] = useState('');
  const[q5, setQ5] = useState('');
  const[q6, setQ6] = useState('');
  const[q7, setQ7] = useState('');
  const[q8, setQ8] = useState('');
  const[q9, setQ9] = useState('');
  const[q10, setQ10] = useState('');
  const[q11, setQ11] = useState('');
  const[q12, setQ12] = useState('');
  const[q13, setQ13] = useState('');
  const[q14, setQ14] = useState('');
  const[q15, setQ15] = useState('');

  const onSubmit = () => {
    axios.post('https://sheet.best/api/sheets/91c63158-bf1d-4835-a713-e965251e231a/tabs/risk',
    {q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15})

  }
  return (
    <div class='grid grid-cols-1 w-4/5 mx-auto bg-white shadow-xl py-10 px-10 rounded uppercase'>
        <Form>

          <Table bordered>
            <thead>
              <tr>
                <th>
                Risk Assessment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <Form.Field>
                        <label>Have you ever been in counselling or therapy before?</label>
                        <select 
                        onChange = {(e) => setQ1(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Are you taking any prescribed medication?</label>
                        <select 
                        onChange = {(e) => setQ2(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>If 'Yes', please state:</label>
                        <textarea style={{height: '20px'}}
                        onChange = {(e) => setQ3(e.target.value)} />
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Do you have support of family and friends?</label>
                        <select 
                        onChange = {(e) => setQ4(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Are you currently experiencing overwhelming sadness, grief or depression?</label>
                        <select 
                        onChange = {(e) => setQ5(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Have you ever self-harmed or harmed others?</label>
                        <select 
                        onChange = {(e) => setQ6(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Have you ever attempted suicide or seriously considered doing so?</label>
                        <select 
                        onChange = {(e) => setQ7(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>How would you rate your sleeping habits?</label>
                        <select 
                        onChange = {(e) => setQ8(e.target.value)}
                        required>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Do you have any other concerns?</label>
                        <textarea style={{height: '20px'}}
                        onChange = {(e) => setQ9(e.target.value)} />
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>How would you rate your eating patterns?</label>
                        <select 
                        onChange = {(e) => setQ10(e.target.value)}
                        required>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Do you have any other concerns?</label>
                        <textarea style={{height: '20px'}}
                        onChange = {(e) => setQ11(e.target.value)} />
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Do you have concerns about managing anger?</label>
                        <select 
                        onChange = {(e) => setQ12(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Are you currently experiencing anxiety, panic attacks or have any phobias?</label>
                        <select 
                        onChange = {(e) => setQ13(e.target.value)}
                        required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>If 'Yes', please state:</label>
                        <textarea style={{height: '20px'}}
                        onChange = {(e) => setQ14(e.target.value)} />
                    </Form.Field>
                </td>
              </tr>
              <tr>
                <td>
                    <Form.Field>
                        <label>Is there anything else you would like to disclose that might affect the counselling?</label>
                        <textarea style={{height: '20px'}}
                        onChange = {(e) => setQ15(e.target.value)} 
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