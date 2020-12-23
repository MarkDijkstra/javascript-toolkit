/**
 * Add class
 */
function addClass(element, classname, exclude){
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
        if (!hasClass(element[i], classname) && exclude == '' && !hasClass(element[i], exclude)){
            var combined             = element[i].className + ' ' + classname;
                element[i].className = combined.trim();            
        }
    }
}