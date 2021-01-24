import React, {useContext} from 'react'
import {ApiContext} from '../../context/ApiContext'
import {CircularProgress } from '@material-ui/core'
import Navbar from '../widgets/Navbar'
import Heroarea from '../widgets/Heroarea'
import Projects from '../widgets/Projects'
import Services from '../widgets/Services'
import OurGallery from '../widgets/OurGallery'
import VideoCarousel from '../widgets/sub_widgets/VideoCarousel'
import Testimonials from '../widgets/Testimonials'
import property_custom_icon_1 from '../../assets/property_custom_icon_1.png'
import property_custom_icon_2 from '../../assets/property_custom_icon_2.png'
import property_custom_icon_3 from '../../assets/property_custom_icon_3.png'
import property_custom_icon_4 from '../../assets/property_custom_icon_4.png'

function WorkDetails() {
    const {siteData, dataLoaded} = useContext(ApiContext)
    const data = {
        heroArea: {
            heading: 'CUBE HOUSE',
            subHeading: 'Kastell Studio',
            image: 'https://i.ibb.co/0qvP2rW/heroimage.jpg'
        },
        videoItems: [
            {
                id: 1,
                image: 'https://i.ibb.co/G9B89Tt/map-gallery-img-1.jpg',
                videoCode: 'l7I9NirHsU0'
            },
            {
                id: 2,
                image: 'https://i.ibb.co/9h4bTK3/map-gallery-img-2.jpg',
                videoCode: '9YffrCViTVk'
            },
            {
                id: 3,
                image:  'https://i.ibb.co/CQVBJv9/map-gallery-img-3.jpg',
                videoCode: 's5qltDnU4aA'
            },
            {
                id: 4,
                image: 'https://i.ibb.co/XCrYRqq/map-gallery-img-4.jpg',
                videoCode: 'l7I9NirHsU0'
            },
            {
                id: 5,
                image: 'https://i.ibb.co/pj3RqRN/map-gallery-img-5.jpg',
                videoCode: 'l7I9NirHsU0'
            }
        ],
        projects: [
            {
                id: 0,
                heading: 'Delivering High Quality Projects 1',
                subHeading: 'Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate',
                description: 'Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor.',
                image: 'https://i.ibb.co/9h4bTK3/map-gallery-img-2.jpg'
            },
            {
                id: 1,
                heading: 'Delivering High Quality Projects 2',
                subHeading: 'Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate',
                description: 'Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor.',
                image: 'https://i.ibb.co/XCrYRqq/map-gallery-img-4.jpg'
            },
            {
                id: 2,
                heading: 'Delivering High Quality Projects 3',
                subHeading: 'Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate',
                description: 'Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor.',
                image: 'https://i.ibb.co/CQVBJv9/map-gallery-img-3.jpg'
            }
        ],
        services: [{
                id: 1,
                title: 'Lux Appliances',
                text: 'Lorem ipsum proin vel velit auctor aliolli citudin',
                image: property_custom_icon_1
            },
            {
                id: 2,
                title: 'Fast WI-FI',
                text: 'Lorem ipsum proin vel velit auctor aliolli citudin',
                image: property_custom_icon_2
            },
            {
                id: 3,
                title: 'Swimming Pool',
                text: 'Lorem ipsum proin vel velit auctor aliolli citudin',
                image: property_custom_icon_3
            },
            {
                id: 4,
                title: 'Parking Place',
                text: 'Lorem ipsum proin vel velit auctor aliolli citudin',
                image: property_custom_icon_4
            }
        ],
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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div>
            <Navbar/>
            <Heroarea heading={siteData.title} subHeading={siteData.description} image={siteData.cover}/>
            <VideoCarousel items={data.videoItems}/>
            <Projects projects={data.projects}/>
            <Services services={data.services}/>
            <OurGallery/>
            <Testimonials testimonals={data.testimonals}/>
        </div>
    )
}

export default WorkDetails
