import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ResultQuiz from './ResultQuiz';
import Vocational from './Vocational';
function Quiz() {
  const pageQuiz = useSelector(state => state.pageQuiz);

  return (
    <Switch>
      {pageQuiz === 0 ?
        <Route path="/quiz" component={Vocational} />
        :
        <Route path="/quiz" component={ResultQuiz} />
      }
    </Switch>
  );
}

export default Quiz;