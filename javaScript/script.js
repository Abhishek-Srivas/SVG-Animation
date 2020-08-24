//Js time :- lets do this.....................(to check how to do comment)
// to get the x co-ordinate of mouse position
var x = event.clientX;
// to get the y-co-ordinate of mouse position
var y = event.clientY;

function drop(){ // fuction to make the drop fall
    var drop_image = document.getElementById("drop");
    var pos = 0; 
    var id = setInterval(frame,20) // for call frame funcion again and again
    function frame(){

        if(pos == 250 ){
            clearInterval(id);
        }else{
            pos++;
            drop_image.style.top = 400+pos +"px";
        }
        
    }

    document.getElementById("drop").style.top = 50 + "vh";
    
}
