import React from 'react'

import Apt1 from '../../Assets/apt1.jpeg'
import Apt2 from '../../Assets/apt2.jpeg'
import Apt3 from '../../Assets/apt3.jpeg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
        </div>
    )
}

export default Best
