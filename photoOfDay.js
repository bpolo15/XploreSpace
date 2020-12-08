$(document).ready(function(){
    var date = new Date();
    console.log(date)
    var dd = parseInt(String(date.getDate()).padStart(2, '0'));
    var mm = parseInt(String(date.getMonth() + 1).padStart(2, '0')); //January is 0!
    var yyyy = date.getFullYear();
    photoOfDay(yyyy,mm,dd);
   

function photoOfDay(yyyy,mm,dd){
 


    $("#todayDate").text(mm+"-"+dd+"-"+yyyy)
    
    var api_key = "tEZcdcYgqv4qRNe0W8QrLu2ed5kywhjxxLWvofzI"
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key="+api_key+"&date="+yyyy+"-"+mm+"-"+dd;
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var photo = response.url;
        var title = response.title;
        console.log("Hell0",title)
        
        if(photo.includes("youtube")){
            console.log("youtube")
            $("#photoSpot").hide("#photoHere")
            $('.video').show("#videoHere")
            $("#iframe").attr("src", photo)
            $("#photoTitle").text(title)

        } else{
            $("#photoSpot").show("#photoHere")
            $("#photoTitle").text(title)
            $("#photoHere").css("background-image", 'url("' + photo +'")')
            $('.video').hide("#videoHere")
          
            
        }
        

    })
    
  
};



   

    
    $("#leftbtn").click(function(){
       
        console.log("left")
        if(dd===1){
            dd = 30;
            mm = mm-1
        }if(dd>1){
        dd = dd-1;
        }
        if(mm===1){
            mm = 12
        }
        console.log(dd)
        photoOfDay(yyyy,mm,dd)
    
        
        

    })
  

    $("#rightbtn").click(function(){
        var current = parseInt(String(date.getDate()).padStart(2, '0'));
        console.log("Current: ", current)
        console.log("Right Click: ", yyyy, mm, dd)
        if(dd >= 1&& dd!=current){
            dd++
            console.log("Next Day:", dd)
            console.log("Current: ", current)
            photoOfDay(yyyy,mm,dd)
        }
        if(dd === current){
            dd = current;
            photoOfDay(yyyy,mm,dd)
        }
        if(dd === 30){
            dd = 1
            mm++
            photoOfDay(yyyy,mm,dd)
        }

 
        

    })
    


})