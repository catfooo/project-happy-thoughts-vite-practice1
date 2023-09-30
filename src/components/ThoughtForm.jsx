import React from 'react'

export const ThoughtForm = ({newMessage,onNewMessageChange,onFormSubmit}) => {

  return (
    <form className="message-box" onSubmit={onFormSubmit}>
       <label htmlFor="sendthought">
         <h1>
         <span role="img" aria-label="heartemoji">❤️</span>Send a happy thought!
         <span role="img" aria-label="heartemoji">❤️</span>
         </h1>
       </label>
       <textarea placeholder="Happy thought goes here!"id="sendthought" value={newMessage} onChange={onNewMessageChange}/>
       <div className="main">
       <button className="button"  disabled={newMessage.length < 6 || newMessage.length > 140} type="submit"><span role="img" aria-label="heartemoji">❤️</span>Send!<span role="img" aria-label="heartemoji">❤️</span></button></div>
    </form>
  )
}