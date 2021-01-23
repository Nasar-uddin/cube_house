import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    ServiceCardRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 20px',
        textAlign: 'center',
        transition: '0.3s',
        '&:hover': {
            transform: 'translateY(-5px)',
            backgroundColor: '#ffffff',
            '&>img': {
                transform: 'scale(1.1)'
            }
        }
    },
    ServiceCardImage: {
        width: '80px',
        transition: '0.3s'
    },
    ServiceTitle: {
        fontSize: '1.5rem',
        margin: 0,
        marginTop: '20px'
    },
    ServiceSubTitle: {
        marginTop: '10px',
        opacity: 0.8
    }
}))
function ServiceCard({image, title, subTitle}) {
    const classes = useStyles()
    return (
        <div className={classes.ServiceCardRoot}>
            <img className={classes.ServiceCardImage} src={image} alt={title}/>
            <h4 className={classes.ServiceTitle}>{title}</h4>
            <p className={classes.ServiceSubTitle}>{subTitle}</p>
        </div>
    )
}

export default ServiceCard
