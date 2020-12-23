/**
 * Has class (old browsers)
 */
function hasClass(element, classname) {
    if (!classname) {
      return false;
    }
    if ((' ' + element.className + ' ').indexOf(' ' + classname + ' ') > -1) {
      return true;
    }
    return false;
}

/**
 * Has class (modern browsers support) (untested)
 */
function hasClass(element, classname) {
    if (!classname) {
        return false;
    }
    if (document.querySelector('body').classList) {
       if (element.classList.contains(classname)) {
           return true;
       }
       return false;
    } else {
        if ((' ' + element.className + ' ').indexOf(' ' + classname + ' ') > -1) {
            return true;
        }
        return false;
    }
}