import React from 'react'

// 1. Build out the form
// 1.A. give each input a value of form.value (username, email, role)

// 2. pass in form, update, and submit props from app.js
      // form comes from the form state
      // update and submit are functions

// 3. create a handleSubmit function for the form which utilizes preventDefault() to stop reloading of the page when the form is submitted and invoke the submit() prop
// 4. Call the handleSubmit function on the form so when the form is submitted, the function gets called

// 5. create a handleChange function which pulls the name and value from the event object (destructuring) 
      // call the update function passing in the destructured name and value

export default function Form(props) {

 // STEP 2. 
  const { form, update, submit } = props
  
  // STEP 3.
  const handleSubmit = event => {
    event.preventDefault()
    submit()
  }

  // STEP 5.
  const handleChange = event => {
    const { name, value } = event.target
    update(name, value)
  }

  return (
    <div>
      <h1>TEAM MEMBERS FORM</h1>
      {/* STEP 1. FORM START */}
      <form onSubmit={handleSubmit}> {/* STEP 4. */}
        <div>
          {/* Input Username */}
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Type your name...'
            name='username'
            value={form.username}
            onChange={handleChange}
          />

          {/* Input Email */}
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Type your name...'
            name='email'
            value={form.email}
            onChange={handleChange}
          />

          {/* Select a role menu */}
          <label htmlFor='role'>Role</label>
          <select name='role' value={form.role} onChange={handleChange}>
            <option>-- Select your Role --</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Fullstack Developer</option>
            <option>UX/UI Designer</option>
          </select>

        </div>

        {/* Submit button */}
        <div>
          <button>Submit</button>
        </div>
      </form>
      {/* STEP 1. FORM END */}

    </div>
  )
}