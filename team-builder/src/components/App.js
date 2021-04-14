import React, { useState }  from 'react'; // 0.
import Form from './Form';
import Team from './Team';

// 0. import state hook! and components
// 1. setup the initial values of the form inputs which start out as empty strings

// 2.A. Set state for the team members which will be a list of different members
// 2.B. Set state of form values to the initialValues object so the value for each key initializes to an empty string

// 3. Build out the form in Form.js and import it into App.js
// 4. Create an update function which will invoke the setForm function, spreading the form data and dynamically adding a [key]: value pair
// 5. Create a submit function which invokes the setTeam function, spreading the team data and appending the form data when it is submitted
// 6. Inside the submit function, invoke the setForm function passing in the initialValues object to reset the form when it is submitted
// 7. Render the <Form /> component with props
// 8. loop through the team state and return the Team component with its respective id coming from the index parameter and setting the details prop to the user parameter

const initialValues = { // 1.
  username: '',
  email: '',
  role: '',
}

export default function App() {

  const [team, setTeam] = useState([]) // 2.A.
  const [form, setForm] = useState(initialValues) // 2.B.

  const update = (name, value) => { // 4.
    setForm({...form, [name]: value })
  }

  const submit = () => { // 5. 
    setTeam([...team, form])
    setForm(initialValues) //6.
  }

  return (
    <div className="App">
      <Form form={form} update={update} submit={submit}/> {/* 7. */}

      {
        team.map((user, index) => {
        return (
          <Team key={index} details={user} /> //8.
        )          
        })

      }
    </div>
  );
}