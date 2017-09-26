'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1st and Pike Store
var pike = {
  storeName: 'Pike and 1st',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  dailySales: 0,
  hourlySales: [],
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var numberOfCustomers = this.customerPerHour();
      this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
      this.dailySales += this.hourlySales[i];
      var elPike = document.getElementById('pike');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      elPike.appendChild(liEl);
    }
  },
  total: function(){
    var elPike = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total Daily Sales: ' + this.dailySales + ' cookies';
    elPike.appendChild(liEl);
  }
};

// pike.render();

var seaTac = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  dailySales: 0,
  hourlySales: [],
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var numberOfCustomers = this.customerPerHour();
      this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
      this.dailySales += this.hourlySales[i];
      var elSeaTac = document.getElementById('seaTac');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      elSeaTac.appendChild(liEl);
    }
  },
  total: function(){
    var elSeaTac = document.getElementById('seaTac');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total Daily Sales: ' + this.dailySales + ' cookies';
    elSeaTac.appendChild(liEl);
  }
};

// seaTac.render();

var center = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  dailySales: 0,
  hourlySales: [],
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {

    for (var i = 0; i < hours.length; i++) {
      var numberOfCustomers = this.customerPerHour();
      this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
      this.dailySales += this.hourlySales[i];
      var elCenter = document.getElementById('center');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      elCenter.appendChild(liEl);
    }
  },
  total: function(){
    var elCenter = document.getElementById('center');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total Daily Sales: ' + this.dailySales + ' cookies';
    elCenter.appendChild(liEl);
  }
};

// center.render();

var capitolHill = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  dailySales: 0,
  hourlySales: [],
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var numberOfCustomers = this.customerPerHour();
      this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
      this.dailySales += this.hourlySales[i];
      var elCapitolHill = document.getElementById('capitolHill');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      elCapitolHill.appendChild(liEl);
    }
  },
  total: function(){
    var elCapitolHill = document.getElementById('capitolHill');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total Daily Sales: ' + this.dailySales + ' cookies';
    elCapitolHill.appendChild(liEl);
  }
};

// capitolHill.render();


var alki = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  dailySales: 0,
  hourlySales: [],
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var numberOfCustomers = this.customerPerHour();
      this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
      this.dailySales += this.hourlySales[i];
      var elAlki = document.getElementById('alki');
      var liEl = document.createElement('li');
      liEl.textContent = hours [i] + ' : ' + this.hourlySales[i] + ' cookies';
      elAlki.appendChild(liEl);
    }
  },
  total: function(){
    var elAlki = document.getElementById('alki');
    var liEl = document.createElement('li');
    liEl.textContent = 'Total Daily Sales: ' + this.dailySales + ' cookies';
    elAlki.appendChild(liEl);
  }
};

// alki.render();

var locations = [pike, seaTac, center, capitolHill, alki];

for (var i in locations){
  locations[i].render();
}

pike.total();
seaTac.total();
center.total();
capitolHill.total();
alki.total();
