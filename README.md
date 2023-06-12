# profanity-finder.js [![npm version](https://badge.fury.io/js/profanity-finder.svg)](https://badge.fury.io/js/profanity-finder)
Simple profanity finding library for javascript to detect swear language. You can include this library in your projects for easily detecting swear words or bad words.

## Installation
```
  npm install profanity-finder --save
```
## Usage
```js
  let _lib = require('profanity-finder');
  let profanityManager = _lib.profanityManager;;

  let text="this is shit";
  let x= profanityManager.findprofanity(text);


  let remove = profanityManager.replaceProfanity(text);//replace profanity word with *
  console.log("output : ",remove);

  
```
The value of x will be true if any hate speech is found in the passed string to `findprofanity()`

## Contributing
Clone the project and submit your improvements via pull request. Dont forget to checkout profanity finding library for other programming languages: 
https://github.com/gautamkrishnar/profanity-finder

## Stats
[![NPM](https://nodei.co/npm/profanity-finder.png?downloads=true&stars=true)](https://nodei.co/npm/profanity-finder/)

## Release History

* 1.0.1 Initial release
* 1.0.2 Improved perfomance
