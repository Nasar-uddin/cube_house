import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import MyButton from '../../custom_mui_components/MyButton'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme)=>({
    cardAction: {
        cardRoot: {
            background: 'transparent',
            color: 'white',
            transition: '0.3s',
            '&:hover': {
                background: 'white',
                color: '#222'
            }
        },
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle: {
        color: '#bf9410',
    }
}))

function CategoryCard({image, title, subTitle, id}) {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Box paddingLeft={2} paddingRight={2}>
            <Card className={classes.cardRoot}>
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
                    {/* Change the route for the category */}
                    <MyButton onClick={(e)=>{history.push('/category/'+id)}}>Learn More</MyButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default CategoryCard
