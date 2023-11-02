import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import card from "./components/card"
import data from "./data"
import "./style.css"

export default function App() {
    const card = data.map(item => {
        return (
            <card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="countys-list">
                {card}
            </section>
        </div>
    )
}