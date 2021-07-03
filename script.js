const scrolly =  window.pageYOffset; 
addEventListener('scroll',()=>{
   
    if ((window.pageYOffset <= 1700)&&(window.pageYOffset>= 140) ){
    let sitebar = document.querySelector('.sitebar');
    sitebar.style.marginTop = window.pageYOffset-140  + "px"
    }} )
    