import React from 'react'
import WorkDetails from './components/views/WorkDetails'
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/projects/:id">
                    <WorkDetails/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App

