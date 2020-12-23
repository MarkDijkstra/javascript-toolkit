/**
 * Has class
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