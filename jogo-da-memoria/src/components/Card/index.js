import React from 'react'

import './styles.css'

export default function Card({ flipped = false, back = String, id = String, handleClick = (id = String) => undefined }) {
    const cardContentClassnames = ['Card-Content']
    flipped && cardContentClassnames.push('Card--Content--Flipped')
    const handleClickFn = (id = String) => {
        if (handleClick) {
            handleClick(id)
        }
    }
    return (
        <div className='Card' onClick={() => handleClickFn(id)}>
            <div className={cardContentClassnames.join(' ')}>
                <div className='Card-face card-face--front'>?</div>
                <div className='Card-face card-face--back'>{back}</div>
            </div>
        </div>
    )
}
