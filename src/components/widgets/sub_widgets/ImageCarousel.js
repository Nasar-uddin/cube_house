import React from 'react'
import Slider from 'react-slick'

function ImageCarousel({items}) {
    console.log(items)
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        dotsClass: "slick-dots slick-thumb",
        customPaging: function(i) {
            return (
                <div>
                    {items[i].heading}
                </div>
            );
        }
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
