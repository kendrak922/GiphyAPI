'use strict';
$(document).ready(function(){
let search = 0;
const key = "api_key=LdQIqyjno3idEvd3Uv1emsa1PvCIt8l1"
const jQueryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + key


let topicsArray = ["cheeseburger", "coffee", "doughnut", "breakfast", "hot dog", "ice cream", "pizza", "apple", "pickle", "cookie", "salad", "banana"];

// create buttons
for (let i = 0; i < topicsArray.length; i++){
let a = $("<button>");
a.addClass("food");
a.attr("data-name", topicsArray[i])
a.text(topicsArray[i]);
$("#foodButton").append(a);
}

// add new search
$("#submit").click(function() {
event.preventDefault();
let newFood = $("#search").val().trim();
if (newFood === undefined || newFood === '') {
    newfood = 'code';
  }
let a = $("<button>")
a.addClass("food");
a.attr("data-name", newFood);
a.text(newFood);
$("#foodButton").append(a);
// clearbox
$("#search").val("");
});


});





