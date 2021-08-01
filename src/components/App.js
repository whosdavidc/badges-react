import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges.js';
import BadgeNew from '../pages/BadgeNew.js';    
import Layout from './Layout.js';
import NotFound from '../pages/NotFound.js';
import Home from '../pages/Home.js';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route exact path='/badges' component={ Badges }/>
                        <Route exact path='/badges/new' component={ BadgeNew }/>
                        <Route component={ NotFound }/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App;