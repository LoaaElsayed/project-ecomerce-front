let dmode =document.getElementById("dark");
let darkheader =document.getElementsByClassName("newheader");
let content =document.getElementById("form");
let content_1 =document.getElementsByClassName("inputt");
let content_2 =document.getElementById("btndark");
let body =document.body;
let darkcard =document.querySelectorAll(".card");
let darkcardarrow =document.getElementsByClassName("owl-nav");
let darkform =document.getElementsByClassName("form");
let textbutton = document.querySelectorAll(".btn");
let darkfooter =document.getElementById("foot");
dmode.addEventListener("click",function(){
    dmode.classList.toggle("changeposition");
    body.classList.toggle("sec");
    content.classList.toggle("darkfrom");
    for (let i = 0; i < content_1.length; i++) {
        content_1[i].classList.toggle("darklist");
    }
    content_2.classList.toggle("btndark");
    for (let j = 0; j < darkcard.length; j++) {
        darkcard[j].classList.toggle("darkcard");
    }
    darkcardarrow[0].classList.toggle("darkarrow");
    darkform[0].classList.toggle("darkform");
    darkheader[0].classList.toggle("darkhead");
    darkfooter.classList.toggle("darkfooter");
    for (let b = 0; b < textbutton.length; b++) {
        textbutton[b].classList.toggle("darktext");
    }
})

