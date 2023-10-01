import React from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtList=({ thoughts = [], onLikesIncrease })=>{
  
   
return(
<section >
     {
     thoughts && thoughts.length > 0 && thoughts.map(thought=>(
     <div className="thought-box" key={thought._id}><p className="thought-text">{thought.message} </p>
     <div className="likes">
     <div className="heartandlikes">
     <button className={(thought.hearts === 0 ? "like-button" : "red-likebutton")} onClick={() => onLikesIncrease(thought._id)}> 
       <span className="emoji" role="img" aria-label="heart">❤️</span></button> 
       <p> x {thought.hearts}</p>
      </div> 
       <p className="date-text">
        {formatDistance(new Date(thought.createdAt), Date.now(), {addSuffix: true})}
       </p> 
     </div>
     </div>)
     )}
</section>
)}

export default ThoughtList