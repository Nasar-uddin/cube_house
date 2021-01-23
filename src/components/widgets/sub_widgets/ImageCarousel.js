import React from 'react'
import Slider from 'react-slick'
import map_gallery_img_1 from '../../../assets/map_gallery_img_1.jpg'
import map_gallery_img_2 from '../../../assets/map_gallery_img_2.jpg'
import map_gallery_img_3 from '../../../assets/map_gallery_img_3.jpg'

function ImageCarousel() {
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
            <div>
                <img className="w-100" src={map_gallery_img_1} alt="One" />
            </div>
            <div>
                <img className="w-100" src={map_gallery_img_2} alt="One" />
            </div>
            <div>
                <img className="w-100" src={map_gallery_img_3} alt="One" />
            </div>
            <div>
                <img className="w-100" src={map_gallery_img_2} alt="One" />
            </div>
        </Slider>
    )
}

export default ImageCarousel
