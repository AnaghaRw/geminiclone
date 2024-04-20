import { createContext, useState } from "react";
import runChat from "../config/gemini"

const Context= createContext();

const ContextProvider = (props) =>{

    const onSent = async(prompt) =>{
        await runChat(prompt)
    }

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState(false)


    const contextValue = {
        
    } // can be used anywhere throughtout the project
    return(
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>
    )
}

export default ContextProvider
