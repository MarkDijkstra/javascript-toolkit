/**
 * Remove class
 */
function removeClass(element, classname, exclude){
    if (!element) { 
        return;
    }
    if (!exclude) {
        exclude = '';
    }
    if (typeof(element) === 'string') {
        element = document.querySelectorAll(element);
    } else if (element.tagName) { 
        element =[element]; 
    }
    for (var i=0; i<element.length; i++) {
        if (!hasClass(element[i], exclude)) {
           element[i].className = element[i].className.replace( new RegExp('\\b(' + classname.split(' ').join('|') + ')\\b', 'gi') , " ").replace(/\s{2,}/g, '');
        }
    }
}