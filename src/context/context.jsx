import React, { createContext, useState } from 'react'
import run from '../config/codex';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setinput] = useState('')
    const [recentprompt, setrecentprompt] = useState('')
    const [prePrompt, setprePrompt] = useState('')
    const [showresult, setshowresult] = useState(false)
    const [loading, setloading] = useState(false)
    const [resultdata, setresultdata] = useState('')
    const delayPara = (i, w) => {
            setTimeout(()=>{
          setresultdata(prev=>prev+w)
            },75*i)
    }
    const newChart=()=>{
        setloading(false)
        setshowresult(false)
    }
    const onSent = async (prompt) => {
        setresultdata('')
        setloading(true)
        setshowresult(true)
        setrecentprompt(input)
        let res;
        if(prompt!==undefined){
            res = await run(input);
            setrecentprompt(prompt)
        }
        else{

            setprePrompt(prev=>[...prev,input])
            setrecentprompt(input)
            res = await run(input) 
        }
   
        let resArray = res.split('**')
        let newArray='';
        for (let i = 0; i < resArray.length; i++) {
            if (i == 0 || i % 2 == 0) {
                newArray += resArray[i];
            } else {
                newArray += "<b>" + resArray[i] + "</b>";
            }
        }
        let newRes2 = newArray.split('*').join("</br>")
        // setresultdata(newRes2);
        var newResArray=newRes2.split(' ');
        for(let i=0;i<newResArray.length;i++){
            const nextWord=newResArray[i];
            delayPara(i,nextWord+" ");
        }
        setloading(false)
        setinput('')

    }

    const contextValue = {
        prePrompt,
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
        setinput,
        newChart
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider