// Obțineți referința la elementul canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var isDrawing = false;

function addToCollection(item) {
    
    var collection = localStorage.getItem('myCollection');
  
    if (collection) {
      
      collection = JSON.parse(collection);
    } else {
      
      collection = [];
    }
  
    collection.push(item);
  
    localStorage.setItem('myCollection', JSON.stringify(collection));
  }
  
  function getCollection() {
    var collection = localStorage.getItem('myCollection');

    if (collection) {
      
      return JSON.parse(collection);
    } else {
      
      return [];
    }
  }
  var listofcolors = getCollection();
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


function startDrawing(event) {
  isDrawing = true;
  randomcolor();
  draw(event);
}


function draw(event) {
  if (!isDrawing) {
    return;
  }

  var x = event.clientX - canvas.offsetLeft;
  var y = event.clientY - canvas.offsetTop;
  
  


  ctx.fillRect(x, y, 10, 10);
}

function stopDrawing() {
  isDrawing = false;
}



function addColors() {
    var ROGVAIV = ["Red", "Green", "Blue", "Yellow", "Orange","Indigo","Violet"];
  
    for (var i = 0; i < ROGVAIV.length; i++) {
      addToCollection(ROGVAIV[i]);
    }
  }
addColors();


var canExecute = true;
function randomcolor() {

    canExecute = false;
  setTimeout(function() {
    canExecute = true;
  }, 500);
    var randomColor = Math.floor(Math.random() * listofcolors.length);
    ctx.fillStyle = listofcolors[randomColor];
    
}
