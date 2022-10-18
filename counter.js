const button1 = document.getElementById("b1")
const button2 = document.getElementById('b2')
const count = document.getElementById('count-number')

button1.addEventListener('click', ()=>{
// count++
// screen.innerHTML = count;
count.innerHTML = parseInt(count.innerHTML) + 1
})

button2.addEventListener('click', ()=>{
    count.innerHTML = parseInt(count.innerHTML)-1
})


