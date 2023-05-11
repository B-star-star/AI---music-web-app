
Harry_Potter_Theme_Song="";
Peter_Pan="";
LeftWristx=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;

function setup(){
  canvas=createCanvas(500,400);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();
  poseNet=ml5.poseNet(video,modeLoaded)
  pseNet.on('pose',gotPoses)
}

function modeLoaded(){
  console.log("Posenet is Initialised");
}

function preload(){
    Harry_Potter_Theme_Song =loadSound("music.mp3");
    Peter_Pan =loadSound("music2.mp3");
}

function draw(){

    image(video,0,0,500,400);
}

function gotPoses(){
  
}