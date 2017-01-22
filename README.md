# profanity-finder.js 
[![NPM](https://nodei.co/npm/profanity-finder.png?downloads=true&stars=true)](https://nodei.co/npm/profanity-finder/)

Simple profanity finding library for javascript to detect swear language. You can include this library in your projects for easily detecting swear words or bad words.

## Installation
```
  npm install profanity-finder --save
```
## Usage
```js
  var profanityfinder = require('profanity-finder');
  var findprofanity = profanityfinder.findprofanity;

  var text="this is shit";
  var x= findprofanity(text);
  
```
The value of x will be true if any hate speach is found in the passed string to `findprofanity()`
## Contributing
Clone the project and submit your improvements via pull request. Dont forget to checkout profanity finding library for other programming languages: 
https://github.com/gautamkrishnar/profanity-finder

## Release History

* 1.0.1 Initial release
* 1.0.2 Improved perfomance
