import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Books from './components/books/Books';
import BookDetails from './components/books/BookDetails';
import history from "./history";
class App extends Component{
	render(){
		return(
			<Router history={history} >
				<Switch>
					<Route exact path="/" component={Books} />
		            <Route path="/:id" component={BookDetails} />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();