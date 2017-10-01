'use strict';

StaffingGrid.all = [];
StaffingGrid.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
StaffingGrid.theTable = document.getElementById('staff');
StaffingGrid.theForm = document.getElementById('new-store');

function StaffingGrid(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.employeesPerHour = [];
  this.totalDailyEmployees = 0;
  StaffingGrid.all.push(this);
  this.calcEmployeesPerHour();
}

StaffingGrid.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    this.customersPerHour.push(StaffingGrid.random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

StaffingGrid.prototype.calcEmployeesPerHour = function() {
  this.calcCustomersPerHour();
  this.totalDailyEmployees = 0;
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale);
    this.employeesPerHour.push(oneHour);
    this.totalDailyEmployees += oneHour;
  }
};

StaffingGrid.prototype.render = function() {
  var trEl = document.createElement('tr');
  StaffingGrid.newElement('td', this.storeName, trEl);
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    StaffingGrid.newElement('td', this.employeesPerHour[i], trEl);
  }
  StaffingGrid.newElement('th', this.totalDailyEmployees, trEl);
  StaffingGrid.theTable.appendChild(trEl);
};

StaffingGrid.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

StaffingGrid.newElement = function(type, content, parent) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
};

//Instances

new StaffingGrid('1st and Pike', 23, 65, 6.3, 'pike');
new StaffingGrid('SeaTac Airport', 3, 24, 1,2, 'seatac');
new StaffingGrid('Seattle Center', 11, 38, 3.7, 'seattlecenter');
new StaffingGrid('Capitol Hill', 20, 38, 2.3, 'caphill');
new StaffingGrid('Alki', 2, 16, 4.6, 'alki');

StaffingGrid.makeHeaderRow = function() {
  var trEl = document.createElement('tr');
  StaffingGrid.newElement('th', 'Locations', trEl);
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    StaffingGrid.newElement('th', StaffingGrid.hours[i], trEl);
  }
  StaffingGrid.newElement('th', 'Location Totals', trEl);
  StaffingGrid.theTable.appendChild(trEl);
};

StaffingGrid.makeFooterRow = function() {
  var trEl = document.createElement('tr');
  StaffingGrid.newElement('th', 'Employee Totals for All Locations', trEl);
  var totalTurtle = 0;
  var hourlyTotal = 0;
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    hourlyTotal = 0;
    for(var j = 0; j < StaffingGrid.all.length; j++) {
      hourlyTotal += StaffingGrid.all[j].employeesPerHour[i];
      totalTurtle += StaffingGrid.all[j].employeesPerHour[i];
    }
    StaffingGrid.newElement('th', hourlyTotal, trEl);

  }
  StaffingGrid.newElement('th', totalTurtle, trEl);
  StaffingGrid.theTable.appendChild(trEl);
};

StaffingGrid.renderTable = function() {
  StaffingGrid.theTable.innerHTML = '';
  StaffingGrid.makeHeaderRow();
  StaffingGrid.all.forEach(function(store) {
    return store.render();
  });
  StaffingGrid.makeFooterRow();
};

StaffingGrid.handleForm = function(event) {
  event.preventDefault();
  var loc = event.target.locName.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  for(var i = 0; i < StaffingGrid.all.length; i++) {
    if(loc === StaffingGrid.all[i].storeName) {
      StaffingGrid.all[i].minCustomersPerHour = min;
      StaffingGrid.all[i].maxCustomersPerHour = max;
      StaffingGrid.all[i].avgCookiesPerSale = avg;

      StaffingGrid.all[i].customerPerHour = [];
      StaffingGrid.all[i].totalDailyEmployees = 0;
      StaffingGrid.all[i].employeesPerHour = [];

      StaffingGrid.all[i].calcEmployeesPerHour();
      clearForm();
      return;
    }
  }

  new StaffingGrid(loc, min, max, avg);
  function clearForm() {
    event.target.locName.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;
    StaffingGrid.renderTable();
  }
};

// StaffingGrid.makeHeaderRow();
//
StaffingGrid.renderTable();
