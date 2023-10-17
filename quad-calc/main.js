var term1 = document.getElementById('term1')
var term2 = document.getElementById('term2')
var term3 = document.getElementById('term3')
var title = document.querySelector('.title')

term1.addEventListener('input') = () => {
    title.innerHTML = term1.value
}