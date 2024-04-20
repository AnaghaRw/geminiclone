import { createContext, useState } from "react";
import runChat from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        }, 75*index)
    }// for typing effect

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("")//reset prev data
        setLoading(true)//loading animation
        setInput("")//make input field empty
        setShowResult(true)//so that result can be shown
        let response;
        if(prompt !== undefined){// if thereis a prompt from prev that will be loaded
            response = await runChat(prompt)//store response
            setRecentPrompt(prompt)//so question can be seen
        }
        else{
            response = await runChat(input)//store response
            setRecentPrompt(input)//so question can be seen
            setPrevPrompts(prev=>[...prev, input])//to store the prompts to show in sidebar
        }
        let responseArray = response.split("**");
        let newResponse="";
        for(let i=0; i< responseArray.length; i++)
        {
            if (i === 0 || i%2 !== 1){
                newResponse +=responseArray[i];
            }
            else{
                newResponse +="<b>"+responseArray[i]+"</b>"; // to make bold words enclose in ** bold
            }
        }
        let newResponse2= newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" ");
        }
        setLoading(false)//stop loading animation
        
    }

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");// display recent prompts in min
    const [prevPrompts, setPrevPrompts] = useState([]);// display in recent tab
    const [showResult, setShowResult] = useState(false);// hide cards
    const [loading, setLoading] = useState(false);//loading animation
    const [resultData, setResultData] = useState("");//displays result on webpage

    const contextValue = {

        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    } // can be used anywhere throughtout the project
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
