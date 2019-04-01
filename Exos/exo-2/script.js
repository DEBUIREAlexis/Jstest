// you can write js here
console.log('exo-2');
let isSubscibed=false;//ce cera un Booléen
let age=prompt('Age?');

if(!isSubscibed){
    var raceNumber=Math.floor(Math.random()*1000);
}
if(age>18 && isSubscibed){
    console.log('You will race at 9:30 am');
}else if((age>18 || isSubscibed) && !(age>18 && isSubscibed)){
    console.log('You will race at 11:00 am '+raceNumber)
}else if(!(age>18) || !isSubscibed){
    console.log('You will race at 12:30 '+raceNumber)
}else{
    console.log('Go to see the registration desk');
}