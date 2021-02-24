import React, { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: ""
  });
  

  function handleNameChange(event) {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    setPerson({
      ...person,
      [name]: value
    })
    console.log(person)
  }



  return (
    <form onSubmit ={handleNameChange} >
      <input type="text" onChange={handleNameChange} name = "firstName" value={person.firstName} placeholder ="name" />
      <input type="text" onChange={handleNameChange} name = "lastName" value={person.lastName}  placeholder = "last name"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
