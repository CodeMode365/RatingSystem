let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');
let emoji =document.getElementsByClassName('far');


//angry
star2.onclick = function(){
    star2.style.color='gold';
    star3.style.color='gray';
    star4.style.color='gray';
    star5.style.color='gray';
    star2.style.color='gold';
    // emoji.syle.transform = 'translateX(-100%)';



}
//sad
star3.onclick = function(){
    star2.style.color='gold';
    star3.style.color='gold';
    star4.style.color='gray';
    star5.style.color='gray';
   emoji.style.display ='none';
   console.log(em)

}
//moderate
star4.onclick = function(){
    star2.style.color='gold';
    star3.style.color='gold';
    star4.style.color='gold';
    star5.style.color='gray';
    // emoji.syle.transform = 'translateX(-200%)';

}
//smily
star5.onclick = function(){
    star2.style.color='gold';
    star3.style.color='gold';
    star4.style.color='gold';
    star5.style.color='gold';
    // emoji.syle.transform = 'translateX(-300%)';

}
//laugh
star1.onclick = function(){
    star1.style.color='gold';
    star2.style.color='gray';
    star3.style.color='gray';
    star4.style.color='gray';
    star5.style.color='gray';
    // emoji.syle.transform = 'translateX(-400%)';

}

// emoji.foreach((emiji)=>{
//     emoji.style.trans
// })