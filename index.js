var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("startdate").setAttribute("value", today);
document.getElementById("enddate").setAttribute("value", today);
document.getElementById("startdate").setAttribute("min", today);

document.getElementById("startdate").onchange = function() {
    var enddate = document.getElementById("enddate");
    enddate.setAttribute("value", document.getElementById("startdate").value)
    enddate.setAttribute("min", document.getElementById("startdate").value);
}