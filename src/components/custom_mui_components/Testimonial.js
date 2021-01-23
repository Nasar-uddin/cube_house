import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    root: {
        textAlign: 'center',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeAvater: {
        height: theme.spacing(10),
        width: theme.spacing(10)
    },
    queto: {
        fontSize: '1.5rem',
        letterSpacing: '1px',
        fontWeight: '500',
        fontStyle: 'italic',
        marginBottom: '0'
    }, 
    title: {
        opacity: 0.8
    }
}))

function Testimonial({avater, queto, name, profesion}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Avatar className={classes.largeAvater} src={avater} alt="avater"/>
            <p className={classes.queto}>{queto}</p>
            <p className={classes.title}>{name}<br/>({profesion})</p>
        </div>
    )
}

export default Testimonial
