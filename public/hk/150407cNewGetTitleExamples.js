// https://scotch.io/tutorials/scraping-the-web-with-node-js

var O = require('C:/utd/150719utdG/public/util/U_o.js');

var YQL = require("yql");

//new YQL.exec('select * from data.html.cssselect where url="http://tilomitra.com/repository/screenscrape/ajax.html" and css="#content"', function(response) {
new YQL.exec('select * from data.html.css select where url="http://www.ibm.com"', function(response) {

    //This will return undefined! The scraping was unsuccessful!
    console.log('dd:' + response);

});
