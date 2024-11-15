import React from 'react'
import slidePort from "../../assests/images/slideimg.png";

const PortfolioSlide = () => {
    return (
        <div className='carousel-slide'>
            <div>
                <img src={slidePort} alt='Avatar' className='img-fluid' />
            </div>
        </div>)
}

export default PortfolioSlide