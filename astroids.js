$(document).ready(function(){
 getDate();
//  getPhoto();
})

function getDate(){
    var date = new Date();
    console.log(date)
    var dd = parseInt(String(date.getDate()).padStart(2, '0'));
    var mm = parseInt(String(date.getMonth() + 1).padStart(2, '0')); //January is 0!
    var yyyy = date.getFullYear();
    console.log(yyyy,mm,dd)
   getAstroids(yyyy,mm,dd)
   
}

function getAstroids(yyyy,mm,dd){
    
    var queryURL = "https://api.nasa.gov/neo/rest/v1/feed?end_date=" +yyyy+"-"+mm+"-"+dd+"&api_key=tEZcdcYgqv4qRNe0W8QrLu2ed5kywhjxxLWvofzI";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var todayDate = String(yyyy+"-0"+mm+'-'+dd)
        var number = response.element_count;
        console.log(number)
        $("#number").text("Number of Near Earth Object in the last week: " + number)

       
    for(i=0; i<number; i++){
        console.log("number: ", i+1)
        var getData = response.near_earth_objects;
        var getData2 = getData[todayDate][i];
        var getName = getData2.name;
        var getDistance = getData2.close_approach_data[0].miss_distance.miles;
        var distanceRounded = parseInt(getDistance).toFixed();
        var velocityRounded = parseInt(getVelocity).toFixed();
        var getVelocity = getData2.close_approach_data[0].relative_velocity.miles_per_hour;
        var velocityRounded = parseInt(getVelocity).toFixed();
        var getLink = getData2.nasa_jpl_url
        // console.log("Get name: ", getName, "Get Distance: ",getDistance, "Velocity: ",getVelocity, "Link: ", getLink)
    
        var card = $("<div class = 'card'  id = 'datacard'>")
        var cardbody = $("<div class = 'card-body'>")
        var nameofAstroid = $("<p>").text("Name of Object: " + getName)
        var missDistance = $("<p>").text("Distance from Earth: " + distanceRounded + " miles away")
        var velocity = $("<p>").text("Velocity of Object: " + velocityRounded + " miles per hour")
        var link = $("<p>").append("<a href = "+getLink+" id='learn'> Learn More")

        cardbody.append(nameofAstroid, missDistance, velocity, link)
        card.append(cardbody)
        $(".data").append(card)

    }

})

}

// function getPhoto(){
//     var api_key = "tEZcdcYgqv4qRNe0W8QrLu2ed5kywhjxxLWvofzI"
//     var queryURL = "http://api.nasa.gov/planetary/apod?api_key=" + api_key +
//     "&date=2020-05-20"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         var photo1 = response.url;
//         console.log(photo1)
//         $("#back2").css("background-image", 'url("' + photo1 +'")')

//     })
  
// }