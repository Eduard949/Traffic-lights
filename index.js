var colours = ["Red", "Yellow", "black", "black", "Green", "Red", "black", "Red"];
var timings = [0, 5000, 1000, 3000, 5000, 1000];
var i = 0;

function lights(){
  (function theLoop(){
	setTimeout (function(){
    if (i == 0){
      red.style.backgroundColor = colours[i];
    }
    else if(i == 1){
      yellow.style.backgroundColor = colours[i];  
    }
    else if(i == 2){
      red.style.backgroundColor = colours[i];
      yellow.style.backgroundColor = colours[i+1];
      green.style.backgroundColor = colours[i+2];
      
    }
    else if(i == 3){
    red.style.backgroundColor = colours[i+2];
    green.style.backgroundColor = colours[i+3];
      
    }
    else if(i == 4){
    red.style.backgroundColor = colours[i+3];
    yellow.style.backgroundColor = colours[i+2];
      
    }
    i++;
      theLoop();
     if (i == 5){
       i = 0;
   
    }   
    },timings[i])
  
 
      })()  
    }

onload = lights;