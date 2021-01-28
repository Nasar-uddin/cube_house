import { Box, Container, Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React, {useState} from 'react'
import ImageCarousel from './sub_widgets/ImageCarousel'
import MyTabs, { MyTab } from '../custom_mui_components/MyTabs'
import TabPanel from '../custom_mui_components/TabPanel'


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
    },
    pt_3: {
        paddingTop: '20px'
    },
    orderTwo: {
        [theme.breakpoints.down('sm')]: {
            order: 2
        }
    },
    orderThree: {
        [theme.breakpoints.down('sm')]: {
            order: 3
        }
    },
    
}))
function OurGallery({floorplans}) {
    const classes = useStyles()
    const [activeIndex, setActiveIndex] = useState(0)
    const handleChange = (_, newIndex) => {
        setActiveIndex(newIndex)
    }
    // console.log(floorplans)
    return (
        <Container>
            <Grid container className="section-padding-t" spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.textRoot}>
                    <p className={classes.title}>OUR GALLERY</p>
                    <h2 className={classes.heading}>Layouts Plan</h2>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.orderThree}>
                        {floorplans.map((fp)=>(
                            <TabPanel value={activeIndex} index={fp.id-1} key={fp.id-1}>
                                <ImageCarousel items={fp.sections}/>
                            </TabPanel>
                        ))}
                </Grid>
                <Grid item container lg={6} md={6} sm={12} xs={12} className={classes.orderTwo}>
                    <Grid item container justify="center" xs={12} sm={12} md={12} lg={12}>
                        <MyTabs value={activeIndex} onChange={handleChange} centered={true}>
                            {floorplans.map(fp=>(
                                <MyTab disableRipple={true} label={fp.heading} key={fp.heading}/>
                            ))}
                        </MyTabs>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        {floorplans.map((fp)=>(
                            <TabPanel value={activeIndex} index={fp.id-1} key={fp.id-1}>
                                <Box display="flex" justifyContent="center" className={classes.pt_3}>
                                    <img src={fp.image} alt={fp.heading} style={{maxWidth: '250px'}}/>
                                </Box>
                            </TabPanel>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default OurGallery
