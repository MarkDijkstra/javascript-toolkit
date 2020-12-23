/** 
 * FadeIn effect
 */
 function fadeIn(element, speed) {
    if (typeof(element) === 'string') {
       element = document.querySelectorAll(element);
    } else if (element.tagName) { 
       element =[element]; 
    }  
    for (var i=0; i<element.length; i++) {
       var fadeEffect = setInterval(function(ii) {
          if (!element[ii].style.opacity) {
             element[ii].style.opacity = 0;
          }
          if (element[ii].style.opacity < 1) {
             element[ii].style.opacity += 0.1;
          } else {
             clearInterval(fadeEffect);
          }
       }, speed, i);
    }
 }