import React from 'react'
import defaultImg from "../images/room-1.jpeg"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

export default function Room({room}) {
    const{name,slug, images}= room;
    return (
        <article className="room">
            <div className="img-container">
             <img src= {images[0] || defaultImg} alt="single room"></img>
             {/* price on pärast projekti nimi */}
             <div className="price-top">
                 <h6>{name}</h6>
             </div>
             <Link to = {`/rooms/${slug}`} className="btn-primary room-link">
                 Lisainfo
            </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Room.propTypes = {
    room:PropTypes.shape(
        {
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            images:PropTypes.arrayOf(PropTypes.string).isRequired,
            price:PropTypes.number.isRequired,
        }
    )
}