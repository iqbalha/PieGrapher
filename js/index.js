/* * * * * * * * * * * * * * * * * * * * * * * * *
 *												 *
 *	index.js									 *
 *	Contains main script for Pie Charter.		 *
 *												 *
 *												 *
 *	Author(s): Haris, Nim						 *
 *												 *
 * * * * * * * * * * * * * * * * * * * * * * * * */

"use strict";


/* ----- E N T R Y   C L A S S ----- */

class Entry {
	constructor(name, color) {
		this.name = name;				// Name.
		this.color = color;				// Colour in hex.
		this.quantity = 0;				// Quanity.
	} 
}


/* ----- G L O B A L S ----- */

var FADE_TIME = 300;					// Time fade in/out animations take.
var entries = [];						// List of all the entry's


/* ----- F U N C T I O N S ----- */

/** 
  Adds a new entry to the entries list. New entries will have a randomly
  generated colour. Also add an extra row to the input table. 
**/   
function addNewEntry() {
	
	// Create a new Entry with name "New Entry".
	var i = entries.length;
	var entry = new Entry("New Entry", randomColor());
	entries.push(entry);
	
	// Input fields for entry.
	$("#input-entries").append(
		'<div class="entry" id="input-entry' + i + '">' +
			'<span class="entry-color"> </span>' +
			'<input class="entry-name">' +
			'<input class="entry-quantity">' + entry.quantity +
			'<span class="entry-delete"> x </span>' +
		'</div>');
	
	// Set name, and quantity.
	$("#input-entry" + i + " .entry-name").val(entry.name);
	$("#input-entry" + i + " .entry-quantity").val(entry.quantity);
	
	// [  Delete ] button.
	$("#input-entry" + i + " .entry-delete").click(function () {
		deleteEntry(i);
	});
	
	// Display [  clear  ] button and [  export  ] button.
	if (i == 0) {
		$("#input-clear").fadeIn(FADE_TIME);
		$("#input-export").fadeIn(FADE_TIME);
	}
}


/** 
  Deletes an existing entry from the entries list by index.
  Remove the entries row from the input table.
**/
function deleteEntry(index) {
	$("#input-entry" + index).fadeOut(FADE_TIME, function () {
		entries.splice(index, 1);
		$("#input-entry" + index).remove();
	});
}


/**
  Clears the input table and entries list. Will also set the chart section
  to go back to it's default apperance showing the instructions image.
**/
function clear() {
	$("#input-entries").fadeOut(FADE_TIME, function () {
		$("#input-entries").html("");
		entries = [];
		$("#input-entries").fadeIn(FADE_TIME);
	});
}


/** Updates ... **/
function update() {
	
}


/**
 Create the pie Chart and place the buttons based on the data in entries
 and the size of the screen
**/
 function generate() {
	
}


/** Saves the pie chart image as a PNG. **/
function download() {
	
}


/** Return hex of a random color not already in use as a string. **/
function randomColor() {
	return "#b5e61d";				// Placeholder.
}

/** 
 Update dimensions of Pie Chart elements. 
 Meants to be called whenever the window is resized, and 
 whenever the pie chart is regenerated. 
**/
function updatePieChartDimensions() {	
	$("#chart").width($(document).width() - 430);
	var dim = Math.min($("#chart").width(), $("#chart").height());
	dim = dim * 0.9;
	$("#chart-pie").width(dim);
	$("#chart-pie").height(dim);
}


/* ----- O N L O A D ----- */

$(function () {
	
	$("#input-add").click(addNewEntry);		// [   Add  ] button.
	$("#input-export").click(download);		// [ Export ] button.
	$("#input-clear").click(clear);			// [  Clear ] button.
	
	// Whenever the window is resize, updatePieChartDimensions.
	$(window).resize(function() {
		updatePieChartDimensions();
	});
	
	updatePieChartDimensions();
});