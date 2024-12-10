import React from 'react'
import BellImg from '../assets/images/notification.svg'
import EnvelopeImg from '../assets/images/bx-envelope.svg'

const Subscribe = () => {
  return (
  <form noValidate>
      <div className="wrapper">
          <div className="back">
              <div className="subscribe">
                  <img className="bell" src={BellImg} alt="Image of a bell"/>
                  <h4 className="h5">Subscribe to our newsletter to stay <br/>informed about latest updates</h4>
              </div>
              <div className="input-group">
                  <img className="envelope" src={EnvelopeImg} alt="Image of a Envelope"/>
                  <input className="form-input email" type="email" required placeholder="Your Email"/>
                  <button className="subscribebtn">Subscribe</button>
              </div>
          </div>
      </div>
    </form>
  )
}

export default Subscribe