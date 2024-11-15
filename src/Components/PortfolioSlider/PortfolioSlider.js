import React from 'react'
import PortfolioSlide from './PortfolioSlide'

const PortfolioSlider = () => {
    return (
        <div className='container'>
            <button>Previous</button>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <PortfolioSlide />
                </div>
                <div className='carousel-item'>
                    <PortfolioSlide />
                </div>
                <div className='carousel-item'>
                    <PortfolioSlide />
                </div>
            </div>

            <button>Previous</button>

        </div>

    )
}

export default PortfolioSlider