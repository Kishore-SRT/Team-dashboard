import React from 'react'
import './body.css'
import Top from './top section/top'
import Listing from './listing section/listing'
import Activity from './activity section/activity'
import './body.scss'


const Body =() => {
    return (
        <div className='mainContent'>
            <Top/>

            <div className='Bottom flex'>
                <Listing/>
                <Activity/>
            </div>
        </div>
    )
}

export default Body