import { createContext, useState } from "react";
import runChat from "../config/gemini"

export const Context= createContext();

const ContextProvider = (props) =>{

    const onSent = async(prompt) =>{
        setResultData("")//reset prev data
        setLoading(true)//loading animation
        setShowResult(true)//so that result can be shown
        setRecentPrompt(input)//so question can be seen
        const response = await runChat(input)//store response
        setResultData(response)//make response the result
        setLoading(false)//stop loading animation
        setInput("")//make input field empty
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
        setInput
    } // can be used anywhere throughtout the project
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
