let _lib = require('profanity-finder');
let profanityManager = _lib.profanityManager;;

let text="this is shit";
let x= profanityManager.findprofanity(text);


let remove = profanityManager.replaceProfanity(text);//replace profanity word with *
console.log("output : ",remove);

