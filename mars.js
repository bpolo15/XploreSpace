$(document).ready(function(){
marsWeather()
    
})
function marsWeather(){
    var queryURL = "https://api.nasa.gov/insight_weather/?api_key=tEZcdcYgqv4qRNe0W8QrLu2ed5kywhjxxLWvofzI&feedtype=json&ver=1.0"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var day = response.sol_keys[0]
        var season = response[day].Season
        console.log(response)
        $("#season").append("<p> It is " + season + " on Mars right now. </p>")
        if(season == "summer"){
            $("#season").append('<i class="fas fa-umbrella-beach fa-5x"></i>')
        }if(season == "winter"){
            $("#season").append('<i class="fas fa-snowflake"></i>')
        }if(season == "spring"){
            $("#season").append('<i class="fas fa-rainbow"></i>')
        }
        if(season == "fall"){
            $("#season").append('<i class="fab fa-canadian-maple-leaf"></i>')
        }

       for(i=0; i<7; i++){
           var sol = response.sol_keys[i]
           var getMinTemp = response[sol].AT.mn
           var minTemp = getMinTemp.toFixed();
           var getMaxTemp = response[sol].AT.mx
           var maxTemp = getMaxTemp.toFixed();
            var day = response[sol].Last_UTC
            var split = day.split("-")
            var year = split[0]
            var month = split[1]
            var earthDay = split[2].split("T")
            console.log( month,earthDay[0], year)
           
            var card = $("<div class = 'card'  id = 'tempCard'>")
            var cardbody = $("<div class = 'card-body'>")
            var marsDay = $("<p>").text("Sol: " + sol)
            var dayEarthtext = $("<p>").text("Earth Day: ")
            var earthDay =  $("<p>").text(month+"-"+earthDay[0]+"-"+year)
            var tempLow = $("<p>").text("Min: "+minTemp+String.fromCharCode(176)+"F")
            var tempHigh = $("<p>").text("Max: "+maxTemp+String.fromCharCode(176)+"F")
    
            cardbody.append(dayEarthtext, earthDay, marsDay, tempLow, tempHigh)
            card.append(cardbody)
            $(".temps").prepend(card)
           
        
           
           
       }
    })
}

