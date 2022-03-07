function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,325);
    video=createCapture(VIDEO);
    video.hide();  
    tintColor=""; 
}

function draw(){
    image(video,0,0,640,480);
    tint(tintColor);
}

function apply_filter(){
tintColor=document.getElementById("input_color_filter").value;
}

function take_snapshot(){
    save("picture.png");
}





