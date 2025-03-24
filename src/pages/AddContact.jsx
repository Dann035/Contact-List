import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createContact, editContact } from "../services/services";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export function AddContact(props) {
  const navigate = useNavigate();
  const { idUser} = useParams();
  const { store, dispatch } = useGlobalReducer();
  // const initialData = store.contacts.find(contact => contact.id === idUser);
  const initialData = store.contacts.find(contact => contact.id === parseInt(idUser))??{};
  const [data, setData] = useState({ 
    name: '',
    email: '',
    phone: '',
    address: ''
  ,...initialData} );
  console.log(initialData);
  console.log(data);
  console.log(store.contacts);
  
  // const [data, setData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: ''
  // });
  const handleFormInput = (e) => {
    e.preventDefault();
    if(idUser){
      editContact(dispatch,data,idUser);
    }
    else{
      createContact(dispatch,data);
    }
    navigate("/");
  }
  const handleInput = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  
  return (
    <section className="container">
      <div className="box-form">
        <form className="form" onSubmit={handleFormInput}>
          <h1 className="form-title text-center mb-4">Add New Contact</h1>
          <fieldset className="form-group d-flex flex-column justify-content-center align-items-center">
            <label className="form-label fw-bold p-1" htmlFor="name">Full Name :</label>
            <input className="form-control w-50" name="name" type="text" id="fullName" value={data.name} onChange={handleInput} required/>
          </fieldset>
          <fieldset className="form-group d-flex flex-column justify-content-center align-items-center">
            <label className="form-label fw-bold p-1" htmlFor="email">Email :</label>
            <input className="form-control w-50" name="email" type="email" id="email" value={data.email} onChange={handleInput} required/>
          </fieldset>
          <fieldset className="form-group d-flex flex-column justify-content-center align-items-center">
            <label className="form-label fw-bold p-1" htmlFor="phoneNum">Phone :</label>
            <input className="form-control w-50" name="phone" type="tel" id="phoneNum" value={data.phone} onChange={handleInput} required/>
          </fieldset>
          <fieldset className="form-group d-flex flex-column justify-content-center align-items-center">
            <label className="form-label fw-bold p-1" htmlFor="address">Address :</label>
            <input className="form-control w-50" name="address" type="text" id="address" value={data.address} onChange={handleInput} required/>
          </fieldset>
          <fieldset className="text-center mt-3">
            <button className="btnSaveForm btn btn-primary me-3" type="submit">Save</button>
            <button className="btnResetForm btn btn-primary" type="reset">Reset</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
