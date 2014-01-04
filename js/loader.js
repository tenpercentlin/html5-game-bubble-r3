window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "js/game.js",
            ],
            complete : function() {
                alert("Ready");
            }
        }
    ]);

}, false);