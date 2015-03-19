// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

// TODO: write your module tests here
var calenderevent = require('com.mitul.calendarevent');
Ti.API.info("module is => " + calenderevent);
var startDate = new Date();
var endDate = new Date();

var obj = {
	'title' : "set Calendar Event",
	'startDate' : startDate,
	'endDate' : endDate
}

var btnAdd = Ti.UI.createButton({
	title : 'Add',
	width : 100,
	height : 30,
	top : 100
});

btnAdd.addEventListener('click', function(e) {
	calenderevent.addEventToCalender(obj);
});

win.add(btnAdd);

var btnDelete = Ti.UI.createButton({
	title : 'Delete',
	width : 100,
	height : 30,
	top : 160
});

btnDelete.addEventListener('click', function(e) {
	calenderevent.deleteEventToCalender(obj);
});

win.add(btnDelete);
win.open();
