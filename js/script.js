jQuery(document).ready(function(){
	
	jQuery(".gch_code").each(function() {
		//jQuery(this)[0]
		hljs.highlightBlock( jQuery(this)[0] );
		let style = jQuery(this).attr("data-style");
		jQuery("body").append(`<link rel="stylesheet" href="${style}">`);

	})

})