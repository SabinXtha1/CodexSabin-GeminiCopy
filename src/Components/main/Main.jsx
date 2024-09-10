import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
function Main() {
 
    const { prePrompt,
        setprePrompt,
        onSent,
        setrecentprompt,
        recentprompt,
        showresult,
        setshowresult,
        loading,
        setloading,
        resultdata,
        setresultdata,
        input,
        setinput } = useContext(Context)
    return (
        <>
            <div className="main">
               
                <div className="nav">
                    <p>CodexSabin</p>
                    <img src={assets.user_icon} alt='' />
                </div>
                <div className="main-container">
                    {
                        !showresult ? <>
                            <div className="greet">
                                <p><span>Hello,Dev.</span></p>
                                <p>How can I help you Today?</p>
                            </div>
                            <div className="cards">
                                <div className="card"  onClick={()=>{
                                    setinput('Suggest Beautiful place to see on an upcomiing road trip')
                                    onSent()
                                }} >
                                    <p>Suggest Beautiful place to see on an upcomiing road trip</p>
                                    <img src={assets.compass_icon} alt='' />
                                </div> <div className="card" onClick={()=>{
                                    setinput('Suggest Beautiful place to see on an upcomiing road trip')
                                    onSent()
                                }} >
                                    <p>Briefly summarize this concept : urban planning</p>
                                    <img src={assets.bulb_icon} alt='' />
                                </div>
                                <div className="card" onClick={()=>{
                                    setinput('Brainstrom Team bonding activities for our work retreat ')
                                    onSent()
                                }} >
                                    <p>Brainstrom Team bonding activities for our work retreat </p>
                                    <img src={assets.message_icon} alt='' />
                                </div>
                                <div className="card" onClick={()=>{
                                    setinput('Improve the readability of the following code')
                                    onSent()
                                }} >
                                    <p>Improve the readability of the following code</p>
                                    <img src={assets.code_icon} alt='' />
                                </div>
                            </div>

                        </> :
                            <div className="result">
                                <div className="result-title">
                                    <img src="../../../moon.png" alt='' />
                                    <p>{recentprompt}</p>
                                </div>
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="" />
                                    {
                                        loading ? <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />

                                        </div> :
                                            <p dangerouslySetInnerHTML={{ __html: resultdata }} >
                                            </p>
                                    }
                                </div>
                            </div>

                    }
                    <div className="main-bottom">
                        <div className="searchbox">
                            <input onChange={(e) => setinput(e.target.value)} type="text" value={input} placeholder="Enter Prompt Here" />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                {input?
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            :null}
                            </div>
                        </div>
                        <p className='bottom-info'>CodexSabin may display inaccurate info, including about people, so double-check its responses.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main