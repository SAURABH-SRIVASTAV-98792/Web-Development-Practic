let divs = document.querySelectorAll(".box");
//divs[0].innerText = "Jai Mata Di";
//divs[1].innerText = "Jai Mata Di";
//divs[2].innerText = "Jai Mata Di";
let idx = 1;
for(div of divs){
    div.innerText =`new unique value ${idx}`;
    idx++;
}