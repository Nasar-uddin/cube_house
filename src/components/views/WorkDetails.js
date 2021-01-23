import React from 'react'
import Navbar from '../widgets/Navbar'
import Heroarea from '../widgets/Heroarea'
import Projects from '../widgets/Projects'
import Services from '../widgets/Services'
import OurGallery from '../widgets/OurGallery'
import VideoCarousel from '../widgets/sub_widgets/VideoCarousel'
import Testimonials from '../widgets/Testimonials'

function WorkDetails() {
    const data = {
        testimonals: [
            {
                image: 'https://i.ibb.co/F3HjFcx/db89b00f5e8c93e9c4c060ea2348e359-korean-hairstyles-diy-hairstyles.jpg',
                queto: 'Duis sed odio amet nibh vulpuntate curssus amet',
                name: 'I am Noob',
                profesion: 'Web Designer'
            },
            {
                image: 'https://i.ibb.co/Syc0G47/greg-630x630.jpg',
                queto: 'Duis sed odio amet nibh vulpuntate curssus amet',
                name: 'Json Smith',
                profesion: 'Android developer'
            },
            {
                image: 'https://i.ibb.co/WDdkqgk/person-1.jpg',
                queto: 'Duis sed odio amet nibh vulpuntate curssus amet',
                name: 'Nasar uddin',
                profesion: 'Web developer'
            }
        ]
    }
    return (
        <div>
            <Navbar/>
            <Heroarea />
            <VideoCarousel/>
            <Projects/>
            <Services/>
            <OurGallery/>
            <Testimonials testimonals={data.testimonals}/>
        </div>
    )
}

export default WorkDetails
