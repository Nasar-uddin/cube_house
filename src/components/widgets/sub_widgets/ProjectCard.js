import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import MyButton from '../../custom_mui_components/MyButton'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme)=>({
    cardAction: {
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle: {
        color: '#bf9410',
    }
}))

function ProjectCard({image, title, subTitle, id}) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Box paddingLeft={2} paddingRight={2}>
            <Card>
                <CardActionArea disableRipple>
                    <CardMedia component="img"
                        alt="image"
                        image={image}
                    />
                    <CardContent>
                        <Typography className={classes.cardTitle} variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {subTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardAction}>
                    <MyButton onClick={(e)=>{history.push('/projects/'+id)}}>Learn More</MyButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default ProjectCard
