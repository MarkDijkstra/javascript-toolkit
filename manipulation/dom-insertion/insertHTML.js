/**
 * Add class (old browsers)
 */
function insertHtml(element, position, html){
    if (!element) { 
        return;
    }
    element = selector(element);
    for (var i=0; i<element.length; i++) { 
        element[i].insertAdjacentHTML(position, html);	       
    }
}