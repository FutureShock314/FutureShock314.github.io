var term1 = document.getElementById('term1')
var term2 = document.getElementById('term2')
var term3 = document.getElementById('term3')
var title = document.querySelector('.title')

term1.oninput = () => {
    title.innerHTML = term1.value
}

term1.onkeydown = () => {
    title.innerHTML = term1.value
}