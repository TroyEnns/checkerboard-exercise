// Your JS goes here
currentRow=1;
function genDivs(){ 
      var e = document.body;  
      for(var i = 0; i < 7; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        row.style.margin="0";
        row.style.width="100%";
        for(var x = 1; x <= 8; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.innerText = "";
            cell.style.borderStyle="solid";
            cell.style.height="11.1%";
            cell.style.width="11.1%";
            cell.style.display="inline-block";
            cell.style.boxSizing = "border-box";
            cell.style.float="left";
            cell.style.paddingBottom='11.1%';
            if(currentRow%2===0){
                if(x%2===0){
                    cell.style.backgroundColor="black";
                    cell.style.border="black";
                }else{
                    cell.style.backgroundColor="red";
                    cell.style.border="red";
                }
            }else if(currentRow%2!==0){
                if(x%2===0){
                    cell.style.backgroundColor="red";
                    cell.style.border="red";

                }else{
                    cell.style.backgroundColor="black";
                    cell.style.border="black"
                }
            }
            row.appendChild(cell);
        } 
        currentRow++;
        row.style.display="flex";
        e.appendChild(row);
        }
    }
genDivs();