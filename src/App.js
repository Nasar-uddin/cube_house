import React from 'react'
import WorkDetails from './components/views/WorkDetails'
import ProjectCards from './components/views/ProjectCards'
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom'
import ProjectCatagoryCards from './components/views/ProjectCatagoryCards'


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
                <Route exact path="/projects">
                    <ProjectCards/>
                </Route>
                <Route exact path="/categories">
                    <ProjectCatagoryCards/>
                </Route>
                <Route path="/projects/:id">
                    <WorkDetails/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App

