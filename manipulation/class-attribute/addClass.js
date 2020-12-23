/**
 * Add class (old browsers)
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


/**
 * Add class (modern browsers support) (untested)
 */
 function addClass(element, classname, exclude){
    if (!element) { 
        return;
    }
    if (!exclude) {
        exclude = '';
    }
    if (document.querySelector('body').classList) {
        if (exclude == '' && !element[i].classList.contains(exclude)) {
            var list = classname.split(' ');
            item.classList.add(...list);
        }
    } else { 
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
}