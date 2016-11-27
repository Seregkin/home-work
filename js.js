(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'sepia',
			filter: 'blur',
			filter: 'brightness',
			filter: 'opacity',
			filter: 'grayscale'
		}, conf)



		var start = function(){

			var section = $(this).parent();
			var bgImg = $(this).css('background-image');
			// $(this).find( 'img' ); *****
			section.append('<div class="filtered">');
			$('.filtered').css('background-image', bgImg);
	
//			if( conf.filter1 == 'sepia' ){
//				$('.filtered').addClass('sepia')	
//					
//			} else if ( conf.filter1 == 'grayscale' ){
//				$('.filtered').addClass('grayscale')
//						
//			}
			
			
		switch (conf.filter) {
			case 'sepia':
				{
				$('.filtered').addClass('sepia');	
				} break;
			case 'grayscale':
				{
				$('.filtered').addClass('grayscale');	
				} break;
			case 'blur':
				{
				$('.filtered').addClass('blur');	
				} break;
			case 'brightness':
				{
				$('.filtered').addClass('brightness');	
				} break;
			case 'opacity':
				{
				$('.filtered').addClass('opacity');	
				} break;
			}
		
		}

		return this.each(start)
	}

}(jQuery))