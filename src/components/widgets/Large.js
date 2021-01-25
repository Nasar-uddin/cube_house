import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MyTabs, { MyTab } from '../custom_mui_components/MyTabs'
import TabPanel from '../custom_mui_components/TabPanel'
import { ExpandMore } from '@material-ui/icons'

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

function Large({projects}) {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(1)
    const [activeIndex, setActiveIndex] = useState(0)
    const handleAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
      };
    const handleChange = (_, newIndex) => {
        setActiveIndex(newIndex)
    }
    return (
        <Container maxWidth="lg" className={classes.projectRoot}>
            <Grid container>
                <Grid item container justify="center" lg={12} sm={12} md={12} xs={12} xl={12}>
                    <MyTabs value={activeIndex} onChange={handleChange} centered={true}>
                        {projects.map(project=>(
                            <MyTab disableRipple={true} label={project.title} key={project.id}/>
                        ))}
                    </MyTabs>
                </Grid>
            </Grid>
            <div>
                {projects.map((project)=>(
                    <TabPanel value={activeIndex} index={project.id} key={project.id} className={classes.tabPanel}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12}>
                                <h2 className={classes.sectionTitle}>{project.heading}</h2>
                                <p className={classes.sectionSubTitle}>{project.subheading}</p>
                                <p className={classes.sectionText}>{project.text}</p>
                                {project.subsections.length>0?(
                                    <div>
                                        {project.subsections.map(subS=>(
                                            <Accordion expanded={expanded === subS.id} key={subS.id} 
                                                style={{backgroundColor: 'rgba(255,255,255,0.4)', boxShadow: 'none'}}
                                                onChange=  {handleAccordion(subS.id)}>
                                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                                    <Typography variant='h6'>{subS.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography variant='subtitle1'>{subS.text}</Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </div>
                                ): ""}
                            </Grid>
                            <Grid item lg={6} md={6} sm={12}>
                                <img className={classes.mediaImage} src={project.image} alt="house" />
                            </Grid>
                        </Grid>
                    </TabPanel>
                ))}
            </div>
        </Container>
    )
}

export default Large
