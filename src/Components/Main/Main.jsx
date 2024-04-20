import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input }
    = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">

        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hello, Anagha.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Help write SQL to generate a report</p>
                <img src={assets.code_icon} />
              </div>
              <div className="card">
                <p>As a social trend expert, explain a term</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Help me write a refund email for a product that's damaged</p>
                <img src={assets.pen_icon} />
              </div>
              <div className="card">
                <p>What are tips to improve public speaking skills</p>
                <img src={assets.bulb_icon} />
              </div>
            </div>
          </> //if showresult is false, show cards and welcome
          : <><div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon}  />
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            </div>
          </div></>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img onClick={() => onSent()} src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
