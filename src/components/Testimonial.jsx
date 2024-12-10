import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({item}) => {
  return (
    <div className="testimonial-card">
        <div className="quote-icon">“</div>
        <StarRating starRating={item.starRating} />

        <p>{item.comment}</p>
        <div className="testimonial-author">
            <img src={item.avatarUrl} alt={item.author}/>
            <div>
                <p className="name">{item.author}</p>
                <p className="role">{item.jobRole}</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial