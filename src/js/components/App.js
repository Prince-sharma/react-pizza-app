var React = require('react');
var Link = require('react-router').Link;


// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
        
        <main>{this.props.children}</main>
        
        <footer>
        </footer>
      </div>
    );
  }
});

module.exports = App;