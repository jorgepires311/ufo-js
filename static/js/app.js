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
    var inElement = d3.select('#searchVal');
    var qType = d3.select('#queryType').property("value");
    // Get the value property of the input element
    var inElementVal = inElement.property("value");
    var filterData;
    switch(qType){
        case "date":
            filterData = tableData.filter(q => q.datetime === inElementVal);
            break;
        case "city":
            filterData = tableData.filter(q => q.city === inElementVal);
            break;
        case "state":
            filterData = tableData.filter(q => q.state === inElementVal);
            break;
        case "country":
            filterData = tableata.filter(q => q.country === inElementVal);
            break;
        case "shape":
            filterData = tableData.filter(q => q.shape === inElementVal);
            break;
    }
    d3.selectAll("tbody tr").remove();
    filterData.forEach(d=>{
        row =tbody.append('tr');
        Object.keys(d).forEach(function(item){
            row.append('td').text(d[item]);
         });
    });

});
