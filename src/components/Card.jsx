import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
            <div className="card mb-3">
                <img src={props.img} className="card-img-top" alt="..." style={props.imgStyle} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.to}><button type="button" className="btn btn-dark">See more</button></a>
                </div>
            </div>
    )
}

export default Card
