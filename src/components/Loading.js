import React from 'react'
import loadingGif from  "../images/gif/loading-arrow1.gif"
export default function Loading() {
    return (
        <div className = "loading">
            <img height="200" width="200" src = {loadingGif} alt="" background-color = "rgba(100,100,100)" ></img>
        </div>
    )
}
