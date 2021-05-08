song1="";
song2="";
leftWristX="0";
leftWristY="0";
rightWristX="0";
rightWristY="0";

function preload(){
 song1=loadSound("song1.mp3");
 song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
}
function modelLoded(){
    console.log("modelLoded");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
     
    }
}