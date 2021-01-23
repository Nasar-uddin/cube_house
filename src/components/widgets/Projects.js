import { Container, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MyTabs, { MyTab } from '../custom_mui_components/MyTabs'
import { Room, Flare, Store } from '@material-ui/icons'
import TabPanel from '../custom_mui_components/TabPanel'

const useStyles = makeStyles((theme) => ({
    projectRoot: {
        paddingTop: '50px',
        paddingBottom: '50px'
    },
    tabPanel: {
        paddingTop: '50px',
    },
    mediaImage: {
        width: '100%'
    },
    sectionTitle: {
        fontSize: '4rem',
        margin: 0,
        marginBottom: '20px',
        fontWeight: '400'
    },
    sectionSubTitle: {
        fontSize: '1.375rem',
        letterSpacing: '1px',
        margin: 0,
        marginBottom: '20px',
        fontStyle: 'italic',
        fontWeight: '500'
    },
    sectionText: {
        opacity: '0.7',
        lineHeight: '150%'
    }
}))

function Projects({projects}) {
    const classes = useStyles()
    const [activeIndex, setActiveIndex] = useState(0)
    const handleChange = (_, newIndex) => {
        setActiveIndex(newIndex)
    }
    return (
        <Container maxWidth="lg" className={classes.projectRoot}>
            <Grid container>
                <Grid item container justify="center" lg={12} sm={12} md={12} xs={12} xl={12}>
                    <MyTabs value={activeIndex} onChange={handleChange} centered={true}>
                        <MyTab disableRipple={true} label="Project Complex" icon={<Room />} />
                        <MyTab disableRipple={true} label="Project Gallery" icon={<Flare />} />
                        <MyTab disableRipple={true} label="Project Park" icon={<Store />} />
                    </MyTabs>
                </Grid>
            </Grid>
            <div>
                {projects.map((project)=>(
                    <TabPanel value={activeIndex} index={project.id} key={project.id} className={classes.tabPanel}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12}>
                                <h2 className={classes.sectionTitle}>{project.heading}</h2>
                                <p className={classes.sectionSubTitle}>{project.subHeading}</p>
                                <p className={classes.sectionText}>{project.description}</p>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12}>
                                <img className={classes.mediaImage} src={project.image} alt="house" />
                            </Grid>
                        </Grid>
                    </TabPanel>
                ))}
                {/* <TabPanel value={activeIndex} index={1} className={classes.tabPanel}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12}>
                            <h2 className={classes.sectionTitle}>Delivering High Quality Projects 2</h2>
                            <p className={classes.sectionSubTitle}>Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate</p>
                            <p className={classes.sectionText}>Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor.</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <img className={classes.mediaImage} src={map_gallery_img_1} alt="house" />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={activeIndex} index={2} className={classes.tabPanel}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12}>
                            <h2 className={classes.sectionTitle}>Delivering High Quality Projects 3</h2>
                            <p className={classes.sectionSubTitle}>Lorem ipsum proin gravida nibh vel velit auctor aliollici tudin sed odio sit amet nibh vulputate</p>
                            <p className={classes.sectionText}>Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor.</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <img className={classes.mediaImage} src={map_gallery_img_2} alt="house" />
                        </Grid>
                    </Grid>
                </TabPanel> */}
            </div>
        </Container>
    )
}

export default Projects
