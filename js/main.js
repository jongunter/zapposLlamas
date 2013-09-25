//This function is called when the URL is changed
function hash_changed() {

	//Gets the new URL hash
	var hash = window.location.hash;

	//If there's no hash, set a default (home) page to go to
	if(!hash){
		hash = "#appearance";
	}

	//Makes the current section un-active
	$("section.active").addClass("old-active");
	$("section.active").removeClass("active");

	//Makes the current link un-active
	$("a.active").removeClass("active");

	//Makes the new section and link active
	$(hash).addClass("active");
	$('a[href="'+hash+'"]').addClass("active");

	//Hides the previously inactive section
	$("section.old-active").hide(function(){
		$(this).removeClass("old-active");
		$("section.active").show();
	});

}


//On page load
$( document ).ready(function() {

	//When the hash is changed, call the hash_change function
	$(window).on('hashchange', function() {
		hash_changed();
	});

	// Call the hash_changed function to start things out
	hash_changed();

	//For each link, check to see if it's external, and if so, open it in a new window
	$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});


});

