import { makeStyles } from '@material-ui/core/styles'
import React, {useState} from 'react'
import Slider from 'react-slick'
import { PlayCircleOutline } from '@material-ui/icons'
import map_gallery_img_1 from '../../../assets/map_gallery_img_1.jpg'
import map_gallery_img_2 from '../../../assets/map_gallery_img_2.jpg'
import map_gallery_img_3 from '../../../assets/map_gallery_img_3.jpg'
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

function VideoCarousel() {
    const [videoUrl, setVideoUrl] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const classes = useStyles()
    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        className: "center",
        centerMode: true,
        autoplaySpeed: 15000,
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
    const items = [
        {
            id: 1,
            image: map_gallery_img_1,
            videoCode: 'l7I9NirHsU0'
        },
        {
            id: 2,
            image: map_gallery_img_2,
            videoCode: '9YffrCViTVk'
        },
        {
            id: 3,
            image: map_gallery_img_3,
            videoCode: 's5qltDnU4aA'
        },
        {
            id: 4,
            image: map_gallery_img_1,
            videoCode: 'l7I9NirHsU0'
        },
        {
            id: 5,
            image: map_gallery_img_2,
            videoCode: 'l7I9NirHsU0'
        }
    ]
    const handleClick = async (url)=>{
        await setVideoUrl(url)
        setDialogOpen(true)
    }
    return (
        <div className={classes.carouselContainer}>
            <Dialog open={dialogOpen} fullWidth={true} maxWidth={'sm'} onClose={()=>{setDialogOpen(false)}}>
                <iframe title={items[0].videoCode} className={classes.videoFrame} src={"https://www.youtube.com/embed/"+videoUrl} frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Dialog>
            <Slider {...settings} className="viedo-carousel">
                {items.map(item=>(
                    <div key={item.id}>
                        <div className={'playButtonContainer'}>
                            <PlayCircleOutline onClick={(e)=>{handleClick(item.videoCode)}}/>
                        </div>
                        <img className="w-100" src={item.image} alt="One" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default VideoCarousel
