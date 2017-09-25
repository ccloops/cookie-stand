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

var seaTac = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var elSeaTac = document.getElementById('seaTac');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.customerPerHour() + ' cookies';
      elSeaTac.appendChild(liEl);
    }
  }
};

seaTac.render();

var center = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var elCenter = document.getElementById('center');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.customerPerHour() + ' cookies';
      elCenter.appendChild(liEl);
    }
  }
};

center.render();

var capitolHill = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var elCapitolHill = document.getElementById('capitolHill');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.customerPerHour() + ' cookies';
      elCapitolHill.appendChild(liEl);
    }
  }
};

capitolHill.render();


var alki = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var elAlki = document.getElementById('alki');
      var liEl = document.createElement('li');
      liEl.textContent = hours [i] + ' : ' + this.customerPerHour() + ' cookies';
      elAlki.appendChild(liEl);
    }
  }
};

alki.render();
