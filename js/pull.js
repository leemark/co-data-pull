(function($){
    $('button').on('click', function(){
        // remove resultset if this has already been run
        $('.content ul').remove();
        // add spinner to indicate something is happening
        $('<i class="fa fa-refresh fa-spin"/>').appendTo('body');
        
        // get selected zip code from selectbox
        var zip = $("select option:selected").text().substring(0,6);
        
        // make AJAX call
        $.getJSON( "http://data.colorado.gov/resource/4ykn-tg5h.json?entityStatus=Good%20Standing&principalZipCode=" + zip, function(data) {
            
            // do all this on success
            
            var items = []; 
            var $ul;  
            
            $.each(data, function(key, val){
                //iterate through the returned data and build a list
                items.push( "<li id='" + key + "'><span class='name'>" + val.entityname + "</span><br><span class='addr'>" + val.principaladdress1 + "</span> <span class='city'>" + val.principalcity + "</span></li>" );
            });
            
            // remove spinner
            $('.fa-spin').remove();
            
            // append list to page
            $ul = $('<ul />').appendTo('.content');
            
            //append list items to list
            $ul.append(items);
        });
    });
}(jQuery));