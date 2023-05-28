

let numeri = document.getElementById('numeri');

for ( let x =1; x<=100; x++){

    let y = document.createElement('div');
    y.classList.add('quadrato');

    if((x % 5 === 0 ) && (x % 3 === 0)){
        y.innerText="FizzBuzz";
        y.classList.add('fizzbuzz');
    }

    else if (x % 3 === 0){
        y.innerText="Fizz";
        y.classList.add('fizz');
    }

    else if ( x % 5 === 0){
        y.innerText="Buzz";
        y.classList.add('buzz');
        
    }
    else{
        y.innerText= x ;
    }

    numeri.append(y);
}