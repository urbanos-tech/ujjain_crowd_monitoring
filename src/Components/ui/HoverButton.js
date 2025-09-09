import React from 'react'
import { useState } from 'react'

function HoverButton({ onClick,level,currAlertLevel }) {
    const [isHovered,setIsHovered] = useState()
    return (
        <div
        onClick={onClick}
            style={{
                background: isHovered || (currAlertLevel === level.title) ? 'green' : 'white',
                color: isHovered || (currAlertLevel === level.title) ? 'white' : 'black'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={currAlertLevel === level.title ? `text-center bg-gray-100 rounded-2xl aspect-auto border flex items-center justify-between` : `bg-gray-100 text-center rounded-2xl aspect-auto border flex items-center justify-between`}><span className='p-1 px-3 text-center'>{level.title}</span>
        </div>
    )
}

export default HoverButton