import React from 'react'
import PartnerLogos1 from '../assets/images/logoipsum1.svg'
import PartnerLogos2 from '../assets/images/logoipsum 2.svg'
import PartnerLogos3 from '../assets/images/logoipsum 3.svg'
import PartnerLogos4 from '../assets/images/logoipsum 4.svg'
import PartnerLogos5 from '../assets/images/logoipsum 5.svg'
import PartnerLogos6 from '../assets/images/logoipsum 6.svg'


const LogoSection = () => {
  return (
    <div className="logosection">
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos1} alt="Picture of all our partners"/>
        </div>
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos2} alt="Picture of all our partners"/>
        </div>
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos3} alt="Picture of all our partners"/>
        </div>
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos4} alt="Picture of all our partners"/>
        </div>
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos5} alt="Picture of all our partners"/>
        </div>
        <div className="partnerslogo">
            <img className="logo" src={PartnerLogos6} alt="Picture of all our partners"/>
        </div>
        
    </div>
  )
}

export default LogoSection