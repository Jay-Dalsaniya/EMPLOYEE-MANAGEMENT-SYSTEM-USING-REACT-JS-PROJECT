import React from 'react';
import '../App.css'; // Adjust the import path as needed
import { MdClose } from "react-icons/md";
function Formtable({ handleSubmit, handleOnChange, handleclose, rest }) {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
      
      <div className="close-btn" onClick={handleclose}>
                <MdClose />
              </div>
          <label>Name</label>
          <input type="text" name="name" value={rest.name} onChange={handleOnChange} required />
        
          <label>Email</label>
          <input type="email" name="email" value={rest.email} onChange={handleOnChange} required />
        
        
          <label>Mobile</label>
          <input type="text" name="mobile" value={rest.mobile} onChange={handleOnChange} required />
        
        <button type="submit">Submit</button>
       
      </form>
    </div>
  );
}

export default Formtable;
