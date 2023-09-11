//document.querySelector("w drum").addEventListener("click",fun);
/*document.getElementsByTagName("button")[0].addEventListener("click",fun);
document.getElementsByTagName("button")[1].addEventListener("click",fun);
document.getElementsByTagName("button")[2].addEventListener("click",fun);
document.getElementsByTagName("button")[3].addEventListener("click",fun);
document.getElementsByTagName("button")[4].addEventListener("click",fun);
document.getElementsByTagName("button")[5].addEventListener("click",fun);
document.getElementsByTagName("button")[6].addEventListener("click",fun);*/
//syntax  addEventListener("type",function);
//document.querySelector("button w").addEventListener("click",fun);
/*
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",fun);
   // document.addEventListener("keypress",fun1);
    

}


function fun(){
    //var audio=new Audio("sounds/tom-1.mp3");
    //audio.play();
   // console.log(this.innerHTML);
   //this.style.color="white";
   if(this.innerHTML=="w"){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();

   }
   else if(this.innerHTML=="a"){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();

   }
   else if(this.innerHTML=="s"){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();

   }
   else if(this.innerHTML=="d"){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();

   }
   else if(this.innerHTML=="j"){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();

   }
   else if(this.innerHTML=="k"){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();

   }
    else{
    var audio=new Audio("sounds/snare.mp3");
    audio.play();

   }
   

 //alert("i got clicked");
}
document.addEventListener("keypress",function(event){
    makesound();
});

function makesound(){
    if(this.innerHTML=="w"){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    
       }
       else if(this.innerHTML=="a"){
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    
       }
       else if(this.innerHTML=="s"){
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
    
       }
       else if(this.innerHTML=="d"){
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
    
       }s
       else if(this.innerHTML=="j"){
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
    
       }
       else if(this.innerHTML=="k"){
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
    
       }
        else{
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
    
       }
 
}
*/
//CLICK
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    //this.style.color="white";
    document.querySelector("h1").style.color="red";

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
//KEY PRESS

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a": 
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
