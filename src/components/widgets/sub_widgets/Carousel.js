import { makeStyles } from '@material-ui/core/styles'
import React, {useState} from 'react'
import Slider from 'react-slick'
import { PlayCircleOutline } from '@material-ui/icons'
import { Dialog } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    carouselContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
        [theme.breakpoints.down('xs')]:{
            padding: '0'
        }
    },
    videoFrame: {
        height: '500px',
        [theme.breakpoints.down('xs')]: {
            width: '90vw',
            height: '50vw',
        }
    }
}))

function Carousel({items}) {
    const [videoUrl, setVideoUrl] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const classes = useStyles()
    const lessThan = 1
    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: items.length<lessThan?1:3,
        // className: items.length<5?"no-center":"no-center",
        centerMode: items.length>=lessThan,
        autoplaySpeed: 15000,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
              }
            }
        ]
    };
    const handleClick = (url)=>{
        setVideoUrl(url)
        setDialogOpen(true)
    }
    return (
        <div className={classes.carouselContainer}>
            <Dialog open={dialogOpen} fullWidth={true} maxWidth={'sm'} onClose={()=>{setDialogOpen(false)}}>
                <video className="w-100" controls>
                    <source src={videoUrl} type="video/mp4"/>
                </video>
            </Dialog>
            <Slider {...settings} className={items.length<lessThan?"":"viedo-carousel"}>
                {items.map(item=>(
                    <div key={item.id}>
                        {item.type === "video" ?(
                            <>
                            <div className={'playButtonContainer'}>
                                <PlayCircleOutline onClick={(e)=>{handleClick(item.path)}}/>
                            </div>
                            <video className="w-100">
                                <source src={item.path} type="video/mp4"/>
                            </video>
                            </>
                        ):(<>
                            <img className="w-100" src={item.path} alt="One" />
                        </>)}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
