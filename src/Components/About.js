import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://pbs.twimg.com/media/FWHZEefUUAEJU7o.jpg:large" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        Solid State Physics Laboratory (SSPL) is engaged in the research and development of advanced semiconductor materials and devices. The lab has developed a range of solid-state technologies including Gunn, Schottky Barrier, and IMPATT Diodes, MMICs, high-power laser diodes, PIN photodiodes, space-grade solar cells, accelerometers, infrared arrays, thermoelectric coolers, SAW-based e-Nasika, and more. It also specializes in II-VI/III-V semiconductor crystals and heterostructures.
                        <br/>
                        The SSPL Library serves as a dedicated knowledge hub for researchers, offering a wide collection of books, journals, technical reports, datasheets, and DRDO publications across semiconductor and device domains. It provides access to key digital resources like IEEE Xplore, ScienceDirect, and Springer, and maintains archives of internal R&D work, patents, and standards.

With a digital catalog system and a focused reading environment, the library plays a vital role in supporting innovation and informed research at SSPL.
<br/>
                        <br/>
                        <br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
