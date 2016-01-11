/*
 *	index.js
 *	Contains main script for Pie Charter.
 *
 *	Author(s): Haris, Nim
 */

"use strict";


/* ---- Entry Class ----- */
class Entry {
	constructor(color) {
		this.name = "";				// Name.
		this.color = color;				// Colour in hex.
		this.quantity = 0;		// Quanity.
	} 
}


// List of all the entry's
var entries = [];

/** 
  Adds a new entry to the entries list. New entries will have a randomly
  generated colour. Also add an extra row to the input table. 
**/   
function addNewEntry() {
	
}


/** 
  Deletes an existing entry from the entries list by index.
  Remove the entries row from the input table.
**/
function deleteEntry(index) {
	
}


/**
  Clears the input table and entries list. Will also set the chart section
  to go back to it's default apperance showing the instructions image.
**/
function clear() {
	
}


/** Updates the input division with the new data **/
function update() {
	
}


/**
 Create the pie Chart and place the buttons based on the data in entries
 and the size of the screen
**/
 function generate() {
	
}


/** Saves the pie chart image as a PNG**/
function download() {
	
}

/*
 * Update dimensions of Pie Chart elements.
 */
function updatePieChartDimensions() {	
	$("#chart").width($(document).width() - 430);
	
	// Dimensions of <canvas id="chart-pie">
	// proportional to minimum of height and width of <div id="chart">. 
	$("#chart-pie").width();
}

/* ----- O N L O A D ----- */
$(function () {
	updateChartWidth();
});