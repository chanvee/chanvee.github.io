// variables
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();

$(function () {
    // setup garden
	$loveHeart = $("#loveHeart");
	var offsetX = $loveHeart.width() / 2;
	var offsetY = $loveHeart.height() / 2 - 55;
    $garden = $("#garden");
    gardenCanvas = $garden[0];
	gardenCanvas.width = $("#loveHeart").width();
    gardenCanvas.height = $("#loveHeart").height()
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
	
	$("#content").css("width", $loveHeart.width() + $("#code").width());
	$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
	$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

    // renderLoop
    setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);
});

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

function getHeartPoint(angle) {
    var t = angle / Math.PI;
    var x = -2 * (16 * Math.pow(Math.sin(t), 3));
    var y = 3 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return new Array(offsetX + 210 + x, offsetY - 105 + y);
}

function startHeartAnimation() {
    var interval = 50;
    var angle = 10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getHeartPoint(angle);
        var draw = true;
        /*for (var i = 0; i < heart.length; i++) {
			var p = heart[i];
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				draw = false;
				break;
			}
		}*/
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 29) {
            clearInterval(animationTimer);
            showMessages();
        } else {
            angle += 0.5;
        }
    }, interval);
}

/*得到姓名H第一笔*/
function getNameH1(angle) {
    var x = -300;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startNameH1() {
    var interval = 50;
    var angle = -250;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getNameH1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -130) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

/*得到姓名H第二笔*/
function getNameH2(angle) {
    var x = angle;
    var y = -190;
    return new Array(offsetX + x, offsetY + y);
}

function startNameH2() {
    var interval = 50;
    var angle = -300;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getNameH2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -240) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

/*得到姓名H第三笔*/
function getNameH3(angle) {
    var x = -240;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startNameH3() {
    var interval = 50;
    var angle = -250;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getNameH3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -130) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getF1(angle) {
    var x = -300;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startF1() {
    var interval = 50;
    var angle = -250;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getF1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -130) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getF2(angle) {
    var x = angle;
    var y = -250;
    return new Array(offsetX + x, offsetY + y);
}

function startF2() {
    var interval = 50;
    var angle = -300;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getF2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -240) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getF3(angle) {
    var x = angle;
    var y = -190;
    return new Array(offsetX + x, offsetY + y);
}

function startF3() {
    var interval = 50;
    var angle = -300;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getF3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -265) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getDD1(angle) {
    var x = -220;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startDD1() {
    var interval = 50;
    var angle = -250;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getDD1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -130) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getDD2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 60 * Math.sin(t);
    return new Array(offsetX - 220 + x, offsetY -190 + y);
}

function startDD2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getDD2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getQ1(angle) {
    var t = angle / Math.PI;
    var x = 30* Math.cos(t);
    var y = 60 * Math.sin(t);
    return new Array(offsetX - 190 + x, offsetY - 190 + y);
}

function startQ1() {
    var interval = 50;
    var angle = 5;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getQ1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.4;
        }
    }, interval);
}

function getQ2(angle) {
    var x = angle;
    var y = 2 * x + 190;
    return new Array(offsetX + x, offsetY + y);
}

function startQ2() {
    var interval = 50;
    var angle = -180;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getQ2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -160) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getColon1(angle) {
    var t = angle / Math.PI;
    var x = 3 * Math.cos(t);
    var y = 3 * Math.sin(t);
    return new Array(offsetX - 130 + x, offsetY - 220 + y);
}

function startColon1() {
    var interval = 50;
    var angle = 10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getColon1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 29.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getColon2(angle) {
    var t = angle / Math.PI;
    var x = 3 * Math.cos(t);
    var y = 3 * Math.sin(t);
    return new Array(offsetX - 130 + x, offsetY - 160 + y);
}

function startColon2() {
    var interval = 50;
    var angle = 10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getColon2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 29.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getH1(angle) {
    var x = -300;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startH1() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getH1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getH2(angle) {
    var x = angle;
    var y = -10;
    return new Array(offsetX + x, offsetY + y);
}

function startH2() {
    var interval = 50;
    var angle = -300;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getH2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -240) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getH3(angle) {
    var x = -240;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startH3() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getH3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getA1(angle) {
    var x = angle;
    var y = -4 * x - 830;
    return new Array(offsetX + x, offsetY + y);
}

function startA1() {
    var interval = 50;
    var angle = -220;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getA1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -190) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getA2(angle) {
    var x = angle;
    var y = 4 * x + 690;
    return new Array(offsetX + x, offsetY + y);
}

function startA2() {
    var interval = 50;
    var angle = -190;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getA2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -160) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getA3(angle) {
    var x = angle;
    var y = -10;
    return new Array(offsetX + x, offsetY + y);
}

function startA3() {
    var interval = 50;
    var angle = -205;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getA3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -175) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getP1(angle) {
    var x = -140;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startP1() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getP1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getP2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 30 * Math.sin(t);
    return new Array(offsetX - 140 + x, offsetY - 40 + y);
}

function startP2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getP2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getPP1(angle) {
    var x = -60;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startPP1() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getPP1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getPP2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 30 * Math.sin(t);
    return new Array(offsetX - 60 + x, offsetY - 40 + y);
}

function startPP2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getPP2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getY1(angle) {
    var x = angle;
    var y = 2 * x - 110;
    return new Array(offsetX + x, offsetY + y);
}

function startY1() {
    var interval = 50;
    var angle = 20;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getY1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 5;
        }
    }, interval);
}

function getY2(angle) {
    var x = 50;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startY2() {
    var interval = 50;
    var angle = -10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getY2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getY3(angle) {
    var x = angle;
    var y = -2 * x + 90;
    return new Array(offsetX + x, offsetY + y);
}

function startY3() {
    var interval = 50;
    var angle = 50;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getY3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 80) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 5;
        }
    }, interval);
}

function getB1(angle) {
    var x = -300;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startB1() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getB1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getB2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 30 * Math.sin(t);
    return new Array(offsetX - 300 + x, offsetY + 140 + y);
}

function startB2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getB2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getB3(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 30 * Math.sin(t);
    return new Array(offsetX - 300 + x, offsetY + 200 + y);
}

function startB3() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getB3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getI1(angle) {
    var x = -190;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startI1() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getI1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getI2(angle) {
    var x = angle;
    var y = 110;
    return new Array(offsetX + x, offsetY + y);
}

function startI2() {
    var interval = 50;
    var angle = -208;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getI2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -172) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getI3(angle) {
    var x = angle;
    var y = 230;
    return new Array(offsetX + x, offsetY + y);
}

function startI3() {
    var interval = 50;
    var angle = -208;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getI3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -172) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getR1(angle) {
    var x = -140;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startR1() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getR1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getR2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 30 * Math.sin(t);
    return new Array(offsetX - 140 + x, offsetY + 140 + y);
}

function startR2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getR2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getR3(angle) {
    var x = angle;
    var y = x + 310;
    return new Array(offsetX + x, offsetY + y);
}

function startR3() {
    var interval = 50;
    var angle = -140;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getR3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= -80) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getT1(angle) {
    var x = angle;
    var y = 110;
    return new Array(offsetX + x, offsetY + y);
}

function startT1() {
    var interval = 50;
    var angle = -60;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getT1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 0) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getT2(angle) {
    var x = -30;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startT2() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getT2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getHH1(angle) {
    var x = 20;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startHH1() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getHH1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getHH2(angle) {
    var x = angle;
    var y = 170;
    return new Array(offsetX + x, offsetY + y);
}

function startHH2() {
    var interval = 50;
    var angle = 20;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getHH2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 80) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getHH3(angle) {
    var x = 80;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startHH3() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getHH3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getD1(angle) {
    var x = 100;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startD1() {
    var interval = 50;
    var angle = 110;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getD1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getD2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 60 * Math.sin(t);
    return new Array(offsetX + 100 + x, offsetY + 170 + y);
}

function startD2() {
    var interval = 50;
    var angle = 15;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getD2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 24.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.3;
        }
    }, interval);
}

function getAA1(angle) {
    var x = angle;
    var y = -4 * x + 950;
    return new Array(offsetX + x, offsetY + y);
}

function startAA1() {
    var interval = 50;
    var angle = 180;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getAA1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 210) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getAA2(angle) {
    var x = angle;
    var y = 4 * x - 730;
    return new Array(offsetX + x, offsetY + y);
}

function startAA2() {
    var interval = 50;
    var angle = 210;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getAA2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 240) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 3;
        }
    }, interval);
}

function getAA3(angle) {
    var x = angle;
    var y = 170;
    return new Array(offsetX + x, offsetY + y);
}

function startAA3() {
    var interval = 50;
    var angle = 195;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getAA3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 225) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getYY1(angle) {
    var x = angle;
    var y = 2 * x - 410;
    return new Array(offsetX + x, offsetY + y);
}

function startYY1() {
    var interval = 50;
    var angle = 260;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getYY1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 290) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 5;
        }
    }, interval);
}

function getYY2(angle) {
    var x = 290;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startYY2() {
    var interval = 50;
    var angle = 170;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getYY2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 230) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getYY3(angle) {
    var x = angle;
    var y = -2 * x + 750;
    return new Array(offsetX + x, offsetY + y);
}

function startYY3() {
    var interval = 50;
    var angle = 290;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getYY3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 320) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 5;
        }
    }, interval);
}

function getCandle1(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 25 * Math.sin(t);
    return new Array(offsetX + 210 + x, offsetY - 70 + y);
}

function startCandle1() {
    var interval = 50;
    var angle = 16.7;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getCandle1(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 32.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.4;
        }
    }, interval);
}

function getCandle2(angle) {
    var t = angle / Math.PI;
    var x = 60 * Math.cos(t);
    var y = 25 * Math.sin(t);
    return new Array(offsetX + 210 + x, offsetY + 50 + y);
}

function startCandle2() {
    var interval = 50;
    var angle = 10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getCandle2(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 29.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.4;
        }
    }, interval);
}

function getCandle3(angle) {
    var x = 150;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startCandle3() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getCandle3(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getCandle4(angle) {
    var x = 270;
    var y = angle;
    return new Array(offsetX + x, offsetY + y);
}

function startCandle4() {
    var interval = 50;
    var angle = -70;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getCandle4(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 50) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 10;
        }
    }, interval);
}

function getCandle5(angle) {
    var t = angle / Math.PI;
    var x = 38 * Math.pow(Math.cos(t), 3);
    var y = 48 * Math.pow(Math.sin(t), 3);
    return new Array(offsetX + 570 + x, offsetY - 240 + y);
}

function startCandle5() {
    var interval = 50;
    var angle = 10;
    var heart = new Array();
    var animationTimer = setInterval(function () {
        var bloom = getCandle5(angle);
        var draw = true;
        if (draw) {
            heart.push(bloom);
            garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 29.5) {
            clearInterval(animationTimer);
            //showMessages();
        } else {
            angle += 0.7;
        }
    }, interval);
}

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    if (seconds < 0) {
        seconds = -seconds;
        var days = Math.floor(seconds / (3600 * 24));
        if (days != 0) {
            days = "-" + Math.abs(days);
        }
    }
    else {
        days = Math.floor(seconds / (3600 * 24));
    }
    seconds = Math.abs(seconds % (3600 * 24));
    var hours = Math.floor(seconds / 3600);
    if (Math.abs(hours) < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (Math.abs(minutes) < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (Math.abs(seconds) < 10) {
        seconds = "0" + seconds;
    }
    var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
    $("#elapseClock").html(result);
}

function showMessages() {
	adjustWordsPosition();
	$('#messages').fadeIn(5000, function() {
		showLoveU();
	});
}

function adjustWordsPosition() {
	$('#words').css("position", "absolute");
	$('#words').css("top", $("#garden").position().top + 510);
	$('#words').css("left", $("#garden").position().left + 70);
}

function adjustCodePosition() {
	$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
}

function showLoveU() {
	$('#loveu').fadeIn(3000);
}