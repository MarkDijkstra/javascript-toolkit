/**
 * Get offset values element
 */
function getOffset(element){
    if (!element.getClientRects().length) {
        return { 
           top : 0, 
           left: 0 
        };
    }

    var rect = element.getBoundingClientRect();
    var win  = element.ownerDocument.defaultView;

    return ({
        top : rect.top  + win.pageYOffset,
        left: rect.left + win.pageXOffset
    });
}