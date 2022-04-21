/*
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');
*/
let emoji =document.getElementsByClassName('far');

const stars= document.querySelectorAll('.fa-star');
const emojies = [...document.getElementById("emojies").children];
stars.forEach(el => {
    el.addEventListener('click', function(obj) {
        const element = obj.target;
        const role = element.getAttribute('role');
        allGray(); 
        setStars(role);
        convertEmoji(role);
    });
});
const allGray=()=>{
    stars.forEach(el => {
        el.style.color='gray';
    });
}
const setStars=(role)=>{
    for (let index = 0; index < role; index++) {
        const element = stars[index];
        element.style.color="#f7ad23";
    }
}

const convertEmoji=(role)=>{
    hideAllFacets();
    translateFace(role);
}

const hideAllFacets=()=>{
    emojies.forEach(el=>{
        el.style.display='none';
    })
}
// display face accoding to  index
const translateFace =(position)=>{
    const element = emojies[position-1];
    element.style.display="block"
}
setStars(1);
translateFace(1);
