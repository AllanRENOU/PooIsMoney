var compteur = {

    height : 55,
    width : 60,

    "init" : function( container, height, width, space ){

        compteur.height = height;
        compteur.width = width

        console.log("taille du compteur : ", height, width );

        container
        .css( "height", height)
        .css( "width", (width+12) * 6)
        .append(
            $( "<div>" )
            .attr( "id", "counter_item1" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit" ) )
        ).append(
            $( "<div>" )
            .attr( "id", "counter_item2" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit" ).css( "background-position", "center 0px") )
        ).append(
            $( "<div>" )
            .attr( "id", "counter_item3" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit" ) )
        ).append(
            $( "<div>" )
            .attr( "id", "counter_item4" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit" ) )
        ).append(
            $( "<div>" )
            .attr( "id", "counter_item5" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit" ) )
        ).append(
            $( "<div>" )
            .attr( "id", "counter_item6" )
            .css( "width", width )
            .addClass( "counter_item" )
            .append( $( "<div>" ).addClass( "front" ) )
            .append( $( "<div>" ).addClass( "digit digit_euro" ) )
        );

        container.find(".digit").css("background-size", width + "px " + height * 12 + "px");
        container.find(".digit_euro").css("background-position", "center -" + ( height * 11 ) + "px");

        compteur._calculateDigits( 00 );
        /*compteur._setItem(1, digit1);
        compteur._setItem(3, digit2);
        compteur._setItem(4, digit3);
        compteur._setItem(5, digit4);*/
    },

    "_setItem" : function(itemNumber, digit) {
        var token = "#counter_item" + itemNumber + " :first-child";
        var $element = $(token).next(); // second child

        compteur._removeAllDigits($element);
        $element.addClass("digit" + digit);
    },

    "setValue": function( count )
    {
        compteur._calculateDigits( count );
        compteur._switchItem(1, digit1, 5);
        compteur._switchItem(3, digit2, 9);
        compteur._switchItem(4, digit3, 5);
        compteur._switchItem(5, digit4, 9);
    },

    "_calculateDigits" : function( count ) {
        digit1 = parseInt( count / 1000 );
        digit2 = parseInt( count / 100 ) % 10;
        digit3 = parseInt( count / 10 ) % 10;
        digit4 = count % 10;

        //$("#log").text("minutes left: " + minutesLeft + " | seconds left: " + secondsLeft + " | digits: " + digit1 + digit2 + ":" + digit3 + digit4);
    },

    "_switchItem" : function(itemNumber, digit, capacity) {
        var element = $( "#counter_item" + itemNumber + " .digit" );
        element.css( "background-position", "center -" + ((digit+1)*compteur.height) + "px");

        //var $element = $( "#counter_item" + itemNumber + " :first-child" ).next(); // second child

        /*if( !$element.hasClass( "digit" + digit )){
            compteur._removeAllDigits($element);
            $element.addClass("digit" + digit);
            $element.after('<div class="digit digit' + digit + '" style="margin-top: 55px"></div>');

            var $newElement = $element.next();
            $element.animate({
                "margin-top": -55
            }, 500, function () { $element.remove(); });

            $newElement.animate({
                "margin-top": 0
            }, 500);
        }*/
        

    },

    "_removeAllDigits" : function($element) {
        $element.removeClass("digit0 digit1 digit2 digit3 digit4 digit5 digit6 digit7 digit8 digit9");
    }

}
