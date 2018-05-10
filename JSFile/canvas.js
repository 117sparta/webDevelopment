let fallBack1;
let fallBack2;
let fallBack3;
let circleNum = 400;
let circleGroup = new Array(circleNum);
for (let i = 0; i < circleGroup.length; i++) {
    circleGroup[i] = new Circle();
}
let count = 0;
window.onload = function () {
    let drawing = document.getElementById("drawing");
    if (drawing.getContext) {
        let context = drawing.getContext("2d");
        context.strokeStyle = "rgba(0,0,0,0.7)";
        context.fillStyle = "white";
        context.fontcolor = "rgba(255,0,0,0.7)";
        context.font = "bold 80px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.beginPath();
        for (let i = 0; i < circleGroup.length; i++) {
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        context.fill();
        context.closePath();
        fallBack2 = setInterval(stopAndDrawText, 10);
        fallBack3 = setInterval(function () {
            count++;
        }, 10);
    }
};

function Circle() {
    this.x = Math.random() * 1200;
    this.y = Math.random() * 500;
}

function starMoving() {
    let drawing = document.getElementById("drawing");
    if (drawing.getContext) {
        let context = drawing.getContext("2d");
        for (let i = 0; i < circleGroup.length; i++) {
            context.clearRect(circleGroup[i].x - 2, circleGroup[i].y - 2, 4, 4);
        }
        context.beginPath();
        for (let i = 0; i < circleGroup.length / 10; i++) {
            if (circleGroup[i].x <= 0) {
                circleGroup[i].x += 1199;
            }
            else if (circleGroup[i].y <= 0) {
                circleGroup[i].y += 499;
            }
            else {
                circleGroup[i].x -= 0.3;
                circleGroup[i].y -= 0.3;
            }
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        for (let i = circleGroup.length / 10; i < circleGroup.length / 4; i++) {
            if (circleGroup[i].x >= 1200) {
                circleGroup[i].x -= 1199;
            }
            else if (circleGroup[i].y >= 500) {
                circleGroup[i].y -= 499;
            }
            else {
                circleGroup[i].x += 0.3;
                circleGroup[i].y += 0.3;
            }
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        for (let i = circleGroup.length / 4; i < circleGroup.length / 2; i++) {
            if (circleGroup[i].x >= 1200) circleGroup[i].x = 1;
            else circleGroup[i].x += 0.3;
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        for (let i = circleGroup.length / 2; i < (circleGroup.length * 4) / 5; i++) {
            if (circleGroup[i].y >= 500) circleGroup[i].y = 1;
            else circleGroup[i].y += 0.3;
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        for (let i = (circleGroup.length * 4) / 5; i < circleGroup.length; i++) {
            if (circleGroup[i].x <= 0) {
                circleGroup[i].x += 1199;
            }
            else if (circleGroup[i].y >= 500) {
                circleGroup[i].y -= 499;
            }
            else {
                circleGroup[i].x -= 0.3;
                circleGroup[i].y += 0.3;
            }
            context.moveTo(circleGroup[i].x + 1, circleGroup[i].y);
            context.arc(circleGroup[i].x, circleGroup[i].y, 1.5, 0, 2 * Math.PI, false);
        }
        context.fill();
        context.closePath();
    }
}

function stopAndDrawText() {
    if (count >= 100) {
        clearInterval(fallBack3);
        clearInterval(fallBack2);
        let drawing = document.getElementById("drawing");
        if (drawing.getContext) {
            let context = drawing.getContext("2d");
            context.fillText("生日快乐", 600, 550, 800);
            setTimeout(function () {
                context.clearRect(0, 500, 1200, 100);
                context.fillText("来点雪花的质感？", 600, 550, 800);
                fallBack1 = setInterval(starMoving, 60);
            }, 10000);
        }
    }
}
