'use strict';
$(document).ready(function(){

let topicsArray = ["cheeseburger", "coffee", "doughnut", "breakfast", "hot dog", "ice cream", "pizza", "apple", "pickle", "cookie", "salad", "banana"];

// call API
function searchGif(search){
const QueryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=LdQIqyjno3idEvd3Uv1emsa1PvCIt8l1&limit=10"
$.ajax({
    url: QueryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for(let i = 0; i < response.data.length; i++){
    $(".gifs").append(`<img src="${response.data[i].images.fixed_height_small.url}"></img>`)
}  
console.log(response);
});
}

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
searchGif(newFood)
});

$("button").click(function(){
let buttonFood = $(this).val() 
console.log(buttonFood)
    searchGif(buttonFood)
}

)



});


