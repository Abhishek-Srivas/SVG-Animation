//Js time :- lets do this.....................(to check how to do comment)


function drop(){ // fuction to make the drop fall
    var drop_image = document.getElementById("drop");
    // to get the x co-ordinate of mouse position
    var x = event.clientX;
    // to get the y-co-ordinate of mouse position
    var y = event.clientY;
    drop_image.style.top = y+"px";
    drop_image.style.left=x+"px";
    console.log(x);
    console.log(y);
    document.getElementById("drop").style.display = "block  ";
    var pos = y; 
    var id = setInterval(frame,5) // for call frame funcion again and again
    function frame(){

        if(pos == 2000 ){
            clearInterval(id);
        }else{
            pos++;
            drop_image.style.top =  pos +"px";
        }
        
    } 
      
}


