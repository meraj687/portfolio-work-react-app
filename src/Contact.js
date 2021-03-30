import React, { useState } from 'react';
import {db} from './firebase';


// function Contact(){

// return(
//  <>
//  {/* <h2 className="contact">Contact Us</h2> */}
//  <form  className="form">
//   <h1>Contact form ☎️</h1>
//   <label >Name</label>
//   <input placeholder="name"/>

//   <label>Email</label>
//   <input placeholder="email"/>

//   <label htmlFor="">Message</label>
//   <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>

//   <button type="submit">SUBMIT</button>
//  </form>
//  </>
// )

// }

const Contact=()=>{
 const[name,setName] = useState("");
 const[email,setEmail] = useState("");
 const[message,setMessage] = useState("");

 const[loader,setloader] = useState(false);

 const handleSubmit=(e)=>{
  e.preventDefault();
  setloader(true)

  db.collection('contacts').add({
   name:name,
   email:email,
   message:message,
  })
  .then(()=>{
   alert('Message has been submit 👍');
   setloader(false);
  })
  .catch((error)=>{
    alert(error.message);
    setloader(false);
  });

  setName('')
  setEmail('')
  setMessage('')
 };
 return(
  <form action=""className="form" onSubmit={handleSubmit}>
   <h1>Contact form ☎️</h1>

   <label htmlFor="">Name</label>
   <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>

   <label htmlFor="">Email</label>
   <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

   <label htmlFor="">Message</label>
   <textarea name="" id="" cols="30" rows="10" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

   <button type="submit" style={{background:loader?"#ccc":"rgb(2,2,110"}}>Submit</button>
  </form>
 )
}

export default Contact;

