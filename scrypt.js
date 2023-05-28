

let numeri = document.getElementById('numeri');

for ( let x =1; x<=100; x++){

    let y =document.createElement('div');

    if((x % 5 === 0 ) && (x % 3 === 0)){
        y.innerText="FizzBuzz";
    }

    else if (x % 3 === 0){
        y.innerText="Fizz";
    }

    else if ( x % 5 === 0){
        y.innerText="Buzz";
    }
    else{
        y.innerText= x ;
    }

    numeri.append(y);
}