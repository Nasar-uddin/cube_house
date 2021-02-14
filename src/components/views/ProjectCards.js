import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import ProjectCard from '../widgets/sub_widgets/ProjectCard'
import { ApiContext } from '../../context/ApiContext'
import Navbar from '../widgets/Navbar'
import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    projectCardRoot: {
        // Change the image url to change the background image
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(https://i.ibb.co/G9B89Tt/map-gallery-img-1.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
        minHeight: '720px',
        color: 'white',
        overflow: 'hidden',
        maxWidth: '100vw',
        position: 'relative'
    },
    projectsTitle: {
        fontSize: theme.spacing(7),
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    colorText: {
        color: '#bf9410'
    },
    cardCarouselContainer: {
        paddingLeft: '5vw',
        paddingRight: '5vw',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '50px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '30px',
            paddingRight: '30px',
            bottom: '25px'
        }
    }
}))


function ProjectCards() {
    const { projects, loadProjects, loadMoreProjects } = useContext(ApiContext)
    const classes = useStyles()
    const {id} = useParams()
    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        autoplaySpeed: 15000,
        slidesToShow: 3,
        afterChange: (index) =>{
            if(index+3 >= projects.results.length){
                loadMoreProjects()
            }
        },
        onEdge: (event) => {
            if (event === 'left') {
                // loadMoreProjects()
            }
        },
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    afterChange: (index) =>{
                        if(index+2 >= projects.results.length){
                            loadMoreProjects()
                        }
                    },
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    afterChange: (index) =>{
                        if(index+1 >= projects.results.length){
                            loadMoreProjects()
                        }
                    },
                }
            },
        ]
    };

    useState(() => {
        loadProjects(id)
    }, [])
    return (
        <>
            <Navbar/>
            <div className={classes.projectCardRoot}>
                <Box className={classes.cardCarouselContainer}>
                    <h1 className={classes.projectsTitle}>Our <span className={classes.colorText}>Projects</span></h1>
                    <div>
                        <Slider {...settings}>
                            {projects != null ? projects.results.map((d) => (
                                <ProjectCard image={d.thumbnail} title={d.title} subTitle={d.description} id={d.id} key={d.id} />
                            )) : <></>}
                        </Slider>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default ProjectCards
