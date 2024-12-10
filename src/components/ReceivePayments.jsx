import React from 'react'
import LearnMoreButton from './LearnMoreButton'
import ContactsImg from '../assets/images/contacts.svg'
import WalletIcon from '../assets/images/icons/wallet.svg'
import VectorIcon from '../assets/images/icons/Vector.svg'


const ReceivePayments = () => {
  return (
    <section className="receivepayments">
        <img src={ContactsImg} alt=""/>

        <div className="extra">
            <h3 className="h3">Receive payment from <br/>international bank details</h3>

            <div className="icons">
                <img className="containericonsd" src={WalletIcon} alt="Wallet Icon"/>
                <p className="paragraph">Manage your payments online. <br/>Mollis congue egestas egestas <br/>fermentum fames.</p>
            </div>

            <div className="icons">
                <img className="containericonsd" src={VectorIcon} alt="Vector Icon"/>
                <p className="paragraph">A elementur and imperdiet enim, <br/>pretium etiam facilisi aenean <br/>quam mauris.</p>
            </div>

            <LearnMoreButton/>
        </div>
    </section>
  )
}

export default ReceivePayments