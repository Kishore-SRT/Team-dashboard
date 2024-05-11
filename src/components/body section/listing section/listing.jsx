import React from 'react'
import './listing.css'
import './listing.scss'

// Imported iconsv===============>
import {BsArrowRightShort} from "react-icons/bs";
import {MdSportsCricket} from "react-icons/md";

// Imported Images =================>"

import laws from "../../../assets/laws.jpg"
import toss from "../../../assets/toss.jpg"
import img8 from "../../../assets/image(8).jpg"
import bat1 from "../../../assets/viratkohli.jpg"
import bat2 from "../../../assets/spdsmith.jpg"
import bat3 from "../../../assets/joeroot.jpg"
import bat4 from "../../../assets/kanewilly.jpg"
import bowl1 from "../../../assets/mitchstrac.jpg"
import bowl2 from "../../../assets/jaspy.jpg"
import bowl3 from "../../../assets/boult.jpg"
import bowl4 from "../../../assets/woody.jpg"

const Listing =() => {
    return (
        <div className='listingSection'>
            <div className="heading flex">
                <h1>Our Services</h1>
                <button className="btn flex">
                    see all <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">
                

                <div className="singleItem">
                    <MdSportsCricket className="icon"/>
                    <img src={img8} alt="Image Name"/>
                    <h3>Pitch Reports</h3>
                </div>

                <div className="singleItem">
                    <MdSportsCricket className="icon"/>
                    <img src={toss} alt="Image Name"/>
                    <a href="https://stadiumweather.netlify.app/">
                       <h3>Weather Report</h3>
                    </a>
                </div>

                <div className="singleItem">
                    <MdSportsCricket className="icon"/>
                    <img src={laws} alt="Image Name"/>
                    <h3>ICC Code of Cunduct</h3>
                </div>
                
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Batsman</h3>
                        <button className="btn flex">
                             see all <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={bat1} alt="Users Image"/>
                            <img src={bat2} alt="Users Image"/>
                            <img src={bat3} alt="Users Image"/>
                            <img src={bat4} alt="Users Image"/>
                        </div>
                        <div className="cardText">
                            <span>
                                00000 batsmen<br/>
                                <small>
                                    000 Countries <span className="date">00 age</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Top Bowlers</h3>
                        <button className="btn flex">
                             see all <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={bowl1} alt="Users Image"/>
                            <img src={bowl2} alt="Users Image"/>
                            <img src={bowl3} alt="Users Image"/>
                            <img src={bowl4} alt="Users Image"/>
                        </div>
                        <div className="cardText">
                            <span>
                                00000 Bowlers<br/>
                                <small>
                                    000 Countries <span className="date">00 age</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing