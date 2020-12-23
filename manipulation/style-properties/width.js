/**
 * Get width element
 */
function getWidth(element, type) {
    if (type === 'inner') {
       return element.clientWidth;
    } else if (type === 'outer') {
       return element.offsetWidth;
    }
    var s = window.getComputedStyle(element, null);
    if (type === 'width') {
       return element.clientWidth - parseInt(s.getPropertyValue('padding-left')) - parseInt(s.getPropertyValue('padding-right'));
    } else if (type === 'full') {
       return element.offsetWidth + parseInt(s.getPropertyValue('margin-left')) + parseInt(s.getPropertyValue('margin-right'));
    }
    return null;
}