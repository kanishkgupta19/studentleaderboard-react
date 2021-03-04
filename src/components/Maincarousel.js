import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Maincarousel(){
    return(
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 carousel-height"
                src="https://images2.alphacoders.com/436/thumb-1920-436580.jpg"
                alt="First slide"
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                <h1>Record Student Records</h1>
                <p>store all records of the students</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 carousel-height"
                src="https://m.foolcdn.com/media/dubs/images/stock_chart_up_2.984be4c3.fill-800x373.jpegquality-50.jpg"
                alt="Second slide"
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                <h1>Leaderboard</h1>
                <p>To display the rankings of the students</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Maincarousel;