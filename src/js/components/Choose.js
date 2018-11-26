var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var CheckboxGroup = require('react-checkbox-group');



var data = require('../data');


var pizzas = [
  {
    name: 'Classy',
    src: "http://belladia.typepad.com/crafty_crow/images/2008/10/13/jessyratfinkhalloween1pitapi.jpg",
    price: 6.50
  },
    {
    name: 'Very Classy',
    src: "http://belladia.typepad.com/crafty_crow/images/2008/10/13/jessyratfinkhalloween2pitapi.jpg",
    price: 5.50
  },
    {
    name: 'So Classy',
    src: "https://s-media-cache-ak0.pinimg.com/236x/c7/0e/05/c70e0559e3b750022d100c6368d88fc7.jpg",
    price: 4.50
  },
    {
    name: 'So So Classy',
    src: "http://www.heinzfoodservice.com/~/media/HeinzFoodService/assets/img/content/Interest%20Sections/Menu%20Ideas/Customization/Play%20with%20your%20Food/body_Pizza.ashx",
    price: 7.25
  },
    {
    name: 'So so SO Classy',
    src: "http://hamiltonbeach.in/media/recipes/images/1ce6f0046737274a0161e8b954467126.jpg",
    price: 10.80
  },
    {
    name: 'So so sO SO CLASSY',
    src: "http://www.thelittleactivitychest.com/wp-content/uploads/2014/06/pizza-face.jpg",
    price: 10.80
  },
    {
    name: "Gurl you didn't",
    src: "http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/pizza_carrot3_1.jpg",
    price: 10.80
  },
    {
    name: 'Oh yas I did',
     src: "http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/pizza_tuna1_1.jpg",
    price: 100.450
  }
];

var Choose = React.createClass({
  
  getInitialState: function(){
    return {
      choices: []
    }
  },
  choicesChanged: function(e){
    console.log(e)
    var choice = {name: e.target.value.name, price: e.target.value.price, src: e.target.value.src}
    
    this.setState({
      choices: this.state.choices.push(choice)
    })
    
  },
    render: function() {
        
    return (
      <div>
        <h1>WDYW</h1>
        <iframe width="420" height="230" src="https://www.youtube.com/embed/YSR9Xj2SBjM?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
        <div className="pizzas">
       <CheckboxGroup name="choices" onChange={this.choicesChanged}>
  {
    Checkbox => (
      <form>
        {pizzas.map(function(pizza){
          return (
            <div>
              <label>
                <Checkbox value={pizza}/> {pizza.name}
                <img src={pizza.src} />
              </label>
            </div>
          );
        })}
      </form>
    )
  }
        </CheckboxGroup>
        </div>
        <button className="myButton" /*onClick={this.pizzaChoice}*/ type="button" /*disabled={disabled}*/ >LET THERE BE PIZZA</button>
      </div>
    );
  }
});




module.exports = Choose;
/*
  //Called when clicking the 'let there be pizza' button, passes all my currently selected pizzas.
    pizzaChoice: function() {
    setData("pizza", this.state.pizza) //sets a new key called "toppings" to my info object, and passes it the current state of my selection of pizza as an array.
    this.props.history.push('/Done');
}*/



