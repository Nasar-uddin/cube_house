import React from 'react'
import Slider from 'react-slick'

function ImageCarousel() {
    const images = [
        {
            id: 0,
            image: 'https://i.ibb.co/G9B89Tt/map-gallery-img-1.jpg'
        },
        {
            id: 1,
            image: 'https://i.ibb.co/CQVBJv9/map-gallery-img-3.jpg'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/XCrYRqq/map-gallery-img-4.jpg'
        }
    ];
    const settings = {
        dots: false,
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
            {images.map((im)=>(
                <div key={im.id}>
                    <img className="w-100" src={im.image} alt="One" />
                </div>
            ))}
        </Slider>
    )
}

export default ImageCarousel
