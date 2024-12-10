import React, { useState } from 'react'

const FAQitem = ({item}) => {
  const [isOpen, SetIsOpen] = useState(false)

  const toggleFAQ = () => {
    SetIsOpen(!isOpen)
  }


  return (

    <div className="faq-card open">
        <div className={`question ${isOpen ? 'active': ''}`} onClick={toggleFAQ}>
          <p>{item.title}</p>
          <button className="btn-roundOne">
            <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
          </button>
        </div>
        <div className="answer">
          {
            
            isOpen && (
              <div className={`expandable ${isOpen ? 'active': ''}`}>
                {item.content}
              </div>
            )
          
          }
        </div>
    </div>

    
  )
}

export default FAQitem