document.addEventListener('DOMContentLoaded', function(){
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

}, false);

var visibleSmallMenu = false;
function toggleHam() {
	console.log('clicked hamburger button');	
	var ulNav = document.getElementsByClassName("navigation")[0];
		if(visibleSmallMenu) {
			ulNav.style.display = 'none';
			visibleSmallMenu = false;
		} else {
				ulNav.style.display = 'block';
				visibleSmallMenu = true;
		}
   
}