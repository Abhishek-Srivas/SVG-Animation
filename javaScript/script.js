//Js time :- lets do this.....................(to check how to do comment)


document.getElementById("welcome").innerHTML = "Welcome, press the button to start your jorney";//starting banner text

function bouyant(){ // function for rotating backgroud
    var pos=100;
    var rot = 0;
    var element1 = document.querySelector('#backgorund-Animation li:nth-child(1)');
    var element2 = document.querySelector('#backgorund-Animation li:nth-child(2)');
    var element3 = document.querySelector('#backgorund-Animation li:nth-child(3)');
    var element4 = document.querySelector('#backgorund-Animation li:nth-child(4)');
    var element5 = document.querySelector('#backgorund-Animation li:nth-child(5)');
    var element6 = document.querySelector('#backgorund-Animation li:nth-child(6)');
    
   var id = setInterval(frame,150); // Box-1
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
    
   var id = setInterval(frame1,700); // Box-2
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


   var id1 = setInterval(frame2,500); // Box-3
   function frame2(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 6; 
            console.log(pos)
            element3.style.top =  pos +"vh";
            element3.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame3,150); // Box-4
   function frame3(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 1 ;
            console.log(pos)
            element4.style.top =  pos +"vh";
            element4.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame4,300); // Box-5
   function frame4(){

       if(pos == 0 ){
            pos=100;
       }else{
            pos--;
            rot = rot + 6 ;
            console.log(pos)
            element5.style.top =  pos +"vh";
            element5.style.transform = `rotate(${rot}deg)`;
       }    
   }

   var id = setInterval(frame5,200); // Box-6
   function frame5(){

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
bouyant();  // Calling fuction for background animation


function start(){   //to start jouney 
    document.getElementById("container").style.backgroundImage = "url('./Images/Background.jpg')";
    document.getElementById("start").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("fairy").style.display = "block";
    document.getElementById("backgorund-Animation").style.display = "none";

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
        rotation();
    }

}

function rotation(){

}

function realmChange(){ //for realm change with the help of portal button
    document.getElementById("container").style.backgroundImage = "url('./Images/Background2/Background2.jpg')";
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
        if(pos == -10){
            clearInterval(id);
            nemoMove();
        }
        else{
            pos--;
            whale.style.left = pos + "vw";
            console.log("whale:- " + whale.style.left);  // for checking the value of whale in console
            console.log("Fish:- " + gfish.style.left);  // for checking the value of fish in console 
            if(whale.style.left == 80+"vw"){
                gfish.style.display="none";
            }

            if(whale.style.left == 40+"vw"){
                alert("Whale will eat nemo,Save him by clicking on him and informing him about the whale");
            }
        }
    }
}

function saveNemo(){
    var nemo = document.getElementById("nemo");
    nemo.style.top = 95+"vh";
    alert("Nemo:- Thankyou for informing me my Friend")
}

function nemoMove(){
    var nemo = document.getElementById("nemo");
    var pos=10;
    var id = setInterval(frame,40)
    function frame(){
        if(pos == 110){
            clearInterval(id);
        }
        else{
            pos++;
            nemo.style.left = pos + "vw";
        }
    }
}

/*document.getElementById("").style.transform = `rotate(${var}deg)`; rotation syntax texting */




/*                              Experience Panel :- 
Problem faced and learned:-
1.How to use JS                                                 ref:- w3schools
2.How to make a element appear using js                         ref:- w3..
3.Accessing elements and tags                                   ref:- ~
4.Making a certain element move by clicking on button           ref:- ~
5.Getting the position of cursor                                ref:- ~
6.Calling a function again and again                            ref:- ~
7.Making drop appear at the place of mouse click                ref:- (own logic)putting every thing in section and adding onclick in section >
8.Avoiding drop overflow                                        setting position to relative
9.Adding new button to toggle the fairy world
10.Adding new world portal for making it fun
11.Human World <3
12.Adding Fish without disturbing layout
13.Moving whale on click 
14.Whale eating fish
15.Adding floating box type baackground                         idea:-Youtube code:-Own (Hint:Use list from Youtube)
16.Making boxes float                                           Done by self using setinterval (took a lot of time)
17.Rotating them while floating                                 ref:-w3 for rotate func Js logic(own)       

recursive calling syntax:-
:-w3schools


*/