//Js time :- lets do this.....................(to check how to do comment)


document.getElementById("welcome").innerHTML = "Welcome, press the button to start your jorney";//starting banner text

function bouyant(){
    var pos=100;
    var rot = 0;
    var element1 = document.querySelector('#backgorund-Animation li:nth-child(1)');
    var element2 = document.querySelector('#backgorund-Animation li:nth-child(2)');
    var element3 = document.querySelector('#backgorund-Animation li:nth-child(3)');
    var element4 = document.querySelector('#backgorund-Animation li:nth-child(4)');
    var element5 = document.querySelector('#backgorund-Animation li:nth-child(5)');
    var element6 = document.querySelector('#backgorund-Animation li:nth-child(6)');
    
   var id = setInterval(frame,150); // for call frame funcion again and again
   function frame(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 3 ;
            console.log(pos)
            element1.style.top =  pos +"vh";
            element1.style.transform = `rotate(${rot}deg)`;
       }    
   }
    
   var id = setInterval(frame1,700); // for call frame funcion again and again
   function frame1(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 7 ;
            console.log(pos)
            element2.style.top =  pos +"vh";
            element2.style.transform = `rotate(${rot}deg)`;
       }    
   }


   var id1 = setInterval(frame2,500); // for call frame funcion again and again
   function frame2(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 10 ;
            console.log(pos)
            element2.style.top =  pos +"vh";
            element2.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame3,150); // for call frame funcion again and again
   function frame3(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 1 ;
            console.log(pos)
            element3.style.top =  pos +"vh";
            element3.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame4,300); // for call frame funcion again and again
   function frame4(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 6 ;
            console.log(pos)
            element4.style.top =  pos +"vh";
            element4.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame5,200); // for call frame funcion again and again
   function frame5(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 3 ;
            console.log(pos)
            element5.style.top =  pos +"vh";
            element5.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame6,150); // for call frame funcion again and again
   function frame6(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 3 ;
            console.log(pos)
            element6.style.top =  pos +"vh";
            element6.style.transform = `rotate(${rot}deg)`;
       }    
   }

} 
bouyant();


function start(){   //to start jouney 
    document.getElementById("container").style.backgroundImage = "url('../Images/Background.jpg')";
    document.getElementById("start").style.display = "none";
    document.getElementById("welcome").style.display = "none";
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

    document.getElementById("drop").style.display = "block";
    var pos = y; 
    var id = setInterval(frame,5); // for call frame funcion again and again
    function frame(){

        if(pos == 754 ){
            clearInterval(id);
        }else{
            pos++;
            drop_image.style.top =  pos +"px";
        }    
    } 
      
}

function fairy(){ //Fairy movement and alert
    let fairy = document.getElementById("fairy");
    if(fairy.style.top != 5+"vh" ){                //Trying new things with if else
        fairy.style.top = 5 +"vh";
        alert("Fairy says click on the clouds to see a rain drop");
    }
    else{
        fairy.style.top = 20 +"vh";
        alert("don,t disturb fairy, she can send you in other realm")
        document.getElementById("isekai").style.display = "block";
    }

}

function realmChange(){ //for realm change with the help of portal button
    document.getElementById("container").style.backgroundImage = "url('../Images/Background2/Background2.jpg')";
    document.getElementById("fairy").style.display = "none";
    document.getElementById("isekai").style.display = "none";
    document.getElementById("nemo").style.display = "block";
    document.getElementById("gfish").style.display = "block";
    document.getElementById("whale").style.display = "block";
}

function whale(){ // function for the movement of whale
  
    let whale = document.getElementById("whale");
    let gfish = document.getElementById("gfish");
    let id = setInterval(movement,150);
    let pos = 89;
    function movement(){
        if(pos == 0){
            clearInterval(id);
        }
        else{
            pos--;
            whale.style.left = pos + "vw";
            console.log("whale:- " + whale.style.left);  // for checking the value of whale in console
            console.log("Fish:- " + gfish.style.left);  // for checking the value of fish in console 
            if(whale.style.left == 80+"vw"){
                gfish.style.display="none";
            }
        }
    }
}


/*document.getElementById("").style.transform = `rotate(${var}deg)`;*/




/*                              Experience Panel :- 
Problem faced and learned:-
1.How to use JS                                                 ref:- w3schools
2.how to make a element appear using js                         ref:- w3..
3.accessing elements and tags                                   ref:- ~
4.making a certain element move by clicking on button           ref:- ~
5.getting the position of cursor                                ref:- ~
6.calling a function again and again                            ref:- ~
7.making drop appear at the place of mouse click                ref:- (own logic)putting every thing in section and adding onclick in section >
8.avoiding drop overflow                                        setting position to relative
9.adding new button to toggle the fairy world
10.adding new world portal for making it fun
11.Human World <3  

Moving logic :-
:-syntax from w3schools
:-logic self made

*/