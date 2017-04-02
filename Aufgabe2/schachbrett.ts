//Aufgabe 2
//Name: saile christian
//Matrikel: 254877
//Datum: 2.April 2017
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
let zahlRice: number=1;
let zeile: number=0;

for (let i: number = 0; i < 64; i++) {
    let table: HTMLTableElement = document.createElement("table");
     document.body.appendChild(table);
    table.textContent = zahlRice.toExponential(5);
    zahlRice= zahlRice *2;
    zahlRice.toString();
    
if(i % 8 == 0)
   {table.className +="abbruch";
   zeile ++;
}
if(zeile % 2 == 1){
   if(i%2 == 1 ){
        table.className += "black";
        }
    else
        {table.className += "white";
    }
    if(zeile %2 == 0){
   if(i%2 == 0){
      table.className += "white"
        }
   else
        {table.className += "black";
}
}
    
 
 }
  
}



});


