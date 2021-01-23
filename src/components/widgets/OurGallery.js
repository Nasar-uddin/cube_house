import { Container, Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import ImageCarousel from './sub_widgets/ImageCarousel'

const useStyles = makeStyles((theme)=>({
    textRoot: {
        textAlign: 'center'
    },
    title: {
        color: '#bf9410'
    },
    heading: {
        fontSize: '4rem',
        margin: 0,
        marginBottom: '40px',
        fontWeight: '400'
    }
}))
function OurGallery() {
    const classes = useStyles()
    // const handleClick = (e)=>{
    //     console.log(e.target.id)
    // }
    return (
        <Container>
            <Grid container className="section-padding-t" spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.textRoot}>
                    <p className={classes.title}>OUR GALLERY</p>
                    <h2 className={classes.heading}>Layouts Plan</h2>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ImageCarousel/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    {/* <div style={{width: '100%', overflow: 'hidden'}}>
                        <svg width="502px" height="501px" viewBox="0 0 502 501" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="one" onClick={handleClick} transform="translate(0.5 0.5)">
                            <path d="M0 0L250 0L250 250L0 250L0 0Z" id="Rectangle-2" fill="none" stroke="#808080" strokeWidth="1" />
                            <g id="1" transform="translate(106.5 81.5)">
                            <path d="M26.4375 66.3438L16.7813 66.3438L16.7813 39.9063L16.875 35.5625L17.0313 30.8125Q14.625 33.2188 13.6875 33.9688L8.4375 38.1875L3.78125 32.375L18.5 20.6563L26.4375 20.6563L26.4375 66.3438Z" />
                            </g>
                        </g>
                        <g id="two" transform="translate(0.5 250.5)">
                            <path d="M0 0L250 0L250 250L0 250L0 0Z" id="Rectangle-2-Copy" fill="none" stroke="#808080" strokeWidth="1" />
                            <g id="3" transform="translate(107 82)">
                            <path d="M32.7188 30.875Q32.7188 35.1563 30.125 38.1563Q27.5312 41.1563 22.8438 42.2813L22.8438 42.4688Q28.375 43.1563 31.2188 45.8281Q34.0625 48.5 34.0625 53.0313Q34.0625 59.625 29.2813 63.2969Q24.5 66.9688 15.625 66.9688Q8.1875 66.9688 2.4375 64.5L2.4375 56.2813Q5.09375 57.625 8.28125 58.4688Q11.4688 59.3125 14.5938 59.3125Q19.375 59.3125 21.6563 57.6875Q23.9375 56.0625 23.9375 52.4688Q23.9375 49.25 21.3125 47.9063Q18.6875 46.5625 12.9375 46.5625L9.46875 46.5625L9.46875 39.1563L13 39.1563Q18.3125 39.1563 20.7656 37.7656Q23.2188 36.375 23.2188 33Q23.2188 27.8125 16.7188 27.8125Q14.4688 27.8125 12.1406 28.5625Q9.8125 29.3125 6.96875 31.1563L2.5 24.5Q8.75 20 17.4063 20Q24.5 20 28.6094 22.875Q32.7188 25.75 32.7188 30.875Z" />
                            </g>
                        </g>
                        <g id="three" transform="translate(250.5001 0.5)">
                            <path d="M0 0L250 0L250 250L0 250L0 0Z" id="Rectangle-2-Copy-2" fill="none" stroke="#808080" strokeWidth="1" />
                            <g id="2" transform="translate(100.9999 81)">
                            <path d="M34.5 66.3438L2.5625 66.3438L2.5625 59.625L14.0313 48.0313Q19.125 42.8125 20.6875 40.7969Q22.25 38.7813 22.9375 37.0625Q23.625 35.3438 23.625 33.5Q23.625 30.75 22.1094 29.4063Q20.5937 28.0625 18.0625 28.0625Q15.4062 28.0625 12.9063 29.2813Q10.4063 30.5 7.6875 32.75L2.4375 26.5313Q5.8125 23.6563 8.03125 22.4688Q10.25 21.2813 12.875 20.6406Q15.5 20 18.75 20Q23.0313 20 26.3125 21.5625Q29.5938 23.125 31.4063 25.9375Q33.2188 28.75 33.2188 32.375Q33.2188 35.5313 32.1094 38.2969Q31 41.0625 28.6719 43.9688Q26.3437 46.875 20.4688 52.25L14.5938 57.7813L14.5938 58.2188L34.5 58.2188L34.5 66.3438Z" />
                            </g>
                        </g>
                        <g id="four" transform="translate(250.5001 250.5)">
                            <path d="M0 0L250 0L250 250L0 250L0 0Z" id="Rectangle-2-Copy-3" fill="none" stroke="#808080" strokeWidth="1" />
                            <g id="4" transform="translate(106.5 81.5)">
                            <path d="M35.5313 56.875L30.0313 56.875L30.0313 66.3438L20.5938 66.3438L20.5938 56.875L1.09375 56.875L1.09375 50.1563L21.125 20.6563L30.0313 20.6563L30.0313 49.375L35.5313 49.375L35.5313 56.875ZM20.5938 49.375L20.5938 41.625Q20.5938 39.6875 20.75 36Q20.9063 32.3125 21 31.7188L20.75 31.7188Q19.5938 34.2813 17.9688 36.7188L9.59375 49.375L20.5938 49.375Z" />
                            </g>
                        </g>
                        </svg>
                    </div> */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default OurGallery