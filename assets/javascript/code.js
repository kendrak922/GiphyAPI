'use strict';
$(document).ready(function(){

const key = "api_key=LdQIqyjno3idEvd3Uv1emsa1PvCIt8l1"
const jQueryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + key

let topicsArray = ["cheeseburger", "coffee", "doughnut", "breakfast", "hot dog", "ice cream", "pizza", "apple", "pickle", "cookie", "salad", "banana"];

for (let i = 0; i < topicsArray.length; i++){
let a = $("<button>");
a.addClass("food");
a.attr("data-name", topicsArray[i])
a.text(topicsArray[i]);
$("#foodButton").append(a);
}
console.log("hello")
});