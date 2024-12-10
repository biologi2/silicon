import React, { useEffect, useState } from 'react'
import FannyImg from '../assets/images/fanny.svg'
import AlbertImg from '../assets/images/albert.svg'
import Testimonial from './Testimonial'

const Reviews = () => {
    const [testimonials, setTestimonials] = useState([])
    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        getTestimonials()
    }, [])

  return (
    <section className="clientssection">
        <h2 className="h5">Clients are <br/>Loving Our App</h2>

        <div className="clientscontent">
            <div className="testimonials">
                
                {
                    testimonials.map((testimonial) => (<Testimonial key={testimonial.id} item={testimonial} />))
                }

                
            </div>
        </div>
    </section>
  )
}

export default Reviews