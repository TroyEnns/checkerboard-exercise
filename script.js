// Your JS goes here
currentRow=1;
var colors=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
var currentColor="#";

function genDivs(){ 
      var e = document.body;  
      for(var i = 0; i < 7; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        row.style.margin="0";
        row.style.width="100%";
        for(var x = 1; x <= 8; x++){ 
            var cell = document.createElement("div");
            for(var j=0;j<6;j++){
                currentColor+=colors[Math.floor(Math.random()*colors.length)];
            } 
            cell.className = "gridsquare"; 
            cell.innerText = "";
            cell.style.borderStyle="solid";
            cell.style.height="11.1%";
            cell.style.width="11.1%";
            cell.style.display="inline-block";
            cell.style.boxSizing = "border-box";
            cell.style.float="left";
            cell.style.paddingBottom='11.1%';
            cell.style.backgroundColor=currentColor;
            cell.style.border=currentColor;
            row.appendChild(cell);
            currentColor="#";
        } 
        currentRow++;
        row.style.display="flex";
        e.appendChild(row);
        }
    }
genDivs();


function randomColor(){
    for(i=0;i<6;i++){
        currentColor+=colors[Math.floor(Math.random()*colors.length)];
    }
    alert(currentColor);
}