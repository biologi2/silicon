import React from 'react'
import WalletIcon from '../assets/images/icons/wallet.svg'
import ShieldIcon from '../assets/images/icons/shield.svg'
import BarsGraphicIcon from '../assets/images/icons/bars-graphic.svg'
import CommunicationIcon from '../assets/images/icons/communication.svg'
import VectorIcon from '../assets/images/icons/Vector.svg'
import HappyIcon from '../assets/images/icons/happy.svg'

const Icons = () => {
  return (
    <div className="allicons">
                <div className="icon">
                    <img className="containericons" src={WalletIcon} alt="Wallet Icon"/>

                    <div className="information">
                        <h5>Easy Payments</h5>
                        <p>Id mollis consectetur congue<br/> egestas egestas suspendisse <br/>blandit justo.</p>
                    </div>
                </div>

                <div className="icon">
                    <img className="containericons" src={ShieldIcon} alt="Shield Icon"/>
                    <div className="information">
                        <h5>Data Security</h5>
                        <p>Augue pulvinar justo, fermentum <br/> fames aliquam accumsan <br/>vestibulum non.</p>
                    </div>
                </div>

                <div className="icon">
                    <img className="containericons" src={BarsGraphicIcon} alt="Bars Graphic Icon"/>
                    <div className="information">
                        <h5>Cost Statistics</h5>
                        <p>Mattis urna ultricies non amet, <br/>purus in auctor non. Odio vulputate<br/> ac nibh.</p>
                    </div>
                </div>

                <div className="icon">
                    <img className="containericons" src={CommunicationIcon} alt="Communication Icon"/>
                    <div className="information">
                        <h5>Support 24/7</h5>
                        <p>A elementum, imperdiet enim, <br/>pretium etiam facilisi in aenean <br/>quam mauris.</p>
                    </div>
                </div>

                <div className="icon">
                    <img className="containericons" src={VectorIcon} alt="Vector Icon"/>
                    <div className="information">
                        <h5>Regular Cashback</h5>
                        <p>Sit facilisis dolor arcu, fermentum <br/>vestibulum arcu elementum <br/>imperdiet eleifend.</p>
                    </div>
                </div>

                <div className="icon">
                    <img className="containericons" src={HappyIcon} alt="Happy Icon"/>
                    <div className="information">
                        <h5>Top Standards</h5>
                        <p>Faucibus cursus maecenas lorem <br/>cursus nibh. Sociis sit<br/> risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
  )
}

export default Icons