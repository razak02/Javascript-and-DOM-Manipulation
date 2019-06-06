
// Assign the data from data.js to a descriptive variable

var tableData = data;

// Select the filter button
console.log(tableData);

var btn = d3.select("#filter-btn");

btn.on("click", function() {

  // Prevent page from refreshing 

    d3.event.preventDefault();
    

// Select the input element and get the raw HTML node

    var dte = d3.select("#datetime").property("value");

// check if the date is being pulled in 
   // console.log(dte);

    // check if the tableData is still being pulled in to start filtering 

    //console.log(tableData);

// use filter to match the input  date and load the selection into var 'result' 

    var result = tableData.filter( s => s.datetime === dte);
    
    console.log(result);

// building the table 

    var tbody = d3.select("tbody");

// removing / clearing stale table row info

    tbody.selectAll("tr").remove();
    
// Appending each row information from results     
    
    Object.entries(result).forEach(([key, value]) => {
      var row = tbody.append("tr");  
     
      var cell = row.append("td");      
      cell.text(value.datetime);

      var cell = row.append("td");
      cell.text(value.city);

      var cell = row.append("td");
      cell.text(value.state);

      var cell = row.append("td"); 
      cell.text(value.country);

      var cell = row.append("td");
      cell.text(value.shape);

      var cell = row.append("td"); 
      cell.text(value.durationMinutes);

      var cell = row.append("td");
      cell.text(value.comments);

            
    });
  
  
});