const input = document.getElementById('input');
const strength = document.getElementById('strength')

input.addEventListener('input',(e) => {
    let password = e.target.value
    const regexCapitals = /[A-Z]/g;
    const regexSmall = /[a-z]/g;
    let capitalsCount = password.match(regexCapitals) || []
    let smallsCount = password.match(regexSmall) || []
    console.log(capitalsCount.length)

    if(password.length >0 && password.length<6) {
        input.style.borderColor = 'red';
        strength.innerHTML = 'week'
        strength.style.color = 'red'
        strength.style.display = 'block'
    }
    else if(password.length >=7 && password.length <=10 && capitalsCount.length>0){
        input.style.borderColor = 'orange';
        strength.innerHTML = 'medium'
        strength.style.color = 'orange'
    }
    else if(password.length >10 && password.length <=16 && capitalsCount.length>0){
        input.style.borderColor = 'green';
        strength.innerHTML = 'strong'
        strength.style.color = 'green'
    }
    else if(password.length === 0) {
            input.style.borderColor = 'black';
            strength.style.color = 'black'
            strength.innerHTML = ''
        }




    // if(size.length >2 && size.length<=5) {
    //     input.style.borderColor = 'red';
    //     strength.innerHTML = 'week'
    //     strength.style.color = 'red'
    //     strength.style.display = 'block'
    // }
    // else if(size.length >5 && size.length<10 ) {
    //     input.style.borderColor = 'orange';
    //     strength.innerHTML = 'medium'
    //     strength.style.color = 'orange'
    // }
    // else if(size.length >= 10) {
    //     input.style.borderColor = 'green';
    //     strength.innerHTML = 'strong'
    //     strength.style.color = 'green'

    // } else {
    //     input.style.borderColor = 'black';
    //     strength.style.color = 'black'
    //     strength.innerHTML = ''
    // }
})