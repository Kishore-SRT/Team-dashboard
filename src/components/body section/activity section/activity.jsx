import React from 'react'
import './activity.css'
import './activity.scss'

// Imported Icons =========>
import {BsArrowRightShort} from "react-icons/bs"

// Imported Images ========>
import ump1 from "../../../assets/marius.jpg"
import ump2 from "../../../assets/nithin.jpg"
import ump3 from "../../../assets/richard.jpg"
import ump4 from "../../../assets/kumar.jpg"


const Activity =() => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Umpire's Accuracy</h1>
                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={ump1} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">umpire 1</span>
                        <small>00 % accuracy on decisions</small>
                    </div>
                    <div className="duration">
                        00 matches
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={ump2} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">umpire 2</span>
                        <small>00 % accuracy on decisions</small>
                    </div>
                    <div className="duration">
                        00 matches
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={ump3} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">umpire 3</span>
                        <small>00 % accuracy on decisions</small>
                    </div>
                    <div className="duration">
                        00 matches
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={ump4} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">umpire 4</span>
                        <small>00 % accuracy on decisions</small>
                    </div>
                    <div className="duration">
                        00 matches
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity