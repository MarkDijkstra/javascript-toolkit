/**
 * Element selector
 */
function selector(element) {
    if (!element) return;
    if (element === 'document') {
        return [document];
    } else if (element === 'window') {
        return [window];
    } else if (typeof element === 'string') {
        return document.querySelectorAll(element);
    } else {
        return Array.isArray(element) ? element : [element];
    }
} 