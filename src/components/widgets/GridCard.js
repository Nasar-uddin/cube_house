import React from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {FavoriteBorder} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
    cardRoot: {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.05)',
        position: 'relative'
    },
    cardFavriteIcon: {
        position: 'absolute',
        right: '0px'
    }
}))
function GridCard({ project }) {
    const classes = useStyles()
    return (
        <Card className={classes.cardRoot}>
            <IconButton className={classes.cardFavriteIcon}>
                <FavoriteBorder/>
            </IconButton>
            <CardMedia>
                <img className="w-100" src={project.thumbnail} alt={project.title} />
            </CardMedia>
            <CardContent>
                <Typography style={{ textAlign: 'center' }} variant="h3" component="h3">{project.title}</Typography>
                <Typography style={{ textAlign: 'center' }} variant="body1" component="p">{project.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default GridCard
