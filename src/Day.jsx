var React = require('react');
var Eventful = require('eventful-react');

var Day = Eventful.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {

    return {

    };
  },
  componentDidMount: function() {

  },


  render: function() {

    var eventsToDisplay = [];
    for (var key in this.props.eventsForDayClicked) {
      var loggedEvent = this.props.eventsForDayClicked[key]
      eventsToDisplay.push(
        <div className="logged-message">            
          <div className="logged-message-title">              
            {loggedEvent.name}
          </div>
          <div className="logged-message-text">
            {loggedEvent.text}
          </div>
        </div>
      );
    };
    
    if (this.props.suggestionsForDayClicked) {
      for (var i = 0; i < this.props.suggestionsForDayClicked.length; i++) {
        var loggedEvent = this.props.suggestionsForDayClicked[i].item.name
        eventsToDisplay.push(
          <div className="logged-message">            
              You should pick up some {loggedEvent}
          </div>
        );
      };
    }

    return (
      <div>
        <div><h2>{this.props.dateClicked}</h2></div>          
        <div>{eventsToDisplay}</div>
      </div>
    );
  }
});



module.exports = Day;


