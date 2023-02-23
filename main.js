noseX=0;
noseY=0;
mushtache=""
function setup(){
    canvas = createCanvas(450,420);
    canvas.position(550,270); 
    camera = createCapture(VIDEO);
    camera.hide();

    addModel=ml5.poseNet(camera, modelsReady);
    addModel.on("pose",poses);

    
}

function preload(){
   mushtache = loadImage("https://i.postimg.cc/FHN7XV5n/istockphoto-1152878060-612x612-removebg-preview.png");
}

function draw(){
    
image(camera,0,0,450,420);
/*fill("red");
stroke("red");
circle(noseX, noseY, 30);
*/

image(mushtache , noseX, noseY, 120, 100);

}

function takesnapshot(){
    save("Aayush.png");
}


function poses(results){
if(results.length>0){

console.log(results);

noseX = results[0].pose.nose.x-147;
console.log("Nose X = "+ noseX);

noseY = results[0].pose.nose.y-75;
console.log("Nose Y ="+ noseY);
}
}

function modelsReady(){
    console.log("Pose Net Loaded!!");
}

