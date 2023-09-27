var grad = document.querySelector('.grad');

window.onmousemove = e => {
    var x = e.clientX,
        y = e.clientY;
        
    grad.style.setProperty('--mouse-x', `${x}px`)
    grad.style.setProperty('--mouse-y', `${y}px`)
}