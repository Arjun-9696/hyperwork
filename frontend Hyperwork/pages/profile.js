import { useState } from "react"


const Profile = () => {
    const [name,setName]=useState("")
    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/profile', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
  return (
    <div>
          <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name"  />
              <button type="submit">Enter</button>
        </form>
    </div>
  )
}

export default Profile