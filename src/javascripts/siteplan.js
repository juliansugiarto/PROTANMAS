$(document).ready(function(){
	// Get the modal
	var modal = document.getElementById('myModal');
	var nav = document.getElementsByClassName("navbar")[0];

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    captionText.innerHTML = this.alt;
	    nav.style.display = "none";
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	  nav.style.display = "block";
	}

	document.addEventListener('keyup', function(e) {
	    if (e.keyCode == 27) {
	        modal.style.display = "none";
	        nav.style.display = "block";
	    }
	});

});