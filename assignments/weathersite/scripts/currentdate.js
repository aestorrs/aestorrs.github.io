.document.addEventListener('DOMContentLoaded', function(){
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000 * 3600 * 24));
document.getElementById("spanDate").innerHTML = tomorrow.getDay() + ", " + tomorrow.getDate() + ", " + months[tomorrow.getMonth()] + " " + tomorrow.getFullYear();}, false);
