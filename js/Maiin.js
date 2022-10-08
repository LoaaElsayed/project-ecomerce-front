// ////////////////////////header & scroll//////////////////////
let header = document.getElementById("header");
let btnscroll = document.getElementById("btn");
window.onscroll = function() {
    if(scrollY >= 200) {
        header.classList.add("newheader") ;
        btnscroll.style.display="inline-block";
        
    }
    else 
    {
        header.classList.remove("newheader") ;
        btnscroll.style.display="none";
    }
}
btnscroll.onclick =function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}


////////////////////////////owl carsol/////////////////////////////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})
//////////////////////////action buttons/////////////////////
let btnelhome =Array.from(document.querySelectorAll(".btnhome")) ;
btnelhome.forEach((elebtn) =>{
    elebtn.addEventListener("click",function(elementt){
        btnelhome.forEach((elecontrol) => {
            elecontrol.classList.remove("active");
            elementt.target.classList.add("active");
        })
    })
})

let btnel =Array.from(document.querySelectorAll(".klma"));
btnel.forEach((btngroub) => {
    btngroub.addEventListener("click", function(pramt){
        btnel.forEach((controlgroup) => {
            controlgroup.classList.remove("active");
            pramt.target.classList.add("active");
        })
    })
})

let title = document.getElementById("title");
let pardra = document.getElementById("pardra");
function button1() {
    let photo1 = document.getElementById("imges");
    photo1.setAttribute("src", "../image/photo_1.svg")
}
function button2() {
    let photo2 = document.getElementById("imges");
    photo2.setAttribute("src", "../image/photo_2.svg");
    title.textContent = "Schedule a Showing";
    pardra.textContent = "Hously allows a buyer to schedule an instant showing and gain a private viewing without the need for multiple parties to be involved. You pick the time that works for you!";
}
function button3() {
    let photo3 = document.getElementById("imges");
    photo3.setAttribute("src", "../image/photo_3.svg");
    title.textContent = "Submit an Offer";
    pardra.textContent = "Hously walks a buyer through the purchase agreement process making the paperwork appear effortless. With our custom workflows and progress analytics,you will always know where your purchase stands. No more phone tag and unreturned emails!"

}
function button4() {
    let photo4 = document.getElementById("imges");
    photo4.setAttribute("src", "../image/photo_4.svg");
    title.textContent = "Property Inspection";
    pardra.textContent = "No one wants to buy a lemon. Book an inspection with a licensed inspector, then submit the repair requests all via the Hously platform.";
}
function button5() {
    let photo5 = document.getElementById("imges");
    photo5.setAttribute("src", "../image/photo_5.svg");
    title.textContent = "Appraisal";
    pardra.textContent = "Hously monitors the appraisal process ensuring the home you are purchasing meets or exceeds the price you are paying.";
}
function button6() {
    let photo6 = document.getElementById("imges");
    photo6.setAttribute("src", "../image/photo_6.svg");
    title.textContent = "Closing Deal";
    pardra.textContent = "Finally the closing packet is sent to the Title office, and the day has come… You have Hously the home of your dreams!";
}
/////////////////////////////range/////////////////////////////////////////
function vall(value) {
    let placevalue = document.getElementById("pvalue");
    let avrageval = document.getElementById("avrageval");
    let regex =/(\d)(?=(\d{3})+(?!\d))/g;
    placevalue.innerHTML ="$"+value;
    let s = value.toString().replace(regex, "$1.");
    avrageval.innerHTML = "$"+s;
}
/////////////////galary///////////////////////////////
let bckscr = document.getElementById("backscreen");
let imscreen = document.getElementById("imgscreen");
let close = document.getElementById("close");
let gallary = Array.from(document.getElementsByClassName("itemimg"));
let numimg = document.getElementById("numberimge");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let currentindex = 0;
for (let i = 0; i < gallary.length; i++) {
    gallary[i].addEventListener("click",slider);
    function slider(srcimg) {
        bckscr.style.display = "flex";
        let imgurl = srcimg.target.src;
        imscreen.style.backgroundImage = `url(${imgurl}) `;
        currentindex = gallary.indexOf(srcimg.target);
        numimg.innerHTML = `${currentindex+1} / ${gallary.length}`;
    }
}

close.addEventListener("click", exite);
function exite() {
    bckscr.style.display = "none";
}

next.addEventListener("click",nextbtn);
function nextbtn() {
    currentindex++;
    if(currentindex >  gallary.length-1){
        currentindex = 0;
    }
    let imgurl = gallary[currentindex].src;
    imscreen.style.backgroundImage = `url(${imgurl})`;
    numimg.innerHTML = `${currentindex+1} / ${gallary.length}`;
}

prev.addEventListener("click",prevbtn);
function prevbtn() {
    currentindex--;
    if(currentindex < 0){
        currentindex = gallary.length-1;
    }
    let imgurl = gallary[currentindex].src;
    imscreen.style.backgroundImage = `url(${imgurl})`;
    numimg.innerHTML = `${currentindex+1} / ${gallary.length}`;
}
//antimation & valation//
// window.onload = function() {
//     var canvas = document.getElementById("sky");
//     var ctx = canvas.getContext("2d");
//     var W = window.innerWidth-10;
//     var H = window.innerHeight-30;
//     canvas.width = W;
//     canvas.height = H;
//     var mf = 300;
//     var flakes = [];
//     for(var i = 0; i < mf; i++)
//         {
//             flakes.push({
//                 x: Math.random()*W,
//                 y: Math.random()*H,
//                 r: Math.random()*2+2,
//                 d: Math.random() + 1,
//             })
//         }
//     function drawFlakes()
//     {
//         ctx.clearRect(0, 0, W, H);
//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         for(var i = 0; i < mf; i++)
//         {
//             var f = flakes[i];
//             ctx.moveTo(f.x, f.y);
//             ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
//         }
//         ctx.fill();
//         moveFlakes();
        
//     }
//     var angle = 0;
//     function moveFlakes(){
//         angle += 0.0001;
//         for(var i = 0; i < mf; i++)
//         {
//             var f = flakes[i];
//             f.y += Math.pow(f.d, 2) + 1;
//             f.x += Math.sin(angle) * 2;
//             if(f.y > H){
//                 flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
//             }
            
//             }
//     }
//     setInterval(drawFlakes, 60);
// }



// let signin = document.getElementById("loginbtn");
// signin.addEventListener("click", logSign);
// let signup = document.getElementById("regest");
// signup.addEventListener("click", logSign);
// function logSign(){
//     let email =document.getElementById("eem").value;
//     let password = document.getElementById("pass").value;
//     let name = document.getElementById("nameuser");
//     let regxemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let regepass = /^[0-9]{8}$/;
//     let regname = /^\w{4||9}$/
//     let link = document.getElementById("link_1");
//     let error_1 = document.getElementById("emailHelp");
//     let error_2 = document.getElementById("passHelp");
//     let error_3 = document.getElementById("nameHelp");
//     if ( regxemail.test(email) == true){
//         if ( regepass.test(password) == true){
//             if (regname.test(name) == true) {
//                 link.setAttribute("href", "../html/home.index.html");
//             }
//             else{
//                 error_3.innerText = "Your name is not Correct 'LOL'";
//             }
//         }
//         else{
//             error_2.innerText = "Your password is not Correct 'LOL'";
//         }
//     }
//     else{
//         error_1.innerText = "Your Email is not Correct 'LOL'";
//     }
//     if (Checkbox.checked == true){
//         alert("ok, your account saved")
//     }
// }











