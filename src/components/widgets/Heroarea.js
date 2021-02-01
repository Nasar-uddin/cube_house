import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import curve from '../../assets/curve.svg'
import { Parallax } from 'react-parallax'

const useStyles = makeStyles((theme)=>({
    heroContainer: {
        padding: '0px 40px',
        color: '#ffffff',
        '& .react-parallax-content': {
            backgroundColor: 'rgba(0, 0, 0, 0.35)'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0px 20px',
        }
    },
    heroareaRoot: {
        height: '100vh',
        minHeight: '720px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroTitle: {
        fontSize: '7.5rem',
        fontWeight: '700',
        textAlign: 'center',
        margin: '0px',
        lineHeight: '1em',
        marginTop: '25px',
        letterSpacing: '0.1em',
        [theme.breakpoints.down('md')]: {
            fontSize: '6.2rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem'
        }
    },
    heroSubTitle: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '500',
        letterSpacing: '0.2em',
        fontSize: '1.375rem',
        '& .sub-title': {
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    },
    curveLine: {
        padding: '0px 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10px',
        }
    }
}))

function Heroarea({heading, subHeading, image}) {
    const classes = useStyles()
    return (
        <div className={classes.heroContainer}>
            <Parallax strength={200} bgImage={image}>
                <div className={classes.heroareaRoot}>
                    <div className={classes.heroSubTitle}>
                        <span className={classes.curveLine}>
                            <img src={curve} alt="curve line"/>
                        </span>
                        <span className={'sub-title'}>
                            {subHeading}
                        </span>
                        <span className={classes.curveLine}>
                            <img src={curve} alt="curve line"/>
                        </span>
                    </div>
                    <h1 className={classes.heroTitle}>{heading}</h1>
                </div>
            </Parallax>
        </div>
    )
}

export default Heroarea
