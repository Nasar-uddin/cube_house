import React, {useEffect, useContext, useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Navbar from '../widgets/Navbar'
import { Fab, Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import 'pannellum/build/pannellum'
import 'pannellum/build/pannellum.css'
import { ApiContext } from '../../context/ApiContext'
import {PlayArrow , Pause} from '@material-ui/icons'
const useStyles = makeStyles((theme)=>({
    panoramaContainer: {
        minHeight: '720px',
        height: '100vh'
    }
}))

function Photo360View() {
    const [audio, setAudio] = useState()
    const [playing, setPlaying] = useState(false)
    const {id} = useParams()
    const [viewer, setViewer] = useState()
    const {loadPanoramaImage, panoramaImage} = useContext(ApiContext)
    const location = useLocation()
    const forDebug = new URLSearchParams(location.search).get('debug')
    const classes = useStyles()
    const handlePlay = ()=>{
        if(playing){
            audio.pause()
            setPlaying(false)
        }else{
            audio.play()
            setPlaying(true)
        }
    }
    useEffect(()=>{
        loadPanoramaImage(id)
        if(panoramaImage){
            setViewer(window.pannellum.viewer(
                'panoroma',
                {
                    "hotSpotDebug": forDebug === 'true'? true: false,
                    ...panoramaImage,
                }
            ))
            let soundToPlay
            const scenes = panoramaImage.scenes
            for(var key in scenes){
                soundToPlay = scenes[key].audio;
                break
            }
            setAudio(new Audio(soundToPlay))
        }
    },[panoramaImage, id, forDebug, loadPanoramaImage])
    
    useEffect(()=>{
        if(viewer){
            if(panoramaImage){
                viewer.on('scenechange', (sceneId)=>{
                    if(panoramaImage.scenes[sceneId].audio){
                        if(playing){
                            audio.pause()
                        }
                        setAudio(new Audio(panoramaImage.scenes[sceneId].audio))
                    }else{
                        console.log('No audio url')
                    }
                })
            }
        }
    },[viewer, audio])
    
    useEffect(()=>{
        if(audio){
            // console.log(audio)
            audio.play()
            .then(()=>{
                setPlaying(true)
            }).catch(()=>{
                setPlaying(false)
            })
            return ()=> {
                audio.pause()
            }
        }
    },[audio])
    return (
        <div>
            <Navbar/>
            <Grid container style={{poition: 'relative'}}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div id="panoroma" className={classes.panoramaContainer}></div>
                </Grid>
                <Fab size="small" color="primary" onClick={handlePlay} style={{position: 'absolute', right: '20px', bottom: '20px'}}>
                    {playing? <Pause/> : <PlayArrow/>}
                </Fab>
            </Grid>
        </div>
    )
}

export default Photo360View
