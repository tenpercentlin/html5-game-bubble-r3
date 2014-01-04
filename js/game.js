var gameModule = (function(){
	function start() {
		var canvas = document.getElementById("cover");

		var ctx = canvas.getContext("2d");

		canvas.width = 480;
		canvas.height = 640;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
		ctx.fill();

		document.getElementById("game")
                                .addEventListener("click", touchEvent, false);

        console.log('Start Game');
	}

	function touchEvent(evt) {
                console.log('clicked: ' + evt.clientX + " , " + evt.clientY);
    }

	return	{
		start:start
	}
})();