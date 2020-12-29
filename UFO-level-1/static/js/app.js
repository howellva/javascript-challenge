// from data.js
var tableData = data;

//in the form of an array of JavaScript objects, write code
// that appends a table to your web page and then adds new rows of data for each UFO sighting.

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each alien report object
// data.forEach(function(alienReport) {
//   console.log(alienReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each alien report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(alienReport) {
//   console.log(alienReport);
//   var row = tbody.append("tr");
// });

// // // Step 3:  Use `Object.entries` to console.log each alien report value
// data.forEach(function(alienReport) {
//   console.log(alienReport);
//   var row = tbody.append("tr");

//   Object.entries(alienReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // // Step 4: Use d3 to append 1 cell per alien report value (date, city, country...)  //empty table 
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the alien report object
//     var cell = row.append("td");
//   });
// });

//in the form of an array of JavaScript objects, write code
// that appends a table to your web page and then adds new rows of data for each UFO sighting.

// // Step 5: Use d3 to update each cell's text with alienn data
data.forEach(function(alienReport) {
  console.log(alienReport);
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

//Use a date form in your HTML document and write JavaScript code that 
//will listen for events and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");  


// Create event handlers 
button.on("click", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

   
    var filteredData = tableData.filter(person => person.datetime === inputValue);

    console.log(filteredData);


    tbody.html("");

    filteredData.forEach(function(searched) {
        console.log(searched);
        var row = tbody.append("tr");
        Object.entries(searched).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });

}  













