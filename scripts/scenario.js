document.getElementById("entofr").addEventListener("click", function() {
   let en = document.getElementById("enAnglais");
   en.hidden = true;
   let fr = document.getElementById("enFrancais");
   fr.hidden = false;
   let btn = document.getElementById("entofr");
   btn.hidden = true;
   let btnfr = document.getElementById("frtoen");
   btnfr.hidden = false;
   
 });

 document.getElementById("frtoen").addEventListener("click", function() {
   let en = document.getElementById("enAnglais");
   en.hidden = false;
   let fr = document.getElementById("enFrancais");
   fr.hidden = true;
   let btn = document.getElementById("entofr");
   btn.hidden = false;
   let btnfr = document.getElementById("frtoen");
   btnfr.hidden = true;
 });
 