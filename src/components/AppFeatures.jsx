import React from 'react'
import IphoneAppFeature from '../assets/images/iphoneappfeature.svg'
import Icons from './Icons'

const AppFeatures = () => {
  return (
    <div className="appfeatures">
        <div>
            <img className="mobile" src={IphoneAppFeature} alt="A picture of an Iphone showing the transactions meny" /> 
        </div>

        <div className="allTEXT">
            <div className="Startinformation">
                <h2 className="h2">App Features</h2>
                <p className="subheadline2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit libero impedit <br/>quisquam ipsum nam distinctio esse, quam, at eius eos ipsa, voluptate praesentium voluptatum.</p>
            </div> 
            <Icons/>
        </div>        
    </div>
  )
}

export default AppFeatures