//Js time :- lets do this.....................(to check how to do comment)


function start(){
    
    document.getElementById("container").style.backgroundImage = "url('/Images/Background.jpg')";
    document.getElementById("start").style.display = "none";
    document.getElementById("fairy").style.display = "block";
}

function drop(){ // fuction to make the drop fall

    var drop_image = document.getElementById("drop");

    // to get the x co-ordinate of mouse position
    let x = event.clientX;
    // to get the y-co-ordinate of mouse position
    let y = event.clientY;

    drop_image.style.top = y + "px";
    drop_image.style.left= x + "px";

    console.log("value of x:- " + x); //to check the value of x in console
    console.log("value of y:- " + y); //to check the value of y in console

    document.getElementById("drop").style.display = "block  ";
    var pos = y; 
    var id = setInterval(frame,5) // for call frame funcion again and again
    function frame(){

        if(pos == 754 ){
            clearInterval(id);
        }else{
            pos++;
            drop_image.style.top =  pos +"px";
        }    
    } 
      
}

function fairy(){
    let fairy = document.getElementById("fairy");
    if(fairy.style.top != 5+"vh" ){                //Trying new things with if else
        fairy.style.top = 5 +"vh";
        alert("Fairy says click on the clouds to see a rain drop");
    }
    else{
        fairy.style.top = 20 +"vh";
        alert("don,t disturb fairy, she can send you in other realm")
    }

}







/*                              Experience Panel :- 
Problem faced and learned:-
1.How to use JS                                                 ref:- w3schools
2.how to make a element appear using js                         ref:- w3..
3.accessing elements and tags                                   ref:- ~
4.making a certain element move by clicking on button           ref:- ~
5.getting the position of cursor                                ref:- ~
6.calling a function again and again                            ref:- ~
7.making drop appear at the place of mouse click                ref:- (own logic)putting every thing in section and adding onclick in section >
8.avoiding drop overflow                                        setting position to rel

Moving logic :-
:-syntax from w3schools
:-logic self made

*/