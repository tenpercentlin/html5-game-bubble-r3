var gameModule = (function(){
	var ballX = 100,
		ballY = 100,
		ballR = 50;

		var maxWidth
          , maxHeight
          , maxR;

	function start() {
		var canvas = document.getElementById("cover");

		var ctx = canvas.getContext("2d");

		var background = Sizzle('#game')[0],
                        rect = background.getBoundingClientRect();
		canvas.width = rect.width;
		canvas.height = rect.height;

		maxWidth = rect.width;
        maxHeight = rect.height;
        maxR = (rect.height > rect.width) ? rect.width / 2 : rect.height / 2;

		ballX = Math.floor(Math.random() * maxWidth);
		ballY = Math.floor(Math.random() * maxHeight);
        ballR = Math.floor(Math.random() * maxR) + 30;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
		ctx.fill();

		document.getElementById("game")
                                .addEventListener("click", touchEvent, false);

        console.log('Start Game');
	}

	function touchEvent(evt) {
                console.log('clicked: ' + evt.clientX + " , " + evt.clientY);
        var x1, 
            x2,
            y1,
            y2;
        // 四個角
        x1 = ballX - ballR;
        x2 = ballX + ballR;                
        y1 = ballY - ballR;
        y2 = ballY + ballR;

        // 是否擊中
        if ((evt.clientX > x1) && (evt.clientX < x2)) {
                if ((evt.clientY > y1) && (evt.clientY < y2)) {

                        console.log("Hit.");
                }
        }
    }

	return	{
		start:start
	}
})();