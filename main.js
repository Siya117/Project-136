status = "";

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
    music = createCapture(VIDEO);
    music.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(music, 0, 0, 480, 480);
}