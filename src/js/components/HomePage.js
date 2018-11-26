var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var HomePage = React.createClass({
    render: function() {
    return (
      <div>
        <h1>WELCOME TO PIZZA!</h1>
            <iframe className="videoframe" width="420" height="230" src="https://www.youtube.com/embed/CJEoASUMZbI?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
                <Link to="/order" className="myButton">GIMME PIZZA</Link>
                      </div>
    );
  }
});




module.exports = HomePage;
