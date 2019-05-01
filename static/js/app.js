var tbody = d3.select("tbody");
// from data.js
var tableData = data;

console.log(tableData);
var rowData;
tableData.forEach(d=>{
    row =tbody.append('tr');
    Object.keys(d).forEach(function(item){
        row.append('td').text(d[item]);
     });
});



// Select the submit button
var submit = d3.select("#filter-btn");
 // Complete the click handler for the form
 submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inElement = d3.select('#datetime');
    // Get the value property of the input element
    var inElementVal = inElement.property("value");
    var filterData = tableData.filter(dt => dt.datetime === inElementVal);
    d3.selectAll("tbody tr").remove();
    filterData.forEach(d=>{
        row =tbody.append('tr');
        Object.keys(d).forEach(function(item){
            row.append('td').text(d[item]);
         });
    });

});
