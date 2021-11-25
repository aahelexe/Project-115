noseX=0;
noseY=0;
function preload()
{}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

    poseNet=ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
}
function modelReady()
{
    console.log("PoseNet Ready!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.x);
        noseX=results[0].pose.nose.x-5;
        noseY=results[0].pose.nose.y-5;
    }
}
function draw()
{
    image(video, 0, 0, 640, 480);
}
function take_snapshot()
{
    save('mypic.png');
}