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
pos=secretMessage.indexOf('right');
replaceByKnow(pos);
pos=secretMessage.indexOf('the');
replaceByKnow(pos);
pos=secretMessage.indexOf('first');
replaceByKnow(pos);
pos=secretMessage.indexOf('time');
replaceByKnow(pos);

console.log(secretMessage.join(' '));
function replaceByKnow(pos){
 secretMessage[pos]='know';   
}