import React from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtList=({thoughts, onLikesIncrease})=>{
  
   
return(
<section >
     {
     thoughts.map(thought=>(
     <div className="thought-box" key={thought._id}><p className="thought-text">{thought.thought} </p>
     <div className="likes">
     <div className="heartandlikes">
     <button className={(thought.likes === 0 ? "like-button" : "red-likebutton")} onClick={() => onLikesIncrease(thought._id)}> 
       <span className="emoji" role="img" aria-label="heart">❤️</span></button> 
       <p> x {thought.likes}</p>
      </div> 
       <p className="date-text">
        {formatDistance(new Date(thought.createdAt), Date.now(), {addSuffix: true})}
       </p> 
     </div>
     </div>)
     )}
</section>
)}