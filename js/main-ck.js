function hash_changed(){var e=window.location.hash;e||(e="#appearance");$("section.active").addClass("old-active");$("a.active").removeClass("active");$("section.active").removeClass("active");$(e).addClass("active");$('a[href="'+e+'"]').addClass("active");$("section.old-active").hide(function(){$(this).removeClass("old-active");$("section.active").show()})}$(document).ready(function(){$(window).on("hashchange",function(){hash_changed()});hash_changed();$("a").each(function(){var e=new RegExp("/"+window.location.host+"/");e.test(this.href)||$(this).click(function(e){e.preventDefault();e.stopPropagation();window.open(this.href,"_blank")})})});