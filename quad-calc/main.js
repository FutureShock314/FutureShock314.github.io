var in_t1 = document.getElementById('in_t1')
var out_a = document.querySelector('.term1-text')
var in_t2 = document.getElementById('in_t2')
var out_b = document.querySelector('.term2-text')
var in_t3 = document.getElementById('in_t3')
var out_c = document.querySelector('.term3-text')
var title = document.querySelector('.title')

in_t1.oninput = () => {
    out_a.innerHTML = in_t1.value
}

in_t2.oninput = () => {
    out_b.innerHTML = in_t2.value
}

in_t3.oninput = () => {
    out_c.innerHTML = in_t3.value
}
