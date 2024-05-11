import React from 'react'
import './sidebar.css'
import './sidebar.scss'


// Imported Images =================>
import logo from '../../assets/logo.png'

//Imported Icons ====================>
import {BiCricketBall} from 'react-icons/bi'
import {TbReportSearch} from 'react-icons/tb'
import {MdOutlineRule} from 'react-icons/md'
import {MdOutlineStadium} from 'react-icons/md'
import {MdOutlineSportsCricket} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsQuestionCircle} from 'react-icons/bs'

const Sidebar =() => {
    return (
        <div className='sideBar grid'>


            <div className="logoDiv flex">
                <img src={logo} alt="Image Name" />
                <h2>DRS</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    Primary Task
                </h3>
                <ul className="menuLists grid">

                    
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <TbReportSearch className="icon"/>
                            <span className="smallText">
                                Pitch Reports
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="https://stadiumweather.netlify.app/" className='menuLink flex'>
                            <MdOutlineRule className="icon"/>
                            <span className="smallText">
                                ICC Code of Conduct
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    Secondary Task
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlineStadium className="icon"/>
                            <span className="smallText">
                                Stadiums
                            </span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlineSportsCricket className="icon"/>
                            <span className="smallText">
                                Batting Records
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BiCricketBall className="icon"/>
                            <span className="smallText">
                                Bowling records
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className="icon"/>
                            <span className="smallText">
                                contact
                            </span>
                        </a>
                    </li>

                </ul>
            </div>

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
    )
}

export default Sidebar