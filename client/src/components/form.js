import { useState } from "react";
import { API_URL } from "../constants";

const Form = (props) => {
  const [contacts, setContacts] = useState({
    firstname: "",
    lastname: "",
    email: "",
    note: "",
    mobile: "",
    address: "",
  });

  const handleFirstNameChange = (event) => {
    const firstname = event.target.value;
    setContacts((contacts) => ({ ...contacts, firstname }));
  };

  const handleLastNameChange = (event) => {
    const lastname = event.target.value;
    setContacts((contacts) => ({ ...contacts, lastname }));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setContacts((contacts) => ({ ...contacts, email }));
  };

  const handleNoteChange = (event) => {
    const note = event.target.value;
    setContacts((contacts) => ({ ...contacts, note }));
  };

  const handleMobileChange = (event) => {
    const mobile = event.target.value;
    setContacts((contacts) => ({ ...contacts, mobile }));
  };
  const handleAddressChange = (event) => {
    const address = event.target.value;
    setContacts((contacts) => ({ ...contacts, address }));
  };

  //A function to handle the post request
  const postContacts = (newContacts) => {
    return fetch(`${API_URL}/api/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContacts),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addContacts(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContacts(contacts)
  };
  return (
    
        <form onSubmit={handleSubmit}>
          <fieldset>
            
              <label htmlFor="add-user-firstName" >First Name</label>
              <br />
              <input
                type="text"
                id="add-user-firstName"
                value={contacts.firstname}
                onChange={handleFirstNameChange}
              />
            

            <p>
              <label htmlFor="add-user-lastName">Last Name </label>
              <br />
              <input
                type="text"
                id="add-user-lastName"
                value={contacts.lastname}
                onChange={handleLastNameChange}
              />
            </p>

            <p>
              <label htmlFor="add-user-mobile">Mobile </label>
              <br />
              <input
                type="tel"
                id="add-user-mobile"
                value={contacts.mobile}
                onChange={handleMobileChange}
              />
            </p>

            <p>
              <label> Email </label>
              <br />
              <input
                type="email"
                id="add-user-email"
                value={contacts.email}
                onChange={handleEmailChange}
              />
            </p>

            <p>
              <label> Address </label>
              <br />
              <input
                type="text"
                id="add-user-address"
                value={contacts.address}
                onChange={handleAddressChange}
              />
            </p>

            <p>
              <label> Note </label>
              <br />
              <input
                type="text"
                id="add-user-note"
                value={contacts.note}
                onChange={handleNoteChange}
              />
            </p>
          </fieldset>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
     
  );
};
export default Form;
