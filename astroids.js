$(document).ready(function(){
 getDate();
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

}