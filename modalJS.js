var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
var modalImg = document.getElementById("modalImage");
function openModal(e) {
    
    var temp, tName;
   	
   	if (e.srcElement) {
        temp=e.srcElement;
        tName = temp.tagName;
	    
	    if (tName == "IMG") {
	    	modal.style.display = "block";
		    modalImg.src = temp.src;
	    }
    }
}