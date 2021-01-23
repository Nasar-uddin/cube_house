import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ServiceCard from './sub_widgets/ServiceCard'
import property_custom_icon_1 from '../../assets/property_custom_icon_1.png'
import property_custom_icon_2 from '../../assets/property_custom_icon_2.png'
import property_custom_icon_3 from '../../assets/property_custom_icon_3.png'
import property_custom_icon_4 from '../../assets/property_custom_icon_4.png'

function Services() {
    return (
        <Container maxWidth="lg" className="section-padding-t">
            <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <ServiceCard image={property_custom_icon_1} title={"Lux Appliances"} subTitle={"Lorem ipsum proin vel velit auctor aliolli citudin"}/>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <ServiceCard image={property_custom_icon_2} title={"Fast WI-FI"} subTitle={"Lorem ipsum proin vel velit auctor aliolli citudin"}/>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <ServiceCard image={property_custom_icon_3} title={"Swimming Pool"} subTitle={"Lorem ipsum proin vel velit auctor aliolli citudin"}/>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <ServiceCard image={property_custom_icon_4} title={"Parking Place"} subTitle={"Lorem ipsum proin vel velit auctor aliolli citudin"}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Services
