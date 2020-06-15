$(document).ready(function () {
    getLaunches();

})

function getLaunches() {

    var queryURL = "https://launchlibrary.net/1.3/launch/next/5"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (i = 0; i < response.launches.length; i++) {
            var name = response.launches[i].name
            var date = response.launches[i].net
            var video = response.launches[i].vidURLs[0]
            var location = response.launches[i].location.name
            // console.log("name: ",name, "Date: ", date, "video: ",video," location: ",location)
            if (video != undefined) {
                var displayLink = video
            } else {
                var displayLink = 'none'
            }
            var card = $("<div class = 'card'  id = 'launchCard'>")
            var cardbody = $("<div class = 'card-body'>")
            var nameHeader = $("<p>").text("Name of Rocket: ").addClass("header")
            var rocketName = $("<p>").text( name)
            var dateHeader = $("<p>").text("Date of Launch: ").addClass("header")
            var dateOfLaunch = $("<p>").text(date)
            var locationHeader = $("<p>").text("Location of Launch: " ).addClass("header")
            var locationOfLaunch = $("<p>").text(location)
            var rocket = $("<p>").append('<i class="fas fa-rocket fa-3x"></i>')
            var watch = $("<p>").append("<a href = "+displayLink+" id='watch'> Watch Live Video of Launch!")
            if(displayLink == 'none'){
                cardbody.append(nameHeader, rocketName, dateHeader, dateOfLaunch, locationHeader, locationOfLaunch, rocket)
                card.append(cardbody)
                $(".launchData").append(card)

            console.log(" no watch")
            }else{
                console.log("Watch")
                cardbody.append(nameHeader, rocketName, dateHeader, dateOfLaunch, locationHeader, locationOfLaunch, watch, rocket)
                card.append(cardbody)
                $(".launchData").append(card)
    
            }
            
        
          



        }
    })



}

