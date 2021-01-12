/**
 * Element selector
 */
 function selector(element) {
    if (!element) return;
    if (element === 'document') {
       return [document];
    } else if (element === 'window') {
       return [window];
    } else if (typeof element === 'string') {
       if( element.charAt( 0 ) === '#' && document.getElementById(element.slice( 1 ))) {
          return document.getElementById(element.slice( 1 ));
       } else {
          return document.querySelectorAll(element);
       }         
    } else {
       return Array.isArray(element) ? element : [element];
    }
 }
 
 /**
 * Element selector (ES6/ES2015)
 */
 const selector = (element) => {
   if (!element) return;
   if (element === 'document') {
      return [document];
   } else if (element === 'window') {
      return [window];
   } else if (typeof element === 'string') {
      if( element.charAt( 0 ) === '#' && document.getElementById(element.slice( 1 ))) {
         return document.getElementById(element.slice( 1 ));
      } else {
         return document.querySelectorAll(element);
      }         
   } else {
      return Array.isArray(element) ? element : [element];
   }
} 