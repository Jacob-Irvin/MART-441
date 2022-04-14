class Square
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    get theX()
    {
        return this.x;
    }

    get theY()
    {
        return this.y;
    }

    get theW()
    {
        return this.w;
    }

    get theH()
    {
        return this.h;
    }

    setX(x)
    {
        this.x = x; 
    }

    setY(y)
    {
        this.y = y; 
    }
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
ctx.fillStyle = "#0000FF";

let myJSON = {
    "x":10,
    "y":10,
    "w":20,
    "h":20,
}

var myObjects = [];
var player; 
player = new Square(x, y, 50, 50)

let currentX = myJSON.x;
for( let i = 0; i < 16; i++)
{
var myObject = new Square(currentX, myJSON.y, myJSON.w, myJSON.h);
myObjects.push(myObject);
currentX += 50;   
}


drawSquare();

setInterval(update, 1000);

function update()
{   
    drawSquare();
}

function drawSquare()
{
    ctx.clearRect(0, 0, 600, 800);
    for (let i = 0; i < myObjects.length; i++){
        ctx.fillRect(myObjects[i].theX, myObjects[i].theY, myObjects[i].theW, myObjects[i].theH);   
    }
    
    ctx.fillRect(player.theX, player.theY, player.theW, player.theH);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if(actualLetter == "w")
    {
        y-=5;
        player.setY(y); 
    }
    else if(actualLetter == "s")
    {
        y+=5;
        player.setY(y); 
    }
    else if(actualLetter == "a")
    {
        x-=5;
        player.setX(x); 
    }
    else if(actualLetter == "d")
    {
        x+=5;
        player.setX(x); 
    }
    drawSquare(); 
}


function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.h) < (object2.y)) ||
        (object1.y > (object2.y + object2.h)) ||
        ((object1.x + object1.w) < object2.x) ||
        (object1.x > (object2.x + object2.w))
    );
}

if(!hasCollided(player, myObjects[0]))
{
    window.alert("ouch")
}
