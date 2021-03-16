import { Box, Button, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, {useContext, useState} from 'react'
import GridCard from '../widgets/GridCard'
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
    }
}))
function LazyGrid() {
    const {projects, loadMoreProjects} = useContext(ApiContext)
    const classes = useStyles()
    const [filterResult, setFilterResult] = useState(false)
    const toggleFilter = ()=>{
        setFilterResult(!filterResult)
    }
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Box mb={1}>
                    <Grid container spacing={4}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Button color='primary' variant={filterResult? 'contained': 'outlined'} onClick={toggleFilter}>Intersted only</Button>
                        </Grid>
                    </Grid>
                </Box>
                {projects ? <InfiniteScroll 
                dataLength={projects.results.length}
                next={loadMoreProjects}
                hasMore={true}
                scrollThreshold={0.9}
                style={{overflow: 'none'}}
                >
                    <Grid container spacing={4}>
                        {projects.results.filter((result)=>{
                            return result.interested || !filterResult
                        }).map((result)=>(
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
 