document.onkeydown = checkButton;

let cube={
    x:0,
    y:0,
    id:'main'
}

function checkButton(e) {

    let k=e || window.event;

    if (k.keyCode === 40){
        //key: "Arrowdown"
        cube.x +=10;
        render(cube.id, cube.x,cube.y);  
    }
    else if (k.keyCode === 37){
        //key: "Arrowleft"
        cube.y -=10;
        render(cube.id, cube.x,cube.y);
    }
    else if (k.keyCode === 39){
        // key: "Arrowright" 
        cube.y += 10;
        render(cube.id, cube.x,cube.y);   
    }
    else if (k.keyCode === 38){
        //key: "Arrowup"  
        cube.x -=10;
        render(cube.id, cube.x,cube.y);  
    }             
}

function render(id,x,y){
    document.getElementById(id).style.top = x + 'px';
    document.getElementById(id).style.left = y + 'px';
}
render(cube.id, cube.x,cube.y);