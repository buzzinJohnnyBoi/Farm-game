// John Campbell
// somtime in october (and november)
// Tractor Game
var james101 = true;
var james100 = true;
var somthing = 35;
var FPS = 10;
var moveBy = 240;
var direction = "stop";
var movingTractor = true;
var tractor = document.querySelector('.tractor');
var combine = document.querySelector('.combine');
var moving = 70;
var moveBy2 = 730;
var JohnJr = true;
var Johnny;
var matthew;
var corplanted;
var whichcombine;
var whichcombine2;
var delay = 200;
var whichAcre = 0;
var example = document.querySelectorAll(".acre");
var deciding;
var scoreCounter = 500;
var pumk = true;
var looooeisis = true;
var tractorpump = "url(tractor2back.png)";
var tractorpump2 = "url(tractor2.png)";
var example2 = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
				true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
				true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
				true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true
				]

		console.log(example2[83]);
var score = 0;
window.addEventListener('load', () => {
    tractor.style.position = 'absolute';
	tractor.style.top = + 10+"px";
	tractor.style.left = + 240+"px";
	combine.style.position = 'absolute';
	combine.style.top = + 10+"px";
	combine.style.left = + 730+"px";
});
window.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {alert(combine.style.left); alert(combine.style.top);}
	if (e.keyCode === 39) {JohnJr = true; direction = "left";  if (movingTractor === true) { tractor.style.backgroundImage = tractorpump2;} if (movingTractor === false) {combine.style.backgroundImage = whichcombine2;}}
	if (e.keyCode === 37) {JohnJr = false; direction = "right"; if (movingTractor === true) {  tractor.style.backgroundImage = tractorpump;} if (movingTractor === false) {combine.style.backgroundImage = whichcombine;}}
	if (e.keyCode === 38) {if (direction !== "stop") {	if (movingTractor === true) {tractor.style.top = parseInt(tractor.style.top) - moving + 'px';} if (movingTractor === false) {combine.style.top = parseInt(combine.style.top) - moving + 'px';}}}
	if (e.keyCode === 40) {if (direction !== "stop") {	if (movingTractor === true) {tractor.style.top = parseInt(tractor.style.top) + moving + 'px';} if (movingTractor === false) {combine.style.top = parseInt(combine.style.top) + moving + 'px';}}}
	if (e.keyCode === 32) {direction = "stop";}

	if (parseInt(tractor.style.top) < 0) {
		tractor.style.top = parseInt(tractor.style.top) + moving + 'px';
	}

		if (parseInt(combine.style.top) < 0) {
		combine.style.top = parseInt(combine.style.top) + moving + 'px';
	}

		if (parseInt(tractor.style.top) > 510) {
		tractor.style.top = parseInt(tractor.style.top) - moving + 'px';

	}

		if (parseInt(combine.style.top) > 510) {
		combine.style.top = parseInt(combine.style.top) - moving + 'px';
	}

});

function DriveCombine() {
	direction = "stop";
	movingTractor = false;
}

function DriveTractor() {
	direction = "stop";
	movingTractor = true;
}

setInterval(update, 1000 / FPS);

function update() {
	if (movingTractor === false) {
				if (parseInt(combine.style.top) == 150) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}

					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) 					{whichAcre = 0; }
			if (matthew < 126 && matthew > 63)  {whichAcre = 1; }
			if (matthew < 189 && matthew > 126) {whichAcre = 2; }
			if (matthew < 252 && matthew > 189) {whichAcre = 3; }
			if (matthew < 315 && matthew > 252) {whichAcre = 4; }
			if (matthew < 378 && matthew > 315) {whichAcre = 5; }
			if (matthew < 441 && matthew > 378) {whichAcre = 6; }
			if (matthew < 504 && matthew > 441) {whichAcre = 7; }
			if (matthew < 567 && matthew > 504) {whichAcre = 8; }
			if (matthew < 630 && matthew > 567) { whichAcre = 9; }
			if (matthew < 693 && matthew > 630) { whichAcre = 10;}
			if (matthew < 756 && matthew > 693) { whichAcre = 11;}
			if (matthew < 819 && matthew > 756) { whichAcre = 12;}
			if (matthew < 882 && matthew > 819) { whichAcre = 13;}
			if (matthew > 882) 					{ whichAcre = 14;}
			 harvest();
		}
										if (parseInt(combine.style.top) == 220) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}

					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) {				    whichAcre = 15;}
			if (matthew < 126 && matthew > 63) {whichAcre = 16;}
			if (matthew < 189 && matthew > 126){whichAcre = 17;}
			if (matthew < 252 && matthew > 189){whichAcre = 18;}
			if (matthew < 315 && matthew > 252){whichAcre = 19;}
			if (matthew < 378 && matthew > 315){whichAcre = 20;}
			if (matthew < 441 && matthew > 378){whichAcre = 21;}
			if (matthew < 504 && matthew > 441){whichAcre = 22;}
			if (matthew < 567 && matthew > 504){whichAcre = 23;}
			if (matthew < 630 && matthew > 567){whichAcre = 24;}
			if (matthew < 693 && matthew > 630){whichAcre = 25;}
			if (matthew < 756 && matthew > 693){whichAcre = 26;}
			if (matthew < 819 && matthew > 756){whichAcre = 27;}
			if (matthew < 882 && matthew > 819){whichAcre = 28;}
			if (matthew > 882) {				whichAcre = 29;}
			harvest();

		}
										if (parseInt(combine.style.top) == 290) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}

					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) {				 	whichAcre = 30;}
			if (matthew < 126 && matthew > 63) {whichAcre = 31;}
			if (matthew < 189 && matthew > 126){whichAcre = 32;}
			if (matthew < 252 && matthew > 189){whichAcre = 33;}
			if (matthew < 315 && matthew > 252){whichAcre = 34;}
			if (matthew < 378 && matthew > 315){whichAcre = 35;}
			if (matthew < 441 && matthew > 378){whichAcre = 36;}
			if (matthew < 504 && matthew > 441){whichAcre = 37;}
			if (matthew < 567 && matthew > 504){whichAcre = 38;}
			if (matthew < 630 && matthew > 567){whichAcre = 39;}
			if (matthew < 693 && matthew > 630){whichAcre = 40;}
			if (matthew < 756 && matthew > 693){whichAcre = 41;}
			if (matthew < 819 && matthew > 756){whichAcre = 42;}
			if (matthew < 882 && matthew > 819){whichAcre = 43;}
			if (matthew > 882) {				whichAcre = 44;}
			harvest();
		}

												if (parseInt(combine.style.top) == 360) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}

					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) {				 	whichAcre = 45;}
			if (matthew < 126 && matthew > 63) {whichAcre = 46;}
			if (matthew < 189 && matthew > 126){whichAcre = 47;}
			if (matthew < 252 && matthew > 189){whichAcre = 48;}
			if (matthew < 315 && matthew > 252){whichAcre = 49;}
			if (matthew < 378 && matthew > 315){whichAcre = 50;}
			if (matthew < 441 && matthew > 378){whichAcre = 51;}
			if (matthew < 504 && matthew > 441){whichAcre = 52;}
			if (matthew < 567 && matthew > 504){whichAcre = 53;}
			if (matthew < 630 && matthew > 567){whichAcre = 54;}
			if (matthew < 693 && matthew > 630){whichAcre = 55;}
			if (matthew < 756 && matthew > 693){whichAcre = 56;}
			if (matthew < 819 && matthew > 756){whichAcre = 57;}
			if (matthew < 882 && matthew > 819){whichAcre = 58;}
			if (matthew > 882) {				whichAcre = 59;}
			harvest();
		}

						if (parseInt(combine.style.top) == 430) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}

					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) {				 	whichAcre = 60;}
			if (matthew < 126 && matthew > 63) {whichAcre = 61;}
			if (matthew < 189 && matthew > 126){whichAcre = 62;}
			if (matthew < 252 && matthew > 189){whichAcre = 63;}
			if (matthew < 315 && matthew > 252){whichAcre = 64;}
			if (matthew < 378 && matthew > 315){whichAcre = 65;}
			if (matthew < 441 && matthew > 378){whichAcre = 66;}
			if (matthew < 504 && matthew > 441){whichAcre = 67;}
			if (matthew < 567 && matthew > 504){whichAcre = 68;}
			if (matthew < 630 && matthew > 567){whichAcre = 69;}
			if (matthew < 693 && matthew > 630){whichAcre = 70;}
			if (matthew < 756 && matthew > 693){whichAcre = 71;}
			if (matthew < 819 && matthew > 756){whichAcre = 72;}
			if (matthew < 882 && matthew > 819){whichAcre = 73;}
			if (matthew > 882) {				whichAcre = 74;}
			harvest();
		}
		if (parseInt(combine.style.top) == 500) {
						if (JohnJr === false) {
			matthew = parseInt(combine.style.left);
		}
					if (JohnJr === true) {
			matthew = parseInt(combine.style.left) + 230;
		}
			if (matthew < 63) {				 	 whichAcre = 75;}
			if (matthew < 126 && matthew > 63)  {whichAcre = 76;}
			if (matthew < 189 && matthew > 126) {whichAcre = 77;}
			if (matthew < 252 && matthew > 189) {whichAcre = 78;}
			if (matthew < 315 && matthew > 252) {whichAcre = 79;}
			if (matthew < 378 && matthew > 315) {whichAcre = 80;}
			if (matthew < 441 && matthew > 378) {whichAcre = 81;}
			if (matthew < 504 && matthew > 441) {whichAcre = 82;}
			if (matthew < 567 && matthew > 504) {whichAcre = 83;}
			if (matthew < 630 && matthew > 567) {whichAcre = 84;}
			if (matthew < 693 && matthew > 630) {whichAcre = 85;}
			if (matthew < 756 && matthew > 693) {whichAcre = 86;}
			if (matthew < 819 && matthew > 756) {whichAcre = 87;}
			if (matthew < 882 && matthew > 819) {whichAcre = 88;}
			if (matthew > 882) {				 whichAcre = 89;}
			harvest();
		}
}
	if (movingTractor === true) {
		if (parseInt(tractor.style.top) == 150) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				    example2[0] = false; whichAcre = 0;}
			if (Johnny < 126 && Johnny > 63)  { example2[1] = false; whichAcre = 1;}
			if (Johnny < 189 && Johnny > 126) { example2[2] = false; whichAcre = 2;}
			if (Johnny < 252 && Johnny > 189) { example2[3] = false; whichAcre = 3;}
			if (Johnny < 315 && Johnny > 252) { example2[4] = false; whichAcre = 4;}
			if (Johnny < 378 && Johnny > 315) { example2[5] = false; whichAcre = 5;}
			if (Johnny < 441 && Johnny > 378) { example2[6] = false; whichAcre = 6;}
			if (Johnny < 504 && Johnny > 441) { example2[7] = false; whichAcre = 7;}
			if (Johnny < 567 && Johnny > 504) { example2[8] = false; whichAcre = 8;}
			if (Johnny < 630 && Johnny > 567) { example2[9] = false; whichAcre = 9;}
			if (Johnny < 693 && Johnny > 630) {example2[10] = false;  whichAcre = 10;}
			if (Johnny < 756 && Johnny > 693) {example2[11] = false;  whichAcre = 11;}
			if (Johnny < 819 && Johnny > 756) {example2[12] = false;  whichAcre = 12;}
			if (Johnny < 882 && Johnny > 819) {example2[13] = false;  whichAcre = 13;}
			if (Johnny > 882) {				   example2[14] = false;  whichAcre = 14;}
				plant();
		}



		if (parseInt(tractor.style.top) == 220) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				   example2[15] = false; whichAcre = 15;}
			if (Johnny < 126 && Johnny > 63)  {example2[16] = false; whichAcre = 16;}
			if (Johnny < 189 && Johnny > 126) {example2[17] = false; whichAcre = 17;}
			if (Johnny < 252 && Johnny > 189) {example2[18] = false; whichAcre = 18;}
			if (Johnny < 315 && Johnny > 252) {example2[19] = false; whichAcre = 19;}
			if (Johnny < 378 && Johnny > 315) {example2[20] = false; whichAcre = 20;}
			if (Johnny < 441 && Johnny > 378) {example2[21] = false; whichAcre = 21;}
			if (Johnny < 504 && Johnny > 441) {example2[22] = false; whichAcre = 22;}
			if (Johnny < 567 && Johnny > 504) {example2[23] = false; whichAcre = 23;}
			if (Johnny < 630 && Johnny > 567) {example2[24] = false; whichAcre = 24;}
			if (Johnny < 693 && Johnny > 630) {example2[25] = false; whichAcre = 25;}
			if (Johnny < 756 && Johnny > 693) {example2[26] = false; whichAcre = 26;}
			if (Johnny < 819 && Johnny > 756) {example2[27] = false; whichAcre = 27;}
			if (Johnny < 882 && Johnny > 819) {example2[28] = false; whichAcre = 28;}
			if (Johnny > 882) {				   example2[29] = false; whichAcre = 29;}
			plant();
		}


				if (parseInt(tractor.style.top) == 290) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				  example2[30] = false; whichAcre = 30;}
			if (Johnny < 126 && Johnny > 63) {example2[31] = false; whichAcre = 31;}
			if (Johnny < 189 && Johnny > 126){example2[32] = false; whichAcre = 32;}
			if (Johnny < 252 && Johnny > 189){example2[33] = false; whichAcre = 33;}
			if (Johnny < 315 && Johnny > 252){example2[34] = false; whichAcre = 34;}
			if (Johnny < 378 && Johnny > 315){example2[35] = false; whichAcre = 35;}
			if (Johnny < 441 && Johnny > 378){example2[36] = false; whichAcre = 36;}
			if (Johnny < 504 && Johnny > 441){example2[37] = false; whichAcre = 37;}
			if (Johnny < 567 && Johnny > 504){example2[38] = false; whichAcre = 38;}
			if (Johnny < 630 && Johnny > 567){example2[39] = false; whichAcre = 39;}
			if (Johnny < 693 && Johnny > 630){example2[40] = false; whichAcre = 40;}
			if (Johnny < 756 && Johnny > 693){example2[41] = false; whichAcre = 41;}
			if (Johnny < 819 && Johnny > 756){example2[42] = false; whichAcre = 42;}
			if (Johnny < 882 && Johnny > 819){example2[43] = false; whichAcre = 43;}
			if (Johnny > 882) {				  example2[44] = false; whichAcre = 44;}
			plant();
		}


				if (parseInt(tractor.style.top) == 360) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				  example2[45] = false; whichAcre = 45;}
			if (Johnny < 126 && Johnny > 63) {example2[46] = false; whichAcre = 46;}
			if (Johnny < 189 && Johnny > 126){example2[47] = false; whichAcre = 47;}
			if (Johnny < 252 && Johnny > 189){example2[48] = false; whichAcre = 48;}
			if (Johnny < 315 && Johnny > 252){example2[49] = false; whichAcre = 49;}
			if (Johnny < 378 && Johnny > 315){example2[50] = false; whichAcre = 50;}
			if (Johnny < 441 && Johnny > 378){example2[51] = false; whichAcre = 51;}
			if (Johnny < 504 && Johnny > 441){example2[52] = false; whichAcre = 52;}
			if (Johnny < 567 && Johnny > 504){example2[53] = false; whichAcre = 53;}
			if (Johnny < 630 && Johnny > 567){example2[54] = false; whichAcre = 54;}
			if (Johnny < 693 && Johnny > 630){example2[55] = false; whichAcre = 55;}
			if (Johnny < 756 && Johnny > 693){example2[56] = false; whichAcre = 56;}
			if (Johnny < 819 && Johnny > 756){example2[57] = false; whichAcre = 57;}
			if (Johnny < 882 && Johnny > 819){example2[58] = false; whichAcre = 58;}
			if (Johnny > 882) {				  example2[59] = false; whichAcre = 59;}
			plant();
		}

						if (parseInt(tractor.style.top) == 430) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				  example2[60] = false; whichAcre = 60;}
			if (Johnny < 126 && Johnny > 63) {example2[61] = false; whichAcre = 61;}
			if (Johnny < 189 && Johnny > 126){example2[62] = false; whichAcre = 62;}
			if (Johnny < 252 && Johnny > 189){example2[63] = false; whichAcre = 63;}
			if (Johnny < 315 && Johnny > 252){example2[64] = false; whichAcre = 64;}
			if (Johnny < 378 && Johnny > 315){example2[65] = false; whichAcre = 65;}
			if (Johnny < 441 && Johnny > 378){example2[66] = false; whichAcre = 66;}
			if (Johnny < 504 && Johnny > 441){example2[67] = false; whichAcre = 67;}
			if (Johnny < 567 && Johnny > 504){example2[68] = false; whichAcre = 68;}
			if (Johnny < 630 && Johnny > 567){example2[69] = false; whichAcre = 69;}
			if (Johnny < 693 && Johnny > 630){example2[70] = false; whichAcre = 70;}
			if (Johnny < 756 && Johnny > 693){example2[71] = false; whichAcre = 71;}
			if (Johnny < 819 && Johnny > 756){example2[72] = false; whichAcre = 72;}
			if (Johnny < 882 && Johnny > 819){example2[73] = false; whichAcre = 73;}
			if (Johnny > 882) {				  example2[74] = false; whichAcre = 74;}
			plant();
		}

						if (parseInt(tractor.style.top) == 500) {
			if (JohnJr === true) {
			Johnny = parseInt(tractor.style.left);
		}

					if (JohnJr === false) {
			Johnny = parseInt(tractor.style.left) + 186;
		}
			if (Johnny < 63) {				  example2[75] = false; whichAcre = 75;}
			if (Johnny < 126 && Johnny > 63) {example2[76] = false; whichAcre = 76;}
			if (Johnny < 189 && Johnny > 126){example2[77] = false; whichAcre = 77;}
			if (Johnny < 252 && Johnny > 189){example2[78] = false; whichAcre = 78;}
			if (Johnny < 315 && Johnny > 252){example2[79] = false; whichAcre = 79;}
			if (Johnny < 378 && Johnny > 315){example2[80] = false; whichAcre = 80;}
			if (Johnny < 441 && Johnny > 378){example2[81] = false; whichAcre = 81;}
			if (Johnny < 504 && Johnny > 441){example2[82] = false; whichAcre = 82;}
			if (Johnny < 567 && Johnny > 504){example2[83] = false; whichAcre = 83;}
			if (Johnny < 630 && Johnny > 567){example2[84] = false; whichAcre = 84;}
			if (Johnny < 693 && Johnny > 630){example2[85] = false; whichAcre = 85;}
			if (Johnny < 756 && Johnny > 693){example2[86] = false; whichAcre = 86;}
			if (Johnny < 819 && Johnny > 756){example2[87] = false; whichAcre = 87;}
			if (Johnny < 882 && Johnny > 819){example2[88] = false; whichAcre = 88;}
			if (Johnny > 882) {				  example2[89] = false; whichAcre = 89;}
			plant();
		}
				}
	if (parseInt(tractor.style.left) > 750) {JohnJr = false; if (movingTractor === true) { direction = "right"; tractor.style.backgroundImage = tractorpump;}}
	if (parseInt(tractor.style.left) < 0) {JohnJr = true;if (movingTractor === true) { direction = "left"; tractor.style.backgroundImage = tractorpump2;} }
	if (parseInt(combine.style.left) > 740) {JohnJr = false; if (movingTractor === false) { direction = "right";combine.style.backgroundImage = whichcombine;}}
	if (parseInt(combine.style.left) < 0) {JohnJr = true; if (movingTractor === false) {direction = "left"; combine.style.backgroundImage = whichcombine2;}
	}

	if (direction == "left") {
		if (movingTractor === true) {
	tractor.style.left = moveBy + "px";
		moveBy = moveBy + somthing;
	}

			if (movingTractor === false) {
	combine.style.left = moveBy2 + "px";
		moveBy2 = moveBy2 + somthing;
	}
}

	if (direction == "right") {
			if (direction == "right") {
		if (movingTractor === true) {
	tractor.style.left = moveBy + "px";
		moveBy = moveBy - somthing;
	}
}

			if (movingTractor === false) {
	combine.style.left = moveBy2 + "px";
		moveBy2 = moveBy2 - somthing;
	}
}

if (parseInt(combine.style.left) == parseInt(tractor.style.left) + 140 || parseInt(combine.style.left) == parseInt(tractor.style.left) || parseInt(combine.style.left) + 210 == parseInt(tractor.style.left)) {
if (pumk === true) {
if (looooeisis === false) {
if (parseInt(combine.style.top) == parseInt(tractor.style.top)) {james100 = false; james101 = false;	tractor.style.width = + 187+"px";tractor.style.height = + 85+"px";  pumk = false;  whichcombine = "url(brokencombine.png)"; whichcombine2 = "url(brokencombineback.png)";
tractorpump2 = "url(brokentractor2.png)"; tractorpump = "url(brokentractor2back.png)";
if (direction == "right") {combine.style.backgroundImage = whichcombine; tractor.style.backgroundImage = tractorpump2;} if (direction == "left") {tractor.style.backgroundImage = tractorpump; combine.style.backgroundImage = whichcombine2;} direction = "stop";
}
}
if (looooeisis === true) {
if (parseInt(combine.style.top) == parseInt(tractor.style.top)) {james100 = false; james101 = false; tractor.style.width = + 187+"px";tractor.style.height = + 85+"px"; 	 pumk = false;  whichcombine2 = "url(brokenredcombine.png)"; whichcombine = "url(brokenredcombineback.png)";
tractorpump2 = "url(brokentractor2.png)"; tractorpump = "url(brokentractor2back.png)";
if (direction == "right") {combine.style.backgroundImage = whichcombine; tractor.style.backgroundImage = tractorpump;} if (direction == "left") {tractor.style.backgroundImage = tractorpump; combine.style.backgroundImage = whichcombine2;} direction = "stop";
}
}
}
}
}

function harvest() {
	if (james101 === true) {
	if (example2[whichAcre] === false) {
		example2[whichAcre] = true;
  	example[whichAcre].style.backgroundImage = "url(dirt.png)";
  	score = score + scoreCounter;
  	document.querySelector("#numponits").innerHTML = score;
}
}
}

function plant() {
	if (james100 === true) {
	  	example[whichAcre].style.backgroundImage = corplanted;
	  }

	  	if (james100 === false) {
	  	console.log(";lsakjdf;laskdjf;lasdkjf;lskjdf");
	  }
 }
function Corn() {
	looooeisis = true;
corplanted = "url(corn!.png)";
whichcombine = "url(redcombineback.png)";
whichcombine2 = "url(redcombine.png)";
document.querySelector("c").style.display = "none";
combine.style.backgroundImage = whichcombine;
combine.style.height = "84px";
combine.style.width = "231.6px";
}

function Wheat() {
	looooeisis = false;
	corplanted = "url(wheat!.png)";
whichcombine = "url(combine.png)";
whichcombine2 = "url(combineback.png)";
document.querySelector("c").style.display = "none";
combine.style.backgroundImage = whichcombine;
}

function your() {
	  	score = score - 12904;
  	document.querySelector("#numponits").innerHTML = score;
  	pumk = true;
  	if (looooeisis === false) {
whichcombine = "url(combine.png)";
whichcombine2 = "url(combineback.png)";
tractorpump2 = "url(tractor2.png)";
tractorpump = "url(tractor2back.png)";
combine.style.backgroundImage = whichcombine;
james101 = true;
}
if (looooeisis === true) {
whichcombine2 = "url(redcombine.png)";
whichcombine = "url(redcombineback.png)";
tractorpump2 = "url(tractor2.png)";
tractorpump = "url(tractor2back.png)";
combine.style.backgroundImage = whichcombine;
james101 = true;
}
}


function your2() {
	  	score = score - 12904;
  	document.querySelector("#numponits").innerHTML = score;
  	pumk = true;
tractorpump2 = "url(tractor2.png)";
tractorpump = "url(tractor2back.png)";
tractor.style.backgroundImage = tractorpump;
tractor.style.width = + 186+"px";
tractor.style.height = + 68+"px";
james100 = true;
}
