const redColor = document.querySelector('.red')
const blueColor = document.querySelector('.blue')
const greenColor = document.querySelector('.green')
const pinkColor = document.querySelector('.pink')
const purpleColor = document.querySelector('.purple')
const body = document.querySelector('.pageBody')


redColor.addEventListener('click', function(){
    body.style.backgroundColor = 'red'
})

blueColor.addEventListener('click', function(){
    body.style.backgroundColor = 'blue'
})

greenColor.addEventListener('click', function(){
    body.style.backgroundColor = 'green'
})

pinkColor.addEventListener('click', function(){
    body.style.backgroundColor = 'pink'
})

purpleColor.addEventListener('click', function(){
    body.style.backgroundColor = 'purple'

})