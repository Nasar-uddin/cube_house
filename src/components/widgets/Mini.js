import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ServiceCard from './sub_widgets/ServiceCard'


function Mini({services}) {
    return (
        <Container maxWidth="lg" className="section-padding-t">
            <Grid container spacing={2}>
                {services.map((service)=>(
                    <Grid item key={service.id} lg={3} md={3} sm={6} xs={12}>
                        <ServiceCard image={service.image} title={service.heading} subTitle={service.text}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Mini
