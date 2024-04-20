import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
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

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
