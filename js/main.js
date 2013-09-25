
function hash_changed() {
	var hash = window.location.hash;

	if(!hash){
		hash = "#appearance";
	}

	$("section.active").addClass("old-active");
	$("a.active").removeClass("active");
	$("section.active").removeClass("active");
	$(hash).addClass("active");
	$('a[href="'+hash+'"]').addClass("active");


	$("section.old-active").hide(function(){
		$(this).removeClass("old-active");
		$("section.active").show();
	});

}



$( document ).ready(function() {



	$(window).on('hashchange', function() {
		hash_changed();
	});


	hash_changed();

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

	/*
	$(document).keydown(function(e){
		if (!$("a.active").parent().is(':first-child') &&  e.keyCode == 37) { 
			window.location.hash = $("a.active").parent().prev().children("a").attr("href");
		}

		if (!$("a.active").parent().is(':last-child') &&  e.keyCode == 39) { 
			window.location.hash = $("a.active").parent().next().children("a").attr("href");
		}



	});

	*/

  // Handler for .ready() called.
});

