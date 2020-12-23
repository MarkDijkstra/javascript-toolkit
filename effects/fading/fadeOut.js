/** 
 * FadeOut effect
 */
function fadeOut(element, speed) {
    var fadeEffect = setInterval(function () {
        if (!element.style.opacity) {
            element.style.opacity = 1;
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, speed);
}