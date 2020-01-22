import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookGridScreen from './screens/book-grid';
import AddBookScreen from './screens/add-book';
import ViewBookScreen from './screens/view-book';

export default class BookScreen extends React.Component {

    render() {
        return <React.Fragment>
            
            <Router>
                <Route exact path="/home/books" component={BookGridScreen} />    
                <Route exact path="/home/books/add" component={AddBookScreen} />
                <Route exact path="/home/books/view" component={ViewBookScreen} />
            </Router>

        </React.Fragment>
    }
}