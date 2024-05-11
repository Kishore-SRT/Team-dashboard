import React from 'react'
import './top.css'
import './top.scss'

// Imported icons =======================>

import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from "react-icons/tb"
import {MdNotificationsNone} from "react-icons/md"
import {BsArrowRightShort} from "react-icons/bs"
import {BsQuestionCircle} from "react-icons/bs"
import {BiHomeAlt2} from "react-icons/bi"

//Imported Images and Videos =====================>
import video from '../../../assets/video.mp4'
import image from '../../../assets/bat.png'

const Top =() => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome TEAM</h1>
                    <p>Hello Cricketing World. Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard'/>
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <BiHomeAlt2 className="icon"/>
                    <TbMessageCircle className="icon"/>
                    <MdNotificationsNone className="icon"/>
                </div>
            </div>

            <div className="cardSection flex">

                <div className="rightcard flex">
                    <h1>Experience our AI-Tech  in cricket </h1>
                    <p>The World Fast growing industry will be Enhacing it-self using <br/> Artificial Intelligence</p>

                    

                    <div className="videoDiv">
                        <video src= {video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftcard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>World Records</h1>

                            <div className="flex">
                                <span>
                                    Batting <br/> <small>00 records</small>
                                </span>

                                <span>
                                    Bowling <br/> <small>00 records</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Explore All <BsArrowRightShort className='icon'/>
                            </span>
                        </div>

                        <div className="imgDiv">
                            <img src= {image} alt = "Image Name"/>
                        </div>

                        {/* we shall use this card later */}

                        <div className="sideBarCard">
                            <BsQuestionCircle className="icon"/>
                            <div className="cardContent">
                                <div className="circle1"></div>
                                    <div className="circle2"></div>

                                    <h3>Help Center</h3>
                                    <p>Having Trouble in Making Decision, please contact us.</p>
                                    <button className='btn'>Go to Help Center</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top