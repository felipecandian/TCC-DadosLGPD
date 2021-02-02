import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Mentoring from './Mentoring';
import Quiz from './Quiz';
import Streaming from './Streaming';
import Welcome from './Welcome';

function Main() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/mentoring" component={Mentoring} />
                <Route exact path="/streaming" component={Streaming} />
            </Switch>
        </div>
    );
}

export default Main;