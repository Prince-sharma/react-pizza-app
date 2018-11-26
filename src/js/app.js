//REQUIREES. Connects with all bits and pieces needed to run the stuff on the page.
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

//imports the components, so we can pass them to our router below.
var App = require('./components/App');
var HomePage = require('./components/HomePage');
var Order = require('./components/Order');
var Choose = require('./components/Choose');
/*var Custom = require('./components/Custom');
var Done = require('./components/Done');*/





//ROUTES
/*
This section says:
  - If the route starts with /, load the App component
  - If the route IS /, load the Home component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is /team, load the Team component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is anything else, load the NotFound component INSIDE App as this.props.children
*/
var router = (
    <Router history={browserHistory}> 
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="order" component={Order} />
            <Route path="choose" component={Choose} />
           {/*<Route path="custom" component={Custom} />
            <Route path="done" component={Done} />*/}
        </Route>
    </Router>
);


//Key to the whole thing. This is the code that when it runs renders the rest of our code.
ReactDOM.render(router, document.getElementById('app'));