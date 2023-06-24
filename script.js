const close=document.querySelector('.close');
const span=document.querySelector('.span-2');
const nav=document.querySelector('.nav-item')

span.addEventListener('click', ()=>{

    nav.classList.add("active2") ;
});

close.addEventListener('click',function(){
    
    nav.classList.remove("active2") ;
});

