import React, { useState } from 'react'
import Message from './Message'
import { toast } from 'react-toastify'


function Home() {
  const [name,setName]=useState("")
  const [message,setMessage] = useState("")
  const baseUrl = import.meta.env.VITE_BaseUrl;
  
  console.log(baseUrl)
  // ===========here we can use axios but here we use fetch===========

  const formHandler = (e) => {
    e.preventDefault()
    fetch(`${baseUrl}/api/greet?name=${name}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.success){
          setMessage(data.message)
          setName("")
        }else{
          toast.error(data.error)
        }
      })
      .catch(err => toast.error(err));
  }

  return (
    <div className='main'>

    <form  onSubmit={formHandler}>
      <label>
      
        <input type="text" name="name"  placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
      <br />
      <button type="submit" >Get Greeting</button>
    </form>
    <Message message={message}/>
    </div>
  )
}
export default Home