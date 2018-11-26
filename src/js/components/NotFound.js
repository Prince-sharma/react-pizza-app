var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
              <h1>Couldn't find what you were looking for...</h1>
        <Link to="/HomePage" className="myButton">BACK TO POTENTIAL PIZZA</Link>
      </div>
    );
  }
});

module.exports = NotFound;
