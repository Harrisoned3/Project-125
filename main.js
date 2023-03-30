rightWristX = 0;
leftWristX = 0;
difference= 0;
function setup() {
video = createCapture (VIDEO);
video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', Gotresults);
}
function draw(){
background("#00008B");
textSize(difference);
fill("#888888888");
text('Harrison',90,300,);
document.getElementById("font").innerHTML = "Font Size will be =" + difference +"px";

}
function modelLoaded(){
console.log("poseNet  is Initialized!");
}
function Gotresults(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference =floor( leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX +"difference =" + difference);
}

}
