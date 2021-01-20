import { Container, Grid } from '@material-ui/core'
import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MyTabs, {MyTab} from '../custom_mui_components/MyTabs'
import {Room, Flare, Store} from '@material-ui/icons'
import TabPanel from '../custom_mui_components/TabPanel'

const useStyles = makeStyles((theme)=>({
    projectRoot: {
        paddingTop: '50px',
        paddingBottom: '50px'
    }
}))

function Projects() {
    const classes = useStyles()
    const [activeIndex, setActiveIndex] = useState(0)
    const handleChange = (_, newIndex)=> {
        setActiveIndex(newIndex)
    }
    return (
        <Container maxWidth="md">
            <Grid container className={classes.projectRoot}>
                <Grid item lg={12} md={12} sm={12}>
                    <MyTabs value={activeIndex} onChange={handleChange} centered={true}>
                        <MyTab disableRipple={true} label="One" icon={<Room />}/>
                        <MyTab disableRipple={true} label="Two" icon={<Flare />}/>
                        <MyTab disableRipple={true} label="Three" icon={<Store />}/>
                    </MyTabs>
                </Grid>
                <Grid item lg={12} md={12}>
                    <TabPanel value={activeIndex} index={0}>
                        One
                    </TabPanel>
                    <TabPanel value={activeIndex} index={1}>
                        Two
                    </TabPanel>
                    <TabPanel value={activeIndex} index={2}>
                        Three
                    </TabPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects
