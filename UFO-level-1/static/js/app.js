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






// Get a reference to the table body
// var tbody = d3.select("tbody");

// // UFO Sighting values for each column
// tableData.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");

//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// // Select the button
// var button = d3.select("#filter-btn");
// button.on("click", function() {

//     tbody.html("");

//     // Select the input date get the raw HTML nodes
//     var inputElement = d3.select("#datetime");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     // console.log input value
//     console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });

// // Creating References
// var $tbody = d3.select("tbody");
// var button = d3.select("#filter-btn");
// var inputFieldDate = d3.select("#datetime");
// var inputFieldCity = d3.select("#city");
// var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// // Inputing the data into the HTML
// var addData = (dataInput) => {
//     dataInput.forEach(ufoSightings => {
//         var row = $tbody.append("tr");
//         columns.forEach(column => row.append("td").text(ufoSightings[column])
//         )
//     });
// }

// addData(tableData);


// // Creating an Event Listener for the Button
// // Setting up the Filter Button for Date and City
// button.on("click", () => {

//     d3.event.preventDefault();
    

//     var inputDate = inputFieldDate.property("value").trim();
//     // console.log(inputDate)
//     // https://www.w3schools.com/jsref/jsref_tolowercase.asp
//     // var inputCity = inputFieldCity.property("value").toLowerCase().trim();
//     // console.log(inputCity)
//     // var inputState = inputFieldState.property("value").toLowerCase().trim();
//     // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
//     // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

//     var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

//     $tbody.html("");

//     let response = {
//         filterDate
//     }


//     if(response.filterDate.length !== 0) {
//         addData(filterDate);
//     }

//     // Top if only works for filtering the date
    
//         else {
//             $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
//         }
// })