var React = require('react');
var Eventful = require('eventful-react');
var CalendarComponent = require('react-widgets').Calendar



var DayComponent = Eventful.createClass({
  render: function() {
    var dateClicked = window.dateClicked;

    var currentMonth = function() {
      var monthNoZero = parseInt(dateClicked.slice(0, dateClicked.indexOf('/')));
      var monthString;
      if (monthNoZero < 10) {
        monthString = '0' + monthNoZero.toString();
      } else {
        monthString = monthNoZero.toString();
      };
      return monthString;
    };
    var currentYear = dateClicked.slice(-4);
    var currentDay = this.props.label;

    var dayRendering = currentMonth() + '-' + currentDay + '-' + currentYear;

    var events = window.events;
    var suggestions = {
      "6-12-15":[
        {
          "item":{"id":"5575eb2ebfe0ce2a658a86b7",
          "name":"milk", 
          "elapsedDays":2}
        }
      ],
      "6-16-2015":[
        {
          "item":{
            "id":"5575eb2ebfe0ce2a658a86b7",
            "name":"fish",
            "elapsedDays":1
          }
        }
      ]
    };

    console.log('in dayComponent, dayRendering: ', dayRendering);
    console.log('in dayComponent, events: ', events);
    var idString = '';

    if (suggestions[dayRendering]) {
      idString += 'suggestion';
    };

    if (events[dayRendering]) {
      idString += 'event';
    };

    return (
      <div id={idString} >
        {this.props.label}
      </div>);
    }
});

var Calendar = Eventful.createClass({

  getInitialState : function() {
    return {
    };
  },
  handleChange: function(dateInstance) {
    this.emit('dateClicked',{
      dateInstance: dateInstance
    });
  },

  render: function() {
    var props = {
      dayComponent: DayComponent,
      defaultValue: new Date(),
      onChange: this.handleChange
    }
    return (
      <div>
        <CalendarComponent {...props} />
        {this.props.dateClicked}
      </div>
    )
  }
})

module.exports = Calendar;
  
