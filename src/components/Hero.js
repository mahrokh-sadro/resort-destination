import React from 'react'
//how to change the background img here??cuz its in our css
const Hero = props => {
    return (
        <section id="hero-section">
            <div class="container">
                <h1>
                    {props.heading}
                </h1>
            </div>
        </section>
    )
}

export default Hero
