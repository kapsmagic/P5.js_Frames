function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
 image(video,0,0,640,480);
    fill(0,0,255)
    rect(0, 0, 15, 480,);
    rect(0,465,690, 15,);
    rect(0,0,600, 15,);
    rect(625, 0, 15, 480);
    fill(255,251,0);
    circle(30, 30, 100);
    circle(30, 460, 100);
    circle(610, 460, 100);
    circle(610, 30, 100);
    fill(245,102,255);
    circle(30, 30, 60);
    circle(610, 30, 60)
    fill(64,251,186);
    circle(625, 105, 60);
    circle(15, 105, 60);
    circle(15, 385, 60);
    circle(625, 385, 60);
    circle(535, 10, 60);
    circle(533, 462, 60);
    circle(108, 462, 60);
    circle(105, 10, 60);
}