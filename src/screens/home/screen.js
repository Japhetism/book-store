import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookScreen from './screens/book'

export default class HomeScreen extends  React.Component{

    render() {
        return <React.Fragment>
            
            <Router>
                <Switch>
                    <Route path="/home/books" component={BookScreen} />
                </Switch>           
            </Router>

        </React.Fragment>
    }
}