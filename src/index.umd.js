!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],e):e((t||self).movielib={},t.isomorphicUnfetch)}(this,function(t,e){function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=/*#__PURE__*/o(e);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i.apply(this,arguments)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var u=/*#__PURE__*/function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,r(e,o);var i=n.prototype;return i.getMovies=function(){return this.request("/movie")},i.getMovie=function(t){return this.request("/movie"+t)},i.getMovieQuote=function(t){return this.request("/movie/"+t+"/quote")},n}(/*#__PURE__*/function(){function t(t){this.authToken=void 0,this.baseUrl=void 0,this.authToken=t.authToken,this.baseUrl="https://the-one-api.dev/v2"}return t.prototype.request=function(t,e){var o=""+this.baseUrl+t,r=i({},e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.authToken}});return n.default(o,r).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}());t.MovieLib=function(t){this.movie=void 0,this.movie=new u(t)}});