import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, {useContext, useEffect} from 'react'
import GridCard from '../widgets/GridCard'
import Navbar from '../widgets/Navbar'
import {ApiContext} from '../../context/ApiContext'
import InfiniteScroll from 'react-infinite-scroll-component'

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop: '130px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '90px',
        }
    },
    cardRoot: {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.05)'
    },
}))
function LazyGrid() {
    const {projects, loadMoreProjects} = useContext(ApiContext)
    const classes = useStyles()
    useEffect(() => {
    }, [projects])
    return (
        <div>
            <Navbar/>
            <Container maxWidth="lg" className={classes.container}>
                {projects ? <InfiniteScroll 
                dataLength={projects.results.length}
                next={loadMoreProjects}
                hasMore={true}
                scrollThreshold={0.9}
                style={{overflow: 'none'}}
                >
                    <Grid container spacing={4}>
                        {projects.results.map((result)=>(
                            <Grid item xl={3} lg={3} md={3} sm={6} xs={6} key={result.id}>
                                <GridCard project={result}/>
                            </Grid>
                        ))}
                </Grid>
                </InfiniteScroll>:<></>}
            </Container>
        </div>
    )
}

export default LazyGrid
 