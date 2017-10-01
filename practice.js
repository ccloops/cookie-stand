'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('staff');
var allStoreTotals = [];
var totalTurtle = 0;


function Store(storeName, minCustomers, maxCustomers) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.dailyEmployees = 0;
  this.hourlyEmployees = [];
  allStores.push(this);
}

Store.prototype.customerPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.employeesPerHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var numberOfEmployees = this.customerPerHour();
    this.hourlyEmployees.push(Math.round((numberOfEmployees / 20) + 2 ));
  }
};

Store.prototype.employeesPerDay = function() {
  for(var i in this.hourlyEmployees) {
    this.dailyEmployees += this.hourlyEmployees[i];
  }
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);

  for(var i in this.hourlyEmployees) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyEmployees[i];
    trEl.appendChild(tdEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = this.dailyEmployees;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65);
new Store('SeaTac Airport', 3, 24);
new Store('Seattle Center', 11, 38);
new Store('Capitol Hill', 20, 38);
new Store('Alki', 2, 16);

function innerRows() {
  for (var i in allStores) {
    allStores[i].employeesPerHour();
    allStores[i].employeesPerDay();
    allStores[i].render();
  }
}

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

function columnSum() {
  for(var i = 0; i < hours.length; i++) {
    var storeTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      storeTotal += allStores[j].hourlyEmployees[i];
    }
    allStoreTotals.push(storeTotal);
  }
}

function totalTableSum() {
  totalTurtle = 0;
  for (var k in allStoreTotals) {
    totalTurtle += allStoreTotals[k];
  }
}

//rendering table footer row

function makeFooterRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores Employee Totals';
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

function callFooterFunctions() {
  columnSum();
  totalTableSum();
  makeFooterRow();
}

makeHeaderRow();
innerRows();
callFooterFunctions();
