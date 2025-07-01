import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1750565830231-856ad0748f43?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>12,000+ Resources</h3>
                        <p>Solid State Physics Laboratory E-Library, DRDO </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://s3.amazonaws.com/libapps/accounts/57722/images/044.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>12,000+ Resources</h3>
                        <p>Solid State Physics Laboratory E-Library, DRDO</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}

export default ImageSlider
