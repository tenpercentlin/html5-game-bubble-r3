window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "js/game.js",
                "js/jquery.js",
                "js/sizzle.js"
            ],
            complete : function() {
            	gameModule.start();
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