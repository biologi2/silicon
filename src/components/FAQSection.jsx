import React, { useEffect, useState } from 'react'
import FAQitem from './FAQitem'

const FAQSection = () => {
    const [accordions, setAccordions] = useState ([])

    const fetchFAQ = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }

    useEffect(() => {
        fetchFAQ()
    }, [])

  return (
    <section className="questionsection">
        <div className="faq-section">
            <div className="faq-content">
                <div className="faq-left">
                    <h2 className="h5">Any questions? Check out the FAQs</h2>
                    <p className="p">Still have unanswered questions and need to get in touch?</p>
                    <div className="contact-options">
                        <div className="contact-box">
                            <div className="contact-icon">📞</div>
                            <p>Still have questions?</p>
                            <a href="#">Contact us →</a>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">💬</div>
                            <p>Don't like phone calls?</p>
                            <a href="#">Contact us →</a>
                        </div>
                    </div>
                </div>   
                    
                <div className="faq">

                    {
                        accordions.map(item => ( 
                            <FAQitem key={item.id} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQSection