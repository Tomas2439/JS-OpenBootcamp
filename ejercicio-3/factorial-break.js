let factorial_brake = 1;// 0! = 1
let iterador=1;

while (iterador <=10){

    factorial_brake = factorial_brake*iterador;
    if(factorial_brake == 120){
        break;
    }
    iterador++
}
console.log("Para probar el break, hicimos que se rompa 5! = ",factorial_brake); //5! = 120