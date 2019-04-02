// you can write js here

console.log('exo-5');

let input='Hi fancy seeing you here';
let voyels=['a','e','i','o','u','y'];
let resultArray=[];

for(i=0;i<input.length;i++){
    //console.log(input.charAt(i));
    if(voyels.indexOf(input.charAt(i))>-1){
        resultArray.push(input.charAt(i));
    }
    /*for(j=0;j<voyels.length;j++){
        if(input.charAt(i)===voyels[j]){
            console.log(input.charAt(i));
        }
    }*/
}
console.log(resultArray.join('').toUpperCase());