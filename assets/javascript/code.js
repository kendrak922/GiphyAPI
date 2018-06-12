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
    $(".gifs").empty();
    for(let i = 0; i < response.data.length; i++){
        $(".gifs").append(`<div"><img class="img-responsive"src="${response.data[i].images.fixed_height_small_still.url}" data-animate="${response.data[i].images.fixed_height_small.url}" data-still="${response.data[i].images.fixed_height_small_still.url}" data-state="still" class="gif"></img><p class="rating">${response.data[i].rating}</p><div>`)
        // $(".gifs").append(`<p class="rating">${response.data[i].rating}</p>`)
    }
});
}

//pause
function pausePlayGifs() {
    let state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
};
$(document).on("click", ".gif", pausePlayGifs);

// create buttons
for (let i = 0; i < topicsArray.length; i++){
let a = $("<button>");
a.addClass("food");
a.attr("value", topicsArray[i])
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
let a = $("<button>");
a.addClass("food");
a.attr("value", newFood);
a.text(newFood);
topicsArray.push(newFood);
$("#foodButton").append(a);

// clearbox
$("#search").val("");

searchGif(newFood)

});
//make buttons work
function foodButton() {
    let buttonFood = $(this).val()
    searchGif(buttonFood);
 };

$(document).on("click", ".food", foodButton);

});


