var term1 = document.getElementById('term1')
var term1Text = document.getElementById('term1-text')
var term2 = document.getElementById('term2')
var term2Text = document.getElementById('term2-text')
var term3 = document.getElementById('term3')
var term3Text = document.getElementById('term3-text')
var title = document.querySelector('.title')

term1.oninput = () => {
    title.innerHTML = term1.value
}

term1.onkeydown = () => {
    term1Text.innerHTML = term1.value
}

term2.onkeydown = () => {
    term2Text.innerHTML = term2.value
}

term3.onkeydown = () => {
    term3Text.innerHTML = term3.value
}
