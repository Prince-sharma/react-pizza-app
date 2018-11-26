/*var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CheckboxGroup = require('react-checkbox-group');


var data = require('../data');


var Choose = React.createClass({
   getInitialState: function() {
        return {
            toppings: [] 
        };
    }, 
    
    render: function() {
    return (
      <div>
        <h1>ON IT?</h1>

        
        <button className="myButton" onClick={this.allMyToppings} type="button" disabled={disabled}>LET THERE BE PIZZA</button>

      </div>
    );
  }
});


    

//Called when clicking the 'let there be pizza' button, passes all my currently selected toppings.
allMyToppings: function(){
    setData("toppings", this.state.toppings) //sets a new key called "toppings" to my info object, and passes it the current state of my toppings as an array.
    this.props.history.push('/Done');
}

module.exports = Choose;



*/