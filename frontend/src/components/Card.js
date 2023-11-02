import React from "react"
import "../images/star.png"

export default function county(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="county">
            {
                badgeText && 
                <div className="county--badge">{badgeText}</div>
            }
            <img 
                src={`../images/Ksh{props.coverImg}`} 
                className="county--image" 
            />
            <div className="county--stats">
                <img src="../images/star.png" className="county--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="county--title">{props.title}</p>
            <p className="county--price">
                <span className="bold">From Ksh{props.price}</span> / person
            </p>
        </div>
    )
}