import React from 'react'
import IphoneLeft from '../assets/images/iPhone 12 Pro left.svg'
import IphoneMiddle from '../assets/images/iPhone 12 Pro.svg'
import IphoneRight from '../assets/images/iPhone 12 Pro right.svg'

const HowDoesItWork = () => {
  return (
    <section className="howdoesitwork">
        <div className="container">
            <h2 className="h1">How Does It Work</h2>

            <div className="carousel">
                <div className="carousel-item">
                    <img src={IphoneLeft} alt="Showing Budget Meny on a Phone"/>
                </div>
                <div className="carousel-item">
                    <img src={IphoneMiddle} alt="Showing your cards meny on a phone"/>
                </div>
                <div className="carousel-item">
                    <img src={IphoneRight} alt="Showing transfer history on a phone"/>
                </div>
            </div>

            <div className="text">
                <h3 className="h4">Latest Transaction History</h3>
                <p className="subtext">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br/>quisque hac in consectetur condimentum.</p>
            </div>
        </div>
    </section>
  )
}

export default HowDoesItWork