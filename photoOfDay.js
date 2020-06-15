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
        console.log(title)
        if(photo.includes("youtube")){
            console.log("youtube")
            // $('<iframe src="' +photo + '" width=560 height=315 frameborder="0" scrolling="no" id="iframe" </iframe>').appendTo("#photoHere")
            $("#iframe").attr("src", photo)
            $("#photoTitle").text(title)
        } else{
            $("#photoTitle").text(title)
            $("#photoHere").css("background-image", 'url("' + photo +'")')
            $("div").remove(".video")
          
            
        }
        console.log(photo)
       

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
    

 


})