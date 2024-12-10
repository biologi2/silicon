import React from 'react'
import AppStoreLogo from '../assets/images/appstore.svg'
import GooglePlayLogo from '../assets/images/googleplay.svg'
import IphoneImages from '../assets/images/bothphones.svg'

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
            <div className="container">
                <h1 className="headline">Manage All Your <br/>Money in One App</h1>
                <div className="content">
                    <p className="subheading">We offer you a new generation of the mobile banking. <br/>Save, spend & manage money in your pocket.</p>
                    <div className="marketbtns">
                        <a href="#" className="storelogo">
                            <img src={AppStoreLogo} alt="App store Logo"/>
                        </a>
                        <a href="#" className="storelogo">
                            <img src={GooglePlayLogo} alt="Google Play Logo"/>
                        </a>
                    </div>
                    <div className="more">
                        <a href="#features" className="btn-round btn-white">
                            <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <span>Discover More</span>
                    </div>
                </div>
                <div className="phones">
                    <img src={IphoneImages} alt="a picture of the app opened on 2 phones"/>
                </div>
            </div>
        </section>
  )
}

export default Showcase