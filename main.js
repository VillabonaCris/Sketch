const d = document
const range = d.getElementById('range')
const sketch = d.querySelector('.sketch-container')
let color = d.getElementById('color')
const clear = d.getElementById('clear')
const eraser = d.getElementById('eraser')

let eraserbool = false

eraser.addEventListener('click', () =>{
  if(eraserbool){
    eraserbool = false
    eraser.style.boxShadow = 'none'
  }else{
    eraserbool = true
    eraser.setAttribute('style', 'box-shadow: 0px 3px 12px 3px rgba(82,84,255,0.76);')
  }

  
})


let template = ''

for(let i = 0; i < (16 * 16); i++){
  template += `<div class="pixel"></div>`
}

sketch.innerHTML = `${template}`

let divs = d.querySelectorAll('.pixel')


divs.forEach(item => item.addEventListener('mousemove', () => {
  item.style.backgroundColor = (eraserbool) ? '#ffffff' : color.value
}))


range.addEventListener('change', (e) => {
  template = ''
  let arrTemplate = new Array(Number(e.target.value * e.target.value))
  arrTemplate.fill(`<div class="pixel"></div>`, 0)
  template = arrTemplate.join('')
  
  sketch.innerHTML = template
  sketch.setAttribute('style', `grid-template-columns: repeat(${e.target.value}, 1fr);`)

  divs = d.querySelectorAll('.pixel')
  divs.forEach(item => item.addEventListener('mousemove', (e) => {
    item.style.backgroundColor = (eraserbool) ? '#ffffff' : color.value
  }))

})


clear.addEventListener('click', () => divs.forEach(item => item.style.backgroundColor = 'white'))