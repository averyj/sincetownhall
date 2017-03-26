// watch for change of input value for restyled file inputs
$(document).on('change','input[type="file"]',function(){ var split_file = escape($($(this)).val().split(/\\/).pop()); $(this).closest('.btn').attr('data-value',((split_file)?': '+((split_file)?split_file:$(input).val()):'')); });

// track the value of a select — to style text if default
$(document).on('change','select',function(){ var val = $(this).val(); var status = $(this).find('option:selected').attr('data-status') || ''; $(this).attr('data-status',status); });

// scroll to page section
$(document).on('click','[data-focus]',function(e){
	var target = $($(this).attr('data-focus'));
	target.focus();
	if ( $(this).attr('data-focus-hide') ) { $(this).remove(); }
	return false;
});

// set focus
$(document).ready(function(){
	if ( !is_touch() ) {
		var foc = $('.ready-focus').find('input, select, textarea').filter(':visible').filter(':first');
		if ( foc ) { foc.focus(); }
	}
});
