var term1 = document.getElementById('term-1')
var term2 = document.getElementById('term-2')
var term2 = document.getElementById('term-3')
var title = document.getElementById('title')

term1.addEventListener('input') = () => {
    title.innerText = term1.textContent
}