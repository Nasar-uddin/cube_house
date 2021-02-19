import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext, useEffect } from 'react'
import Slider from 'react-slick'
import CategoryCard from '../widgets/sub_widgets/CategoryCard'
import { ApiContext } from '../../context/ApiContext'
import Navbar from '../widgets/Navbar'
const useStyles = makeStyles((theme) => ({
    projectCardRoot: {
        // Change the image url to change the background image
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(https://i.ibb.co/G9B89Tt/map-gallery-img-1.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
        minHeight: '550px',
        color: 'white',
        overflowY: 'auto',
        overflowX: 'hidden',
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
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '50px',
        [theme.breakpoints.down('xs')]: {
            bottom: '25px'
        }
    }
}))


function ProjectCategoryCards() {
    const { catagory, loadCatagory, loadMoreCatagory } = useContext(ApiContext)
    const classes = useStyles()
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
            if(index+3 >= catagory.results.length){
                loadMoreCatagory()
            }
        },
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    afterChange: (index) =>{
                        if(index+2 >= catagory.results.length){
                            loadMoreCatagory()
                        }
                    },
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    afterChange: (index) =>{
                        if(index+1 >= catagory.results.length){
                            loadMoreCatagory()
                        }
                    },
                }
            },
        ]
    };

    useEffect(() => {
        loadCatagory()
    }, [])
    return (
        <>
            <Navbar />
            <div className={classes.projectCardRoot}>
                <Box pl={3} pr={3} className={classes.cardCarouselContainer}>
                    <Box pb={3}>
                        <Typography variant='h2' component='h2' align='center'>Our <span className={classes.colorText}>Categories</span></Typography>
                    </Box>
                    <div>
                        {catagory != null ? 
                            <>
                            <Grid container justify='center'>
                                <Grid item xl={catagory.results.length > 2 ? 10: 6} lg={catagory.results.length > 2 ? 10: 6} md={catagory.results.length > 2 ? 10: 6} sm={11} xs={11}>
                                    <Slider {...settings} slidesToShow={catagory.results.length > 3 ? 3: Math.max(1, catagory.results.length-1)}>
                                        {catagory.results.map((d) => (
                                            <CategoryCard image={d.thumbnail} title={d.heading} subTitle={d.subheading} id={d.id} key={d.id} />
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>
                            </>
                        :<></>}
                    </div>
                </Box>
            </div>
        </>
    )
}

export default ProjectCategoryCards
