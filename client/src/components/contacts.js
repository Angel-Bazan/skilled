import { useState, useEffect } from "react";
import Form from "./form";
import { API_URL } from "../constants";

const Contacts = () => {
  const [contacts, SetContacts] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState(-1); //by default you are not editing anything so id -1; 

  const addContacts = (newContacts) => {
    SetContacts((contacts) => [...contacts, newContacts]);
  };
  const deleteContact = async (deleteId) => {
    await fetch(`${API_URL}/api/contacts/${deleteId}`, {
      method: "DELETE",
    });

    await getContacts();
  };
  const editContact = async () => {
    await fetch(`${API_URL}/api/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstname, lastname, email, mobile, note, address}),
    });

    await getContacts();
    setId(-1); //that is the function you call when you click the edit button and are done editing 
  };

  const getContacts = async () => {
    const response = await fetch(`${API_URL}/api/contacts`);
    const contact = await response.json();
    SetContacts(contact);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <section className="contacts container">
      <h2 className="list-of-contacts">List of Contacts</h2>
      <ul id="contacts" className="row justify-content-md-center list-unstyled">
        {contacts.map((contact, index) => {
          return (
            <li key={index} className="col col-sm-4 mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <br />
                  <strong>First Name:</strong>
                  {contact.firstname}
                  <br />
                  <strong>Last Name:</strong>
                  {contact.lastname} <br />
                  <strong>email:</strong>
                  {contact.email}
                  <br />
                  <strong>note:</strong>
                  {contact.note}
                  <br />
                  <strong>mobile:</strong>
                  {contact.mobile}
                  <br />
                  <strong>address:</strong>
                  {contact.address}
                  <br />
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setFirstName(contact.firstname);
                      setLastName(contact.lastname);
                      setEmail(contact.email);
                      setNote(contact.note);
                      setMobile(contact.mobile);
                      setAddress(contact.address);
                      setId(contact.id) //This will update to a non negative id value 
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">
                    <span
                      className="material-symbols-outlined"
                      onClick={() => deleteContact(contact.id)}
                    >
                      delete
                    </span>
                  </button>
                  <br />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className ={ id=== -1 ? "d-none" : "d-block"}>
        
        <label htmlFor="edit-user-firstName">First Name</label>
        <input
          id="edit-user-firstName"
          type="text"
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-user-lastName">Last Name</label>
        <input
          id="edit-user-lastName"
          type="text"
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-user-email">Email</label>
        <input
          id="edit-user-email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-user-text">Mobile</label>
        <input
          id="edit-user-text"
          type="text"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-user-note">Note</label>
        <input
          id="edit-user-note"
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="edit-user-address">Address</label>
        <input
          id="edit-user-address"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button className="btn btn-primary" onClick={editContact}>Update User</button>
      </div>
      <Form addContacts={addContacts} />
    </section>
  );
};

export default Contacts;
