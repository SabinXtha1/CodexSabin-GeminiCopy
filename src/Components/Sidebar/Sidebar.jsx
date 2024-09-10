import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
function Sidebar() {
  const [extended, setextended] = useState(false)
   const { prePrompt,
    onSent,
    setrecentprompt,newChart}= useContext(Context);
    const loadPrompt= async (prompt)=>{
      setrecentprompt(prompt)
     await onSent(prompt)
    }

  return (
    <>
     <div className='sidebar'>
        <div className="top">
      <img className='menu' src={assets.menu_icon} onClick={()=>setextended(!extended)
      }/>
      <div onClick={()=>{
   newChart()
      }} className='new-chat'>
        <img src={assets.plus_icon} alt=''/>
       {extended?<p>New Chat</p>:null}

      </div>
      {extended?
      <div className='recent'>
        <p className='recent-title'>Recent</p>{
          prePrompt.map((item,i)=>{
           return <>
             <div key={i} onClick={()=>{
              loadPrompt(item)
             }} className="recent-entry">
            <img src={assets.message_icon} alt=''/>
            <p>{item.slice(0,18)}..</p>
        </div></>
          })
        }
        {/* <div className="recent-entry">
            <img src={assets.message_icon} alt=''/>
            <p> What is React...</p>
        </div> */}
      </div>
      :null}

        </div>
        <div className="bottom">
            <div className="botton-item recent-entry">
                <img src={assets.question_icon} alt=''/>
           {extended?     <p>HELP</p>:null}
            </div>
            <div className="botton-item recent-entry">
                <img src={assets.history_icon} alt=''/>
                {extended?       <p>Activity</p>:null}
            </div>
            <div className="botton-item recent-entry">
                <img src={assets.setting_icon} alt=''/>
                {extended?        <p>Setting</p>:null}
            </div>
        </div>
     </div>
    </>
  )
}

export default Sidebar