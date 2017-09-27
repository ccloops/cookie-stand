'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('store');
var allStoreTotals = [];
var totalTurtle = 0;

function Store(storeName, minCustomers, maxCustomers, avgSale) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.dailySales = 0;
  this.hourlySales = [];
  allStores.push(this);
}

Store.prototype.customerPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.hourlyTransactions = function() {
  for(var i = 0; i < hours.length; i++) {
    var numberOfCustomers = this.customerPerHour();
    this.hourlySales.push(Math.round(numberOfCustomers * this.avgSale));
  }
};

Store.prototype.dailyTransactions = function() {
  for(var i in this.hourlySales) {
    this.dailySales += this.hourlySales[i];
  }
};

Store.prototype.render = function() {

  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);

  for(var i in this.hourlySales) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i] + ' cookies';
    trEl.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = this.dailySales;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);

  for(var i in hours) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

function innerRows() {
  for (var i in allStores) {
    allStores[i].hourlyTransactions();
    allStores[i].dailyTransactions();
    allStores[i].render();
  }
}

function columnSum() {
  for(var i = 0; i < hours.length; i++) {
    var storeTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      storeTotal += allStores[j].hourlySales[i];
    }
    allStoreTotals.push(storeTotal);
  }
}

function totalTableSum() {
  for (var k in allStoreTotals) {
    totalTurtle += allStoreTotals[k];
  }
}

function makeFooterRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores Hourly Totals';
  trEl.appendChild(thEl);

  for(var i in hours) {
    thEl = document.createElement('th');
    thEl.textContent = allStoreTotals[i];
    trEl.appendChild(thEl);

  }

  thEl = document.createElement('th');
  thEl.textContent = totalTurtle;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

makeHeaderRow();

innerRows();

columnSum();

totalTableSum();

makeFooterRow();
