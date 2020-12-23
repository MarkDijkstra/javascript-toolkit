/** 
 * FadeIn effect
 */
function fadeIn(element, speed) {
    var fadeEffect = setInterval(function () {
        if (!element.style.opacity) {
            element.style.opacity = 0;
        }
        if (element.style.opacity < 1) {
            element.style.opacity += 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, speed);
}