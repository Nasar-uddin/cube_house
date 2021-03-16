import React, {useEffect, useContext} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Navbar from '../widgets/Navbar'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import 'pannellum/build/pannellum'
import 'pannellum/build/pannellum.css'
import { ApiContext } from '../../context/ApiContext'

const useStyles = makeStyles((theme)=>({
    panoramaContainer: {
        minHeight: '720px',
        height: '100vh'
    }
}))

function Photo360View() {
    const {id} = useParams()
    const {loadPanoramaImage, panoramaImage} = useContext(ApiContext)
    const location = useLocation()
    const forDebug = new URLSearchParams(location.search).get('debug')
    const classes = useStyles()
    useEffect(()=>{
        loadPanoramaImage(id)
        if(panoramaImage){
            window.pannellum.viewer(
                'panoroma',
                {
                    "hotSpotDebug": forDebug === 'true'? true: false,
                    ...panoramaImage
                }
            )
        }
    },[panoramaImage, id, forDebug, loadPanoramaImage])
    return (
        <div>
            <Navbar/>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div id="panoroma" className={classes.panoramaContainer}></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Photo360View
