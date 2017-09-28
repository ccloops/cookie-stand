'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('store');
var newCookieStore = document.getElementById('new-store');
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

//instantiating store objects

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
  totalTurtle = 0;
  for (var k in allStoreTotals) {
    totalTurtle += allStoreTotals[k];
  }
}

//rendering table footer row

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

function callFooterFunctions() {
  columnSum();
  totalTableSum();
  makeFooterRow();
}
function renderAllInnerData() {
  var newStoreName = event.target.getStoreName.value;
  var newMinCustomers = parseInt(event.target.getMinCustomers.value);
  var newMaxCustomers = parseInt(event.target.getMaxCustomers.value);
  var newAvgSale = parseInt(event.target.getAvgSale.value);
  var counter = 0;

  for(var i = 0; i < allStores.length; i++) {
    if(newStoreName === allStores[i].storeName) {
      allStores[i].minCustomers = parseInt(newMinCustomers);
      allStores[i].maxCustomers = parseInt(newMaxCustomers);
      allStores[i].avgSale = parseInt(newAvgSale);
      allStores[i].dailySales = 0;
      allStores[i].hourlySales = [];
      allStores[i].hourlyTransactions();
      allStores[i].dailyTransactions();
      counter++;
    }
  }
  if(counter === 0) {
    new Store(newStoreName, parseInt(newMinCustomers), parseInt(newMaxCustomers), parseInt(newAvgSale));
    allStores[allStores.length - 1].hourlyTransactions();
    allStores[allStores.length - 1].dailyTransactions();
  }
  for(var j = 0; j < allStores.length; j++) {
    allStores[j].render();
  }
}

function handleNewStoreSubmit(event) {
  event.preventDefault();
  allStoreTotals = [];
  if (!event.target.getStoreName.value || !event.target.getMinCustomers.value || !event.target.getMaxCustomers.value || !event.target.getAvgSale.value) {
    return alert('Please fill in all form fields!');
  }

  storeTable.innerHTML = '';

  makeHeaderRow();
  renderAllInnerData();
  callFooterFunctions();

}

newCookieStore.addEventListener('submit', handleNewStoreSubmit);

makeHeaderRow();

innerRows();

callFooterFunctions();
