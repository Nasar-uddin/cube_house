import React, {useContext} from 'react'
import {ApiContext} from '../../context/ApiContext'
import {CircularProgress } from '@material-ui/core'
import Navbar from '../widgets/Navbar'
import Heroarea from '../widgets/Heroarea'
import Large from '../widgets/Large'
import Mini from '../widgets/Mini'
import Carousel from '../widgets/sub_widgets/Carousel'
import OurGallery from '../widgets/OurGallery'
import Testimonials from '../widgets/Testimonials'

function WorkDetails() {
    const {siteData, dataLoaded} = useContext(ApiContext)
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
    if(!dataLoaded){
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div>
            <Navbar/>
            <Heroarea heading={siteData.title} subHeading={siteData.description} image={siteData.cover}/>
            <Carousel items={siteData.carousel}/>
            <Large projects={siteData.large}/>
            <Mini services={siteData.mini}/>
            <OurGallery floorplans={siteData.floorplans}/>
            <Testimonials testimonals={data.testimonals}/>
        </div>
    )
}

export default WorkDetails
