'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


var pike = {
  storeName: 'Pike and 1st',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var elPike = document.getElementById('pike');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.customerPerHour() + ' cookies';
      elPike.appendChild(liEl);
    }
  }
};

pike.render();

// var seaTac = {
//   storeName: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgSale: 1.2,
//   render: function() {
//
//     for var i = 0; i < hours.length; i++) {
//
//     }
//   }
// }
