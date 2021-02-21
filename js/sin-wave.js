// document.body.innerText='sfffsfffsdfdfsdfsdfdffsdfsdfdfdfsdfdfsdfsfsfffsdfsdfsdfsfssfffsdf';

let boxElement = document.getElementById("box");

// boxElement.style.top='100px';

var step=0;
var down=true;
var up=false;
var x_direction=0;
function Sin(){
    if(up==false){
        step+=1;
        boxElement.style.top=500+step+'px';
        x_direction+=0.8;
        boxElement.style.left=x_direction+'px';
    }
    else{
        step-=1;
        boxElement.style.top=500+step+'px';
        x_direction+=0.8;
        boxElement.style.left=x_direction+'px';
    }
    if(boxElement.style.top>="700px" ){
        // console.log("Test1")
        down=false;
        up=true;
        // x_direction+=50;
        // boxElement.style.left=x_direction+'px';
    }
    if(boxElement.style.top<='200px'){
        // console.log("Test2")
        down=true;
        up=false;
        // x_direction+=50;
        // boxElement.style.left=x_direction+'px';
    }
}


for (let i = 0; i <10 ; i++) {
    setInterval(Sin,i*3000);
}

