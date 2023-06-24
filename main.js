const busy=document.querySelector('.service22')
const quoter=document.querySelector('.quoter')

let price=0;
let Amount= 12500;
busy.addEventListener('click', function(){
    const name=document.querySelector('.name').value
    const servicess=document.querySelector('.servicess').value
    const locate=document.querySelector('.locate').value
    const contact=document.querySelector('.contact').value

    let quote=` <div class="combine">
    <button onclick=shut()>close</button>
    <h3 class="name-1">Name:  ${name} </h3>
    <h3 class="require-s">Services:  ${servicess} </h3>
    <h3 class="location-1">Location:    ${locate}    </h3>
    <h3 class="phone-num">Contact:  ${contact}  </h3>
    <div>
    <h4>Amount: ${Amount} </h4>
    </div>
    </div>`
    quoter.innerHTML=quote;
    console.log(quote)

     quoter.style.display="block";
    if(name == '' && servicess == '' && locate == '' && contact == ''){
       alert('Details Required')
    }else if( name == '' && servicess == '' && locate == '' && contact == ''){
        return Amount=''
    }else{
        return quote;
    }

})


function shut(){
    quoter.style.display="none";
}

 