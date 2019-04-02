// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
secretMessage.pop();
secretMessage.push('to','program');
let pos = secretMessage.indexOf('easily');
secretMessage[pos]='right';
secretMessage.shift();
secretMessage.unshift('Programming');
pos=secretMessage.indexOf('get');
replaceByKnow(pos);
secretMessage.splice(secretMessage.indexOf('right'),1);
secretMessage.splice(secretMessage.indexOf('the'),1);
secretMessage.splice(secretMessage.indexOf('first'),1);
secretMessage.splice(secretMessage.indexOf('time,'),1);
console.log(secretMessage.join(' '));


function replaceByKnow(pos){
 secretMessage[pos]='know';   
}