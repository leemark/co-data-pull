(function($){
    $('button').on('click', function(){
        var zip = $("select option:selected").text().substring(0,6);
        $.getJSON( "http://data.colorado.gov/resource/4ykn-tg5h.json?entityStatus=Good%20Standing&principalZipCode=" + zip, function(data) {
            var items = [];
            var $ul;  
            $.each(data, function(key, val){
              items.push( "<li id='" + key + "'><span class='name'>" + val.entityname + "</span> <span class='addr'>" + val.principaladdress1 + "</span> <span class='city'>" + val.principalcity + "</span></li>" );
            });
            $ul = $('<ul />').appendTo('.content');
            $ul.append(items);
        });
    });
}(jQuery));