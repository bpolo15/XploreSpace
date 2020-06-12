$(document).ready(function(){
    photoOfDay();
    
})
function photoOfDay(){
    console.log("PHOTO")
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        console.log(response);
        var photo = response.url;
        console.log(photo)

        $("#PhotoOfDay").css("background-image", 'url("' + photo +'")')
    })


};
