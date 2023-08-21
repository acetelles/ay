var song1 = "";
var song2 = "";
var leftWrist = 0;
var rightWrist = 0;


function preload() {
    song1 = loadsound("music.mp3");
    song2 = loadsound("music2.mp3");
} 

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    Fill('#FF0000');
    stroke('#FF0000');
}

function gotPoses() {
    if(results.length > 0){
        console.log(results);   
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftwrist + "leftWrist = " + leftWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}