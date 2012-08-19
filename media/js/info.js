 $(function() {
    
	var i = 1; 
	 
    /* when page loads animate the about section by default */
    $('#pinpoint').mouseover(
        function(){
        	if(i%2 != 0){
        		i++;
	            var $this = $(this);
	            move($this,1200,1);
        	}else{
        		i++;
        		//reset
        		reposition();
        	}
        	
        }
    );

    /*
    function to animate / show one circle.
    speed is the time it takes to show the circle
    turns is the turns the circle gives around the big circle
     */
    function move($elem,speed,turns){
    	//alert('m');
        var $circle = $('.circle'); //#circle_about
        
        /* if hover the same one nothing happens */
        if($circle.css('opacity')==1)
            return;

        /* make the circle appear in a circular movement */
        var end = 110 - 360 * (turns-1);
        $circle.stop()
        .animate({
            path : new $.path.arc({
                center	: [409,359],
                radius	: 300,
                start	: 270,
                end		: end,
                dir		: -1
            }),
            opacity: '1'
        },speed);
    }
    
    
    function reposition(){
    	//alert('r');
    	var $circle = $('.circle');
    	//$circle.attr('class','circle');
    	$circle.css('left','0');
    	$circle.css('top','0');
    	$circle.css('opacity','0');
    	$circle.css('filter','progid:DXImageTransform.Microsoft.Alpha(opacity=0)');
    	//alert('success!!');
    }
});