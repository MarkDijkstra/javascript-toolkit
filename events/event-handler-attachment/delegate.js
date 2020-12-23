/**
 * Event delegation 
 */
function delegateSelector(selector, event, childSelector, handler) {
    var is = function(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    };
    var elements = document.querySelectorAll(selector);
    [].forEach.call(elements, function(el, i){
        el.addEventListener(event, function(e) {
            if (is(e.target, childSelector)) {
                handler(e);                
            }
        });
    });
}