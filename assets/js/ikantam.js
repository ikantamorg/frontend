/*! 
 *  Written for: ?
 *  Author: @IkantamCorp - @ElmahdiMahmoud
 *  Further changes: @author
 *  Updated: 10.12.13
 */

 (function($) { 
 $(document).ready(function() { 
	
	
	/* CODE GOES HERE */
	
	
	
	
 }); //end doc ready
})(jQuery); 


/* 
 * PLUGINS 
 */

/* stepTo: smooth target scroll */
$.fn.stepTo=function(){return this.each(function(){var a=$(this);a.on("click",function(){$("html,body").animate({scrollTop:$(this.hash).offset().top-85},1000);return false})})};
