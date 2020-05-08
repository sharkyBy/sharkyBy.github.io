

// nav button

let btn = document.getElementsByClassName('header__nav_wrap')[0];
console.log(btn);
btn.addEventListener('click',clickBtn);
let menu = document.getElementsByClassName('header__nav_menu')[0];
console.log(menu);
window.addEventListener('scroll',scroll);
function scroll (e) {
    
    if(window.scrollY > 100) {

        if (btn.classList.contains('header__nav_btn-active') || social.classList.contains('header__social-active')) {
            btn.classList.remove('header__nav_btn-active');            
            social.classList.remove("header__social-active");

            for (let i = 0; i < menu.children.length; i++) {
                menu.children[i].classList.remove('header__nav_menu-active');
            }

            for(let i = 0; i < social.children.length; i++) {
                social.children[i].classList.remove('header__social-media')
            }
        } 
          
    }
    console.log(`scrollY = ${window.scrollY}; pageYOffse = ${window.pageYOffset}`)
}



function clickBtn(event){    
    this.classList.toggle('header__nav_btn-active');    
    // this.firstElementChild.classList.toggle('header__nav_btn-active');    
    // span.classList.contains('header__nav-btn-active') ? span.style.background = "transparent": span.style.background = "white";
    for(let i = 0; i < menu.children.length; i++){             
    menu.children[i].classList.toggle('header__nav_menu-active');
        
    }
    
}

// header__social btn

let social = document.getElementsByClassName("header__social")[0];
console.log(social)
social.addEventListener('click',socialBtn);

function socialBtn(event) {
    this.classList.toggle("header__social-active");
    if (window.getComputedStyle(social).width == '50px') {
        console.log('width == 50px') ;
        
        for(let i = 0; i < social.children.length; i++) {
            console.log(social.children[i]);
            social.children[i].classList.toggle('header__social-media');
        }
        
    }else {
        console.log('width != 50px')
    }


    }
   
    


//The input name animation

let form = document.getElementsByTagName('form')[0];

let input = form.querySelectorAll('input');
let textArea = form.querySelector('textarea');

textArea.onfocus = function(){
    form.children[2].classList.add('clickInput');
};

for( let i =0; i < input.length - 1;i++){
    input[i].onfocus = function(e){
        form.children[i].classList.add('clickInput');
        console.log(e.target);
        
    }    
}



/* for(let i = 0; i < icon.length; i++) {
    icon[i].onfocus = function (e) {
        console.log(icon[i]);
      icon[i].children[0].children[1].toogle('briefly'); 
    console.log (e.target);  
    }
}   */ 




// for 3d cards rotate 
/* 
let next = document.getElementById('nextBtn');
next.addEventListener('click',clickNext);
let angle = 0;

function clickNext(event){
    let card = document.querySelector('.profSkill__items');
    console.log(card);
    angle += 120;
    card.setAttribute("style", `transform: rotateY(${angle}deg)`);
} */
   

