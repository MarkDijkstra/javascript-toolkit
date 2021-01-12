/**
 * Is empty check
 */
function isEmpty(str) {
   return (!str || 0 === str.length);
}

 /**
  * Is empty check (ES6/ES2015)
  */
const isEmpty = str => {
   return (!str || 0 === str.length);
} 