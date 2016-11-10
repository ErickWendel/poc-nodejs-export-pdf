 var fs = require('fs');
var data = require('./data'); 
var Report = require('fluentreports').Report;


var dados = data[0]; 
var detailArray = [];
for (var i = 0; i < dados.length; i++) {
    detailArray.push([i, 48]);
}

 
// Create a Report   
var rpt = new Report("Report.pdf")
    .fontsize(7)
    .margins(6)
    .pageHeader(["Relatório"]) // Add a simple (optional) page Header... 
    .data(data)    // Layout the report in a grid of 200px & 50px 
    .detail(detailArray)     // Layout the report in a grid of 200px & 50px 
    .render();