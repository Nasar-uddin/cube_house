import React from 'react'
import WorkDetails from './components/views/WorkDetails'
import ProjectCards from './components/views/ProjectCards'
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom'
import ProjectCategoryCards from './components/views/ProjectCategoryCards'
import Photo360View from './components/views/Photo360View'


function App() {
    return (
        <Router>
            <Switch>
                {/* TODO: remove this block for production */}
                <Route exact path="/">
                    <h1>This is home page</h1>
                    <Link to={'/projects/1'}>Go to project</Link>
                </Route>
                {/* Till this line */}
                <Route exact path="/category/:id">
                    <ProjectCards/>
                </Route>
                <Route exact path="/category">
                    <ProjectCategoryCards/>
                </Route>
                <Route path="/projects/:id">
                    <WorkDetails/>
                </Route>
                <Route path="/360photo/:id">
                    <Photo360View/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App

