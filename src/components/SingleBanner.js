import React from 'react'

export default function SingleBanner({children, title, subtitle}) {
    return (
        <div className="singlebanner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
