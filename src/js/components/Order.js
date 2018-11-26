var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var data = require('../data');


var Order = React.createClass({
    
    //Returns our initial state, if we have data. it returns an object with 'nickname' and 'email', either with values or without.
    getInitialState: function() {
    
        var info = data.getData('info') || {}; 
        //var info is set as the result of either: 
        //...the getData function in our data.js file, which takes a key (here we name it 'info') and returns an object with that name.
        //or
        //...an empty object.
        
        return {
            nickName: info.nickName || '', //assign the particular nickName of our info object to 'nickname', and the particular email of our info object to 'email', or assign an empty string, if we do not have any data.
            email: info.email || ''
        };
    }, 
    
    //
    handleChange: function(fieldThatChanged, ev) {
        var newState = {}; //sets an empty object as our initial state
        
        newState[fieldThatChanged] = ev.target.value; //selects the value fieldThatChanged sets its as a key in the object newState

        this.setState(newState);
        
        // this is the es6 way thanks to object literal improvements
        // this.setState({
        //     [fieldThatChanged]: ev.target.value
        // })
    },
   
    continueOrder: function() {
        data.setData('info', this.state);
        
        // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
        this.props.history.push('/choose');
    },
    render: function() {
        
        var disabled = this.state.nickName.length === 0 || this.state.email.length === 0;
        
        var that = this; //because otherwise we will not have access to 'this' when we use it below.
        
        return (
            <div>
                <form>
                    <iframe width="420" height="230" src="https://www.youtube.com/embed/533WzlVR3Nw?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
                    <div className="nicknameandemail">
                        <input value={this.state.nickName} onChange={function(ev) {that.handleChange('nickName', ev); } } type="text" placeholder="nickname"/>
                        <input value={this.state.email} onChange={function(ev) { that.handleChange('email', ev); } } type="text" placeholder="email"/>
                    </div>
                    
                    <button className="myButton" onClick={this.continueOrder} type="button" disabled={disabled}>GET DAT PIZZA</button>
                    
                </form>
            </div>
        );
    }
});


module.exports = Order;
