window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "js/game.js",
                "js/jquery.js"
            ],
            complete : function() {
                /*
                alert("Ready");
                $( "#cover" ).hover(function()
                {
                	alert("OK");
                });
				*/
            }
        }
    ]);

}, false);