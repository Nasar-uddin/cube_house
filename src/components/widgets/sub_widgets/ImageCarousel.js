import React from 'react'
import Slider from 'react-slick'

function ImageCarousel({items}) {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 15000,
        slidesToShow: 1,
    };
    return (
        <Slider {...settings}>
            {items.map((item)=>(
                <div key={item.heading}>
                    <img className="w-100" src={item.image} alt={item.heading} />
                </div>
            ))}
        </Slider>
    )
}

export default ImageCarousel
