import React from 'react'
import CircleCheckBox from './CircleCheckBox'
import SepForecast from '../assets/images/sendmoneyto.svg'
import LearnMoreButton from './LearnMoreButton'


const MakeYourMoney = () => {
  return (
    <section className="makeyourmoney">
        
        <div className="extra">
            <h3 className="h3">Make your money <br/>transfer simple and clear</h3>
            <ul className="list">
                <li>
                    <CircleCheckBox/>
                    Banking transactions are free for you
                </li>

                <li>
                    <CircleCheckBox/>
                    No monthly cash commission
                </li>

                <li>
                    <CircleCheckBox/>
                    Manage payments and transactions online
                </li>
            </ul>
            <LearnMoreButton/>
        </div>

        <img className="sendmoney" src={SepForecast} alt="Picture of september forecast"/>
    </section>

  )
}

export default MakeYourMoney