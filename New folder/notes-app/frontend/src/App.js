import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import './styles/app.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/notes/:id" component={NotePage} />
            </Switch>
        </Router>
    );
}

export default App;