import React, { useState, useContext, useEffect} from 'react'
import {ApiContext} from '../../context/ApiContext'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Grid} from '@material-ui/core'
import Testimonial from '../custom_mui_components/Testimonial'
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
    largeAvater: {
        height: theme.spacing(7),
        width: theme.spacing(7)
    }
}))
function Testimonials() {
    const {loadTestimonials} = useContext(ApiContext)
    const [testimonials, setTestimonials] = useState()
    const classes = useStyles()
    useEffect(() => {
        if(!testimonials){
            loadTestimonials().then((data)=>{
                setTestimonials(data)
            })
        }
    }, [testimonials, loadTestimonials])
    if(!testimonials){
        return (<div></div>)
    }
    return (
        <Container maxWidth="lg" className='section-padding-t'>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.textRoot}>
                    <p className={classes.title}>HAPPY CUSTOMERS</p>
                    <h2 className={classes.heading}>Testimonials</h2>
                </Grid>
                {testimonials['results'].map((tes)=>(
                    <Grid item lg={4} md={4} sm={6} xs={12} key={tes.image}>
                        <Testimonial avater={tes.image} queto={`“${tes.queto}”`} name={tes.name} profesion={tes.profesion}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Testimonials
