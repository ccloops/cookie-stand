'use strict';

StaffingGrid.all = [];
StaffingGrid.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
StaffingGrid.theTable = document.getElementById('staff');

function StaffingGrid(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.employeesPerHour = [];
  StaffingGrid.all.push(this);
  this.calcEmployeesPerHour();
}

StaffingGrid.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < StaffingGrid.hours.length; i++) {
    this.customersPerHour.push(StaffingGrid.random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};
