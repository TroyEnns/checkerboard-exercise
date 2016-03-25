// Your JS goes here
currentRow=1;
var gradientOne=["#984BD8","#8642C0","#7539A8","#643090","#532779","#421E61","#311549"];
var gradientTwo=["#3498DB","#2B7EB6","#226592","#1A4C6D","#113249","#081924","#000000"];
function genDivs(){ 
      var e = document.body;  
      for(var i = 0; i < 7; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        row.style.margin="0";
        for(var x = 1; x <= 8; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.innerText = "";
            cell.style.borderStyle="solid";
            cell.style.height="11.1em";
            cell.style.width="11.1em";
            cell.style.display="inline-block";
            cell.style.boxSizing = "border-box";
            cell.style.float="left";
            cell.style.paddingBottom='11.1%';
            if(currentRow%2===0){
                if(x%2===0){
                    cell.style.backgroundColor=gradientOne[currentRow-1];
                    cell.style.border=gradientOne[currentRow-1];
                }else{
                    cell.style.backgroundColor=gradientTwo[currentRow-1];
                    cell.style.border=gradientTwo[currentRow-1];
                }
            }else if(currentRow%2!==0){
                if(x%2===0){
                    cell.style.backgroundColor=gradientTwo[currentRow-1];
                    cell.style.border=gradientTwo[currentRow-1];

                }else{
                    cell.style.backgroundColor=gradientOne[currentRow-1];
                    cell.style.border=gradientOne[currentRow-1];
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