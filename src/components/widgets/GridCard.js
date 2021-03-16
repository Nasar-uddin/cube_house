import React, {useContext} from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {FavoriteBorder, FavoriteOutlined} from '@material-ui/icons'
import MyButton from '../custom_mui_components/MyButton'
import {ApiContext} from '../../context/ApiContext'

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.05)',
        position: 'relative'
    },
    cardFavriteIcon: {
        position: 'absolute',
        right: '0px'
    },
    cardAction: {
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center'
    }
}))
function GridCard({ project }) {
    const classes = useStyles()
    const history = useHistory()
    const {toggleProjectInterest} = useContext(ApiContext)
    return (
        <Card className={classes.cardRoot}>
            <IconButton className={classes.cardFavriteIcon} onClick={(e)=>{toggleProjectInterest(project.id)}}>
                {project.interested?
                    <FavoriteOutlined style={{color: '#f74040'}}/>
                : <FavoriteBorder/>}
            </IconButton>
            <CardMedia>
                <img className="w-100" src={project.thumbnail} alt={project.title} />
            </CardMedia>
            <CardContent>
                <Typography style={{ textAlign: 'center' }} variant="h3" component="h3">{project.title}</Typography>
                <Typography style={{ textAlign: 'center' }} variant="body1" component="p">{project.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <MyButton onClick={(e)=>{history.push('/projects/'+project.id)}}>Learn More</MyButton>
            </CardActions>
        </Card>
    )
}

export default GridCard
