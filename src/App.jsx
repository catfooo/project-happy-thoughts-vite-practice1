import React, {useState, useEffect} from 'react'

import { ThoughtForm } from 'components/ThoughtForm'
import { ThoughtList } from 'components/ThoughtList'


export const App = () => {

const[thoughts, setThoughts]=useState([])
const[newMessage, setNewMessage]=useState('')
  
  
const onNewMessageChange=(event)=>{setNewMessage(event.target.value)}

const fetchMessages=()=>{  
   fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
   .then(res=>res.json())
   .then(json=>(setThoughts(json.response))
   )
  }

useEffect(()=>{ fetchMessages()},[])

const onFormSubmit=(event)=>{event.preventDefault()


const options=  {
    method:'POST',
    headers:{'Content-Type':'application/json'
      },
    body:JSON.stringify({
      thought:newMessage
    })
  }
    fetch("https://happythoughtsapiproject.herokuapp.com/thoughts", options)
    .then(res=>res.json())
    .then(()=>fetchMessages())
    .finally(()=>setNewMessage(''))
   }


const handleLikesIncrease = (thoughtId) => {
     
const options = {
  method: 'POST',
    }
     fetch(`https://happythoughtsapiproject.herokuapp.com/thoughts/${thoughtId}/likes`, options)
    .then(res => res.json())
    .then(data => {
     fetchMessages(data)      
      })
  }

  return (
    <div>
      <ThoughtForm newMessage={newMessage} onNewMessageChange={onNewMessageChange} onFormSubmit={onFormSubmit}/>
      <ThoughtList thoughts={thoughts} onLikesIncrease={handleLikesIncrease} />
    </div>
  )
}
