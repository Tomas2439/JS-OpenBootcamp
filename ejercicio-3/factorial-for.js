let factorial_for = 1; //Empieza en uno porque 0! = 1 

  for (let i = 1; i <= 10; i++) {
    factorial_for = i * factorial_for;
  }
console.log(factorial_for); //el resultado es 3628800 = !10